import { StartupService } from './startup.service';

export function StartupServiceFactory(startupService: StartupService): Function {
    return () => startupService.load();
}
