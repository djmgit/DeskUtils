## DeskUtils

DeskUtils is an app for FreshDesk platform. [FreshDesk](https://freshdesk.com/) is a platform for easily handling of your customer queries and providing quick and efficient support facilities to yur customers.

This is an utility app. It automatically reads out ticket content to supportmen so that they can give some rest to their eyes!. Also it allows supportmen to quickly search the web for anything, anytime and query 3 diffrent search engines (google, bing and duckduckgo) from within the app rather than manually openning new tabs to make the search. Apart from these two features it also allows you to add shortcut (links) to your important websites. You can add a shortcut by simply providing a title and link to any website which you need to access often. This provides you with quick navigation to your important websites (sites related to your work which you often require) and also you do not have to search for your those links in your long list of bookmarks. It helps you keep your shortcuts at one place and launch them from FreshDesk itself. You can also delete shortcuts.

### How to run the app

The app is not yet published on FreshDesk app market. Howver it can be run from source.

- Download or clone this repository.

- Open your console, navigate to the repository folder, and execute the following command:
  ``` fdk run ```
  
- Log into your Freshdesk account (if you do not have a Freshdesk account, sign up [here](https://freshdesk.com/signup)).

- Go to ticket details page, in the address bar, append the URL with ?dev=true. 
  For example, the URL should look like - https://subdomain.freshdesk.com/helpdesk/tickets/1?dev=true During local testing,
  you may see a shield icon in the browser address bar. Clicking on the icon will display a warning message. 
  A warning message is displayed as the support portal runs on HTTPS while the server that is used for local 
  testing runs on HTTP. Click "Load unsafe scripts" to continue testing.
  
- In the home page, select the Tickets tab from the left navigation bar and click any ticket.
  The rendered app will be displayed on the right side of the page as shown below.
  
### How to use the app

- Click and open any ticket from the tickets page.

- Click on ```Read out ticket``` to let the app read out the ticket content to you.

- Use search utility to search the web from inside your app rather than openning a search engine in another tab.
  Just type in your query, select a search engine and hit the search icon. You can select multiple options to 
  query multiple search engines.
  
- You can create a shortcut to your most frequently used sites. Click on **Quick Navigate** label, two input fields appear.
  Provide title of your shortcut and link to your website. After you are done, click on **Add shortcut**, and a new shortcut
  will be created for you. Next time when you require visiting the site, just click on the link from the Quick Navigate
  section and your site will open in a new tab.
  
### Technology Stack

- HTML
- CSS
- JavaScript
- Jquery

### Browser information

- Tested on Google Chrome on Ubuntu 16.04
