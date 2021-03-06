"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var aurelia_router_1 = require("aurelia-router");
var oauth_service_1 = require("./oauth-service");
exports.OAuthService = oauth_service_1.OAuthService;
var oauth_token_service_1 = require("./oauth-token-service");
exports.OAuthTokenService = oauth_token_service_1.OAuthTokenService;
var oauth_interceptor_1 = require("./oauth-interceptor");
exports.OAuthInterceptor = oauth_interceptor_1.default;
var oauth_authorize_step_1 = require("./oauth-authorize-step");
function configure(framework, config) {
    var oauthService = framework.container.get(oauth_service_1.OAuthService);
    var oauthTokenService = framework.container.get(oauth_token_service_1.OAuthTokenService);
    var oauthInterceptor = framework.container.get(oauth_interceptor_1.default);
    config(oauthService, oauthTokenService, function (client) {
        client.configure(function (builder) { return builder.withInterceptor(oauthInterceptor); });
    });
    framework.aurelia.start().then(function () {
        oauthService.setTokenOnRedirect();
        var appRouter = framework.container.get(aurelia_router_1.AppRouter);
        appRouter.pipelineProvider.steps.splice(2, 0, oauth_authorize_step_1.OAuthAuthorizeStep);
    });
}
exports.configure = configure;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9hdXJlbGlhLW9hdXRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsaURBQTJDO0FBRTNDLGlEQUErQztBQTJCN0MsdUJBM0JPLDRCQUFZLENBMkJQO0FBMUJkLDZEQUEwRDtBQTJCeEQsNEJBM0JPLHVDQUFpQixDQTJCUDtBQTFCbkIseURBQW1EO0FBMkJqRCwyQkEzQkssMkJBQWdCLENBMkJMO0FBMUJsQiwrREFBNEQ7QUFFNUQsbUJBQ0UsU0FBaUMsRUFDakMsTUFBeUY7SUFFekYsSUFBTSxZQUFZLEdBQWlCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDRCQUFZLENBQUMsQ0FBQztJQUN6RSxJQUFNLGlCQUFpQixHQUFzQixTQUFTLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyx1Q0FBaUIsQ0FBQyxDQUFDO0lBQ3hGLElBQU0sZ0JBQWdCLEdBQXFCLFNBQVMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLDJCQUFnQixDQUFDLENBQUM7SUFFckYsTUFBTSxDQUFDLFlBQVksRUFBRSxpQkFBaUIsRUFBRSxVQUFBLE1BQU07UUFDNUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFBLE9BQU8sSUFBSSxPQUFBLE9BQU8sQ0FBQyxlQUFlLENBQUMsZ0JBQWdCLENBQUMsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0lBQ3pFLENBQUMsQ0FBQyxDQUFDO0lBRUgsU0FBUyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDN0IsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFHbEMsSUFBSSxTQUFTLEdBQWMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsMEJBQVMsQ0FBQyxDQUFDO1FBQ3hELFNBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUseUNBQWtCLENBQUMsQ0FBQztJQUMzRSxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFuQkQsOEJBbUJDIiwiZmlsZSI6ImF1cmVsaWEtb2F1dGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFtZXdvcmtDb25maWd1cmF0aW9uIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG5pbXBvcnQgeyBBcHBSb3V0ZXIgfSBmcm9tICdhdXJlbGlhLXJvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBPQXV0aFNlcnZpY2UgfSBmcm9tICcuL29hdXRoLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPQXV0aFRva2VuU2VydmljZSB9IGZyb20gJy4vb2F1dGgtdG9rZW4tc2VydmljZSc7XHJcbmltcG9ydCBPQXV0aEludGVyY2VwdG9yIGZyb20gJy4vb2F1dGgtaW50ZXJjZXB0b3InO1xyXG5pbXBvcnQgeyBPQXV0aEF1dGhvcml6ZVN0ZXAgfSBmcm9tICcuL29hdXRoLWF1dGhvcml6ZS1zdGVwJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjb25maWd1cmUoXHJcbiAgZnJhbWV3b3JrOiBGcmFtZXdvcmtDb25maWd1cmF0aW9uLFxyXG4gIGNvbmZpZzogKG9hdXRoU2VydmljZSwgb2F1dGhUb2tlblNlcnZpY2UsIGNvbmZpZ3VyZUNsaWVudDogKGNsaWVudDogYW55KSA9PiB2b2lkKSA9PiB2b2lkKSB7XHJcblxyXG4gIGNvbnN0IG9hdXRoU2VydmljZSA9IDxPQXV0aFNlcnZpY2U+ZnJhbWV3b3JrLmNvbnRhaW5lci5nZXQoT0F1dGhTZXJ2aWNlKTtcclxuICBjb25zdCBvYXV0aFRva2VuU2VydmljZSA9IDxPQXV0aFRva2VuU2VydmljZT5mcmFtZXdvcmsuY29udGFpbmVyLmdldChPQXV0aFRva2VuU2VydmljZSk7XHJcbiAgY29uc3Qgb2F1dGhJbnRlcmNlcHRvciA9IDxPQXV0aEludGVyY2VwdG9yPmZyYW1ld29yay5jb250YWluZXIuZ2V0KE9BdXRoSW50ZXJjZXB0b3IpO1xyXG5cclxuICBjb25maWcob2F1dGhTZXJ2aWNlLCBvYXV0aFRva2VuU2VydmljZSwgY2xpZW50ID0+IHtcclxuICAgIGNsaWVudC5jb25maWd1cmUoYnVpbGRlciA9PiBidWlsZGVyLndpdGhJbnRlcmNlcHRvcihvYXV0aEludGVyY2VwdG9yKSk7XHJcbiAgfSk7XHJcblxyXG4gIGZyYW1ld29yay5hdXJlbGlhLnN0YXJ0KCkudGhlbigoKSA9PiB7XHJcbiAgICBvYXV0aFNlcnZpY2Uuc2V0VG9rZW5PblJlZGlyZWN0KCk7XHJcblxyXG4gICAgLy8gQWRkIGF1dGhvcml6ZSBzdGVwIGJlZm9yZSB2aWV3LW1vZGVsIGFjdGl2YXRlIHByZWRlZmluZWQgcGlwZWxpbmUgc3RlcFxyXG4gICAgbGV0IGFwcFJvdXRlciA9IDxBcHBSb3V0ZXI+ZnJhbWV3b3JrLmNvbnRhaW5lci5nZXQoQXBwUm91dGVyKTtcclxuICAgICg8YW55PmFwcFJvdXRlcikucGlwZWxpbmVQcm92aWRlci5zdGVwcy5zcGxpY2UoMiwgMCwgT0F1dGhBdXRob3JpemVTdGVwKTtcclxuICB9KTtcclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBPQXV0aFNlcnZpY2UsXHJcbiAgT0F1dGhUb2tlblNlcnZpY2UsXHJcbiAgT0F1dGhJbnRlcmNlcHRvclxyXG59Il19
