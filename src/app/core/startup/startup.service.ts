import { Injectable, Injector, Inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MenuService, SettingsService, TitleService } from '@delon/theme';
import { CacheService } from '@delon/cache';

@Injectable({
  providedIn: 'root'
})
export class StartupService {
  constructor(
    private menuService: MenuService,
    private settingService: SettingsService,
    private titleService: TitleService,
    private httpClient: HttpClient,
    public cache: CacheService,
    private injector: Injector) { }
res = {
    "app": {
        "name": "CHFP报名报考系统",
        "description": "CHFP报名报考系统"
    }
}

load() {
   // 应用信息：包括站点名、描述、年份
    this.settingService.setApp(this.res.app);

}
}
