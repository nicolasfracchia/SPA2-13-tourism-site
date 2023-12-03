## 1 - CREATE NEW PROJECT
``` ng new miniproject-tourism ```

## 2 - INCLUDE BOOTSTRAP (CDN in index.html)
```HTML
    <!-- SOURCE: https://getbootstrap.com/ -->

    <!-- CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!-- JS -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
```

## 3 - CREATE NAVIGATION MENU AND FOOTER
I'm removing the "Weather" option from the menu since it's related to a city and there is no point in having a tab of weather if I must get there with a city.

## 4 - CREATE HOME COMPONENT
```BASH
    ng g c components/home
```
1. Import home component into app.components.ts
2. Layout home component
    - Banner
    - Section title
    - Website description, aim, etc...

## 5 - SET THE ROUTES
1. Include the necessary classes for the router in the app.component.ts file and create the navigation functions
    - Router
    - RouterLink
    - RouterLinkActive
    - RouterOutlet
    - navigation: ``` this.router.navigate(['...']); ```
2. Set the routes in app.routes.ts
    - Regular routes: home, cities
    - Routes with params: cities/:city (used to show the weather)
    - Redirect path "" to "home"
    - Set default route to 404 component

## 6 - CREATE CITIES COMPONENT
```BASH
    ng g c components/cities
```
1. Create city interface ```ng g i interfaces/city```
2. Create cities-data.ts inside the component to load some data using the interface.
3. Create a service to get all the cities ```ng g s services/cities``` and use it in the cities component.
4. Load the cities in cities.component.html using bootstrap cards and ```*ngFor```
5. Style the cards.
6. Set the RouterLink prop for each card to redirect to the weather page.

## 7 - CREATE WEATHER COMPONENT
```BASH
    ng g c components/weather
```
1. Create weather interface ```ng g i interfaces/weather``` and temperatures interface ```ng g i interfaces/temperatures```
2. Create weather-data.ts inside the component to load some data using the interfaces.
3. Create the service to get the city information.
4. Get the data for the selected city or show 404.
5. Create ImportantText directive to set styles in the "Best time to visit" element.
    - ``` ng g d directives/importantText ```
    - Set the styles into the directive.
    - Import the directive into the weather.component.ts
    - Apply the directive in the element inside weather.component.html

## 8 - CREATE CAROUSEL COMPONENT
```BASH
    ng g c components/carousel
```
1. Create attractions interface ```ng g i interfaces/attractions``` (two interfaces together on this one)
2. Create carousel-data.ts inside the component to load some data using the interface.
3. Create the service to get the attractions information for the selected city.
4. If there are attractions, the component will show the images carousel and information. If undefined, the component remains hidden.

## 9 - CREATE TECHIDEAS COMPONENT
```BASH
    ng g c components/techIdeas
```
1. Layout form with required fields in tech-ideas.component.html.
2. Created form group.
3. Imported necesary classes for reactive forms in tech-ideas.component.ts
    - CommonModule
    - FormsModule
    - ReactiveFormsModule
    - FormBuilder
4. Created submit function.
5. Created the service to get only the cities name, imported into tech-ideas.component.ts and implemented on the form drop-down.
6. Created service to load dataProtectionPolicies to fill the space a bit.
7. Form styled with Bootstrap.
8. Add validations
    - Angular Validator
    - Custom validations
    - Error messages
    - Submit button disabled until validations pased
9. Log the form values on submit and reset the form.

## 10 - CREATE 404 ERROR PAGE
1. Set as default route.
2. Redirects in app.routes.ts with optional message to display