import { inject } from "@angular/core";
import { CanActivateFn, GuardResult, MaybeAsync, RouteConfigLoadEnd, Router } from "@angular/router";
import { AuthService } from "../services/auth.service";

export const scopesGuard = (scope: string): CanActivateFn => {
    return (): MaybeAsync<GuardResult> => {
        const authService = inject(AuthService)
        const router = inject(Router)

        const userScopes = authService.getUserScopes()

        if (userScopes.find((userScopes) => userScopes === scope)){
            return true
        } else{
            return router.navigate(['not-authorized'])
        }
    }
}