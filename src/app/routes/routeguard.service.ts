import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { NzMessageService } from 'ng-zorro-antd';
import { CacheService } from '@delon/cache';
import { environment } from '../../environments/environment';

@Injectable()
export class RouteguardService implements CanActivate{
  constructor(
    private _message: NzMessageService,
    private _router: Router,
    private _cache:CacheService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    // 返回值 true: 跳转到当前路由 false: 不跳转到当前路由
    // 当前路由名称
    var path = route.routeConfig.path;
    // nextRoute: 设置需要路由守卫的路由集合
    const nextRoute = [
      // 机构路由
     'enroll', 'personal', 'ordermanage','confirmpay', 'examination', 'organizationdownload',  'scorequery',
     // 管理路由
     'candidateexamine', 'systemconfig', 'examconfig', 'scoreconfig', 'enrolldata', 'examdata',
     // 用户路由
     'personaluser' ];
    const orgUserRoute = [ 'enroll', 'personal', 'ordermanage','confirmpay', 'examination', 'organizationdownload',  'scorequery' ];
    const userRoute = [ 'personaluser' ];
    const adminRoute = [ 'candidateexamine', 'systemconfig', 'examconfig', 'scoreconfig', 'enrolldata', 'examdata' ];
    var userId = this._cache.getNone('orgId'); // 是否登录
    // 当前路由是nextRoute指定页时
    if (nextRoute.indexOf(path) >= 0) {
      if (!userId) {
        // 未登录，跳转到login
        this._message.error('请先登录！', { nzDuration: 1000 * 3 });
        if (userRoute.indexOf(path) >= 0) {
            this._router.navigate(['/passport/personallogin']);
            return
        }
        if (orgUserRoute.indexOf(path) >= 0) {
            this._router.navigate(['/passport/orglogin']);
            return
        }
        if (adminRoute.indexOf(path) >= 0) {
            this._router.navigate(['/passport/login']);
            return
        }
        return false;
      }else{
        // 已登录，跳转到当前路由
        if (((adminRoute.indexOf(path) >= 0) && (this._cache.getNone('userType') === 'admin')) ||  
          ((orgUserRoute.indexOf(path) >= 0) && (this._cache.getNone('userType') === 'organizationUser')) ||
          ((userRoute.indexOf(path) >= 0) && (this._cache.getNone('userType') === 'user'))
          ) {
          if (environment.NODE_ENV === 'development') {
            console.log('当前路由名称' + path)
            console.log('当前账户类型' + this._cache.getNone('userType'))
            console.log('当前账户ID' + userId + '已登录，跳转到当前路由' + path)
          }
          // 美洽setting start
          if (this._cache.getNone('userType') === 'organizationUser') {
            window['_MEIQIA']('metadata', {
              name: this._cache.getNone('userName'), // userName
              tel: this._cache.getNone('userMobile'), // 电话
              comment: '机构用户—' + this._cache.getNone('orgName')  // 备注
            });
          }
          if (this._cache.getNone('userType') === 'user') {
            window['_MEIQIA']('metadata', {
              name: this._cache.getNone('userName'), // userName
              tel: this._cache.getNone('userMobile'), // 电话
              comment: '个人用户—' + this._cache.getNone('orgName')  // 备注
            });
          }
          // 美洽setting stop
          return true;
        }else {
           console.log('当前路由名称' + path)
          this._message.error('无权访问！', { nzDuration: 1000 * 3 });
          return false;
        }
      }
    }
    // 当前路由是login时 
    if ((path === 'login')||(path === 'orglogin')||(path === 'personallogin')) {
      if (!userId) {
        // 未登录，跳转到当前路由
        return true;
      }else{
        // 已登录，跳转到home
        // this.router.navigate(['home']);
        // return false;
        return true;
      }
    }
  }

}