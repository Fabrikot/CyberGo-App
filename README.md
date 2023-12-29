Technologies used : Front end done with Visual Studio 2019, Back end with Visual Studio 2022.
- VueJS front App with multiple pages : it uses modified chart components originating from Vue-chartJS (https://www.chartjs.org/) for the Polar and Bubble charts, and vue-graph for the 3D Bar Chart ((https://www.npmjs.com/package/vue-graph).
- .NET 7 Web API with Entity Framework 7 : contains all the CRUD operations for the “Notes” (=grades) object and some different endpoints to load the user’s data.
- SQL Server Database that holds the data.
This solution regroups the front-end of the application, which is divided into Views that each represent a page. As of now it is locally hosted on port http://localhost:1337 .
When you start the app, you should add http://localhost:1337/mymenu to access the homepage of the application.

As you will see in the vue.config.js file, 4 pages currently exist on the application :
	- http://localhost:1337/mymenu : which is operated with the Dashboard.vue file, and uses 2 chart components : Bubble.vue and Polar.vue. It is the main page of the application, where we load all of the user data into charts to visualize the most important aspects of each category.
	- http://localhost:1337/category : operated via the CategoriesStat.vue file, it uses 2 html & css components : BarGauge.vue and Gauge.vue. This page is loaded whenever we click on a category of the dashboard's polar chart. It goes in depth about the answered questions within the selected category.
	- http://localhost:1337/wip :  operated via the WIP.vue file : it's a work in progress page to try new things to maybe incorporate to the application.
	- http://localhost:1337/questionnaire : operated via the Questionnaire.vue file. This is the page where the user would answer their questionnaire, which would update the database with their chosen answers. 
This is done with the API part of the application.

![image](https://github.com/Fabrikot/CyberGo-App/assets/107400688/16f2e2c5-3493-42e9-8f04-51ea99d06162)

Important things to keep in mind : 
	- As this is still in development, the API endpoint is also hosted locally, on http://localhost:5032/api/. To help function this locally, we've changed the CORS policy within the API, see doc : https://learn.microsoft.com/en-us/aspnet/core/security/cors?view=aspnetcore-7.0 .
You will probably want to change this for production.


SQL Server Database Diagram :
This shows the way the different tables are linked within the database.

![image](https://github.com/Fabrikot/CyberGo-App/assets/107400688/cfab32af-97c2-46a3-ad40-a231165f1a62)

 
The advices are loaded separately within the noteUsers table when the API is called with : /API/Advice/{UserId}

This is how the database looks within the MSSQL application :

![image](https://github.com/Fabrikot/CyberGo-App/assets/107400688/92855e7d-69c0-4a4b-9fd3-0cc89f230dd4)

This application allows us to manipulate the database data directly from the tables. 
 
Here are all the endpoints to the API, more information about the API is available on http://localhost:5032/swagger/index.html when you start the API solution :
![image](https://github.com/Fabrikot/CyberGo-App/assets/107400688/b228ac8f-e060-4755-81ac-c1aba89d17d0)

When hosting the API solution, the endpoints above are available on http://localhost:5032/ .
Example of the NotesUser object :

![image](https://github.com/Fabrikot/CyberGo-App/assets/107400688/05e42f7f-3d03-498e-8747-507335949c83)








