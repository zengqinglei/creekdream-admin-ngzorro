import { StartupService } from './startup.service';

export function StartupServiceFactory(startupService: StartupService) {
    return () => startupService.load();
}
