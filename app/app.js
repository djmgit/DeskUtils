$(document).ready( function() {
    app.initialized()
        .then(function(_client) {
          var client = _client;
          client.events.on('app.activated',
            function() {
                client.data.get('ticket')
                    .then(function(data) {
                        init(data);
                    })
                    .catch(function(e) {
                        console.log('Exception - ', e);
                    });
        });
    });
});

//var CHUNK_SIZE = 125;

var DEFAULT_CHUNK_SIZE = 125;
var US_CHUNK_SIZE = 1024;
var IS_SPEAKING = false;

function remove_special(s) {
    s = s.replace(/[&\/\\#+()~%'":*?<>{}]/g, '');
    return s;
}

function init(data) {
    var description = data.ticket.description_text;

    $(".read_out").click(function() {
        init_speech(description);
    });

    init_search();
}

function init_speech(description) {
    if (!IS_SPEAKING) {
        window.speechSynthesis.getVoices();
        doTTS(description);
        $("#image_icon").attr('src', 'images/speak_cancel.svg');
    } else {
        window.speechSynthesis.cancel();
        $("#image_icon").attr('src', 'images/speak.svg');
    }
    IS_SPEAKING = !IS_SPEAKING;
}

function parsePhase1(s) {
    var out = "";

    // Take out URLs

    var urlRegex =/(\b(https?|ftp|file):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/ig;
    out = s.replace(urlRegex, "{LINK}");

    return out;
}

function getChunkSize() {
    var cs = DEFAULT_CHUNK_SIZE;
    var selectedVoice = 'Google US English';
    if(selectedVoice == 'native') {
        cs = US_CHUNK_SIZE;
    }
    return cs;
}

function getChunks(s) {
    // Second pass, take out URLs, etc

    s = parsePhase1(s);

    s = remove_special(s);

    // Chunk up the data

    var chunkList = [];
    chunkList = chunker(s, getChunkSize());
    return chunkList;
}

function chunker(s, max) {
    var chunks = [];
    var l = [];
    l = s.split(/\n/);  // Split on <CR>
    for(var i = 0; i < l.length; i++) {
        var chunk = l[i];
        if(chunk == '') {
            continue;
      }
      var siz = chunk.length;
      if(siz <= max) {
        chunks.push(chunk);
      } else {
        while(chunk.length > 0) {
            var smallerChunk = subChunker(chunk, max);
            chunks.push(smallerChunk);
            chunk = chunk.substr(smallerChunk.length);
        }
      }
    }
    return chunks;
}

function subChunker(s, max) {
    var chunk = s.substr(0, max);

    if(chunk.charAt(max) == ' ') {
        return chunk;
    }

    for(var i = chunk.length; i > 0; i--) {
        if(chunk.charAt(i) == ' ') {
            return chunk.substr(0, i);
        }
    }

    // No space found-- last resort have to cut in mid-word

    return chunk;
}

function doTTS(read_content) {
    //starting for the text to speech conversion using web speech api

    var chunkList = getChunks(read_content);
    chunkList.forEach(function(chunk, index) {
        console.log(chunk);
        chunk = chunk.trim();
        doSpeak(chunk, index, chunkList.length);
    });

    console.log('Reading Complete.');

    return false;
}

function doSpeak(s, index, size) {
    var selectedVoice = 'Google UK English Female';
    var msg = new SpeechSynthesisUtterance();

    // If the user had selected a voice, use it...

    if(selectedVoice) {
        msg.voice = window.speechSynthesis.getVoices().filter(function(voice) {
            return voice.name == selectedVoice;
        })[0];
    }

    msg.rate = 1; // 0.1 to 10
    msg.pitch = 1; // 0 to 2
    msg.text = s;

    msg.onend = function() {
        if (index === size - 1) {
            $("#image_icon").attr('src', 'images/speak.svg');
            IS_SPEAKING = !IS_SPEAKING;
        }
    };

    // Now speak...

    window.speechSynthesis.speak(msg);
    return false;
}

function init_search() {
    $(".search_button").click(function() {
        search_util();
    });
}

// Utility function for searching

function search_util() {

    // Base URLs

    var GOOGLE_URL = "https://www.google.com/search?q=";
    var BING_URL = "https://www.bing.com/search?q=";
    var DUCKDUCKGO_URL = "https://www.duckduckgo.com/?q=";

    var query = $(".search_input").val();
    query = query.replace(/\s\s+/g, '+');
    if (query === "" || query === null) {
        return;
    }

    var isGoogle = $(".google").is(":checked");
    var isBing = $(".bing").is(":checked");
    var isDuckduckgo = $(".duckduckgo").is(":checked");

    if (isGoogle) {
        var url = GOOGLE_URL + query;
        window.open(url, "_blank");
    }
    if (isBing) {
        var url = BING_URL + query;
        window.open(url, "_blank");
    }
    if (isDuckduckgo) {
        var url = DUCKDUCKGO_URL + query;
        window.open(url, "_blank");
    }
}
