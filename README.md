## DeskUtils

DeskUtils is an app for FreshDesk platform. [FreshDesk](https://freshdesk.com/) is a platform for easily handling of your customer queries and providing quick and efficient support facilities to yur customers.

This is an utility app. It automatically reads out ticket content to supportmen so that they can give some rest to their eyes!. Also it allows supportmen to quickly search the web for anything, anytime and query 3 diffrent search engines (google, bing and duckduckgo) from within the app rather than manually openning new tabs to make the search.

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
  
### Technology Stack

- HTML
- CSS
- JavaScript
- Jquery
