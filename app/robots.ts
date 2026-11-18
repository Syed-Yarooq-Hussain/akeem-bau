import type {MetadataRoute} from 'next';
import {publicOrigin} from '../content/seo';
export default function robots():MetadataRoute.Robots {
 const origin=publicOrigin();
 return origin?{rules:{userAgent:'*',allow:'/'},sitemap:`${origin}/sitemap.xml`}:{rules:{userAgent:'*',disallow:'/'}};
}
