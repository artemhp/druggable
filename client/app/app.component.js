angular.module('app').component(
  'app', {
    template: `        
      <nav class="navbar navbar-inverse" style="border-radius: 0;">
        <div class="container-fluid">
          <ul class="nav navbar-nav">
            <li><a ng-if="$ctrl.status.id" ng-link="['Home']">Home</a> </li>
            <li><a ng-if="!$ctrl.status.id" ng-link="['Login']">Login</a></li>
            <li><a ng-if="$ctrl.status.id" ng-link="['Logout']">Logout</a></li>
          </ul>                  
        </div>
      </nav>           
      <main>
        <div class="container">  
          <ng-outlet></ng-outlet>      
        </div>          
      </main>           
    
    `,
    $routeConfig: [
      { path: '/login', name: 'Login', component: 'login', useAsDefault: true },
      { path: '/home', name: 'Home', component: 'home' },
      { path: '/logout', name: 'Logout', component: 'logout' }
    ],
    controller: AppComponent,
  });

function AppComponent(status) {
  var $ctrl = this;
  $ctrl.status = status;
}
