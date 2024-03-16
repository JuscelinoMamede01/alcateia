/**
 * @version $Id: slider_uncompressed.js 11 2013-06-21 11:07:50Z szymon $
 * @package DJ-ImageSlider
 * @subpackage DJ-ImageSlider Component
 * @copyright Copyright (C) 2012 DJ-Extensions.com, All rights reserved.
 * @license DJ-Extensions.com Proprietary Use License
 * @author url: http://dj-extensions.com
 * @author email contact@dj-extensions.com
 * @developer Szymon Woronowski - szymon.woronowski@design-joomla.eu
 *
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}('(6($){1D.1Z=S 20({21:6(j,k){7 l=0;7 m=0;7 n=0;7 o=0;7 p=\'1E\'+j.3;7 q=k.22;7 r=0;7 s=0;7 t=1F;$(\'8\'+j.3).1b(\'1G\');7 u=$(\'1E\'+j.3).23(\'24\');4(1H.1I){7 v=S 25();26(7 i=0;i<j.1c;i++){v[i]=u[i];v[i].1b(\'1G\')}}u.1d(6(){l+=j.G;m++});n=m-j.1c;$(p).5(\'1J\',\'27\');7 w;4(j.17==2){u.5(\'1J\',\'28\');u.5(\'Y\',0);u.5(\'N\',0);$(p).5(\'O\',j.G);u.5(\'C\',0);u.5(\'1e\',\'1K\');u[0].5(\'C\',1);u[0].5(\'1e\',\'1L\');u.H(\'1p\',{T:\'C\',K:k.K})}9 4(j.17==1){$(p).5(\'Y\',0);$(p).5(\'Z\',l);w=S 10.11(p,{T:\'Y\',K:k.K,1f:k.1f,12:\'13\'})}9{$(p).5(\'N\',0);$(p).5(\'O\',l);w=S 10.11(p,{T:\'N\',K:k.K,1f:k.1f,12:\'13\'})}4(j.D==1){7 x=S 10.11(\'I\'+j.3,{T:\'C\',K:1g,12:\'13\'}).H(\'C\',0);7 y=S 10.11(\'P\'+j.3,{T:\'C\',K:1g,12:\'13\'}).H(\'C\',0)}4(j.14==1){7 z=S 10.11(\'1q\'+j.3,{T:\'C\',K:1g,12:\'13\'}).H(\'C\',0);7 A=S 10.11(\'1r\'+j.3,{T:\'C\',K:1g,12:\'13\'}).H(\'C\',0)}4(j.14){$(\'1q\'+j.3).U(\'18\',6(){4(j.D==1)1h();1i()});$(\'1r\'+j.3).U(\'18\',6(){4(j.D==1)1h();1s()})}4(j.D){$(\'I\'+j.3).U(\'18\',6(){1t();q=1});$(\'P\'+j.3).U(\'18\',6(){1t();q=0})}$(\'8-L\'+j.3).29({\'2a\':6(){4(j.D==1)1M();4(j.14==1){z.J(1);A.J(1)}r=1},\'2b\':6(){4(j.D==1)1h();4(j.14==1){z.J(0);A.J(0)}r=0},\'1N\':6(a){4(a.1O==\'N\'){1i()}9 4(a.1O==\'19\'){1s()}}});$(\'8-L\'+j.3).2c(\'1N:2d\',1P);4($(\'1u-Q\'+j.3)){7 B=$(\'1u-Q\'+j.3).2e(\'.1a-1j\');B.1d(6(a,b){a.U(\'18\',6(e){4(!t&&!a.2f(\'1a-1j-1v\')){15(b)}})})}6 F(a){1k a.2g(6(){1k 1D.F()})}6 1w(){7 a=$(\'8-L\'+j.3).2h();7 b=F(a).x;b-=a.V(\'E-N\').W();b-=a.V(\'E-19\').W();7 c=$(\'8\'+j.3).V(\'1l-O\').W();7 d=F($(\'8\'+j.3));7 e=d.x;4(e>b){e=b}9 4(e<=b&&e<c){e=(b>c?c:b)}7 f=d.x/d.y;7 g=e/f;$(\'8\'+j.3).5(\'O\',e);$(\'8\'+j.3).5(\'Z\',g);4(j.17==2){$(p).5(\'O\',e);u.5(\'O\',e);u.5(\'Z\',g)}9 4(j.17==1){7 h=u[0].V(\'E-1m\').W();j.G=(g+h)/j.1c;l=m*j.G+m;$(p).5(\'Z\',l);u.5(\'O\',e);u.5(\'Z\',j.G-h);w.H(-j.G*o)}9{7 h=u[0].V(\'E-19\').W();j.G=(e+h)/j.1c;l=m*j.G+m;$(p).5(\'O\',l);u.5(\'O\',j.G-h);u.5(\'Z\',g);w.H(-j.G*o)}4(j.D||j.14){1n=$(\'Q\'+j.3).2i(\'8\'+j.3).y;4(1n<0){$(\'8-L\'+j.3).5(\'E-Y\',-1n);$(\'8-L\'+j.3).5(\'E-1m\',0)}9{R=0;4(j.14){R=F($(\'1q\'+j.3)).y;R=1x.1l(R,F($(\'1r\'+j.3)).y)}4(j.D){R=1x.1l(R,F($(\'I\'+j.3)).y);R=1x.1l(R,F($(\'P\'+j.3)).y)}E=1n+R-g;4(E>0){$(\'8-L\'+j.3).5(\'E-Y\',0);$(\'8-L\'+j.3).5(\'E-1m\',E)}9{$(\'8-L\'+j.3).5(\'E-Y\',0);$(\'8-L\'+j.3).5(\'E-1m\',0)}}1y=$(\'Q\'+j.3).V(\'16-N\').W()+$(\'Q\'+j.3).V(\'16-19\').W();4(1y<0&&1z.F().x<F($(\'Q\'+j.3)).x-1y){$(\'Q\'+j.3).5(\'16-N\',0);$(\'Q\'+j.3).5(\'16-19\',0)}}}6 1Q(c){4($(\'1u-Q\'+j.3))B.1d(6(a,b){a.2j(\'1a-1j-1v\');4(b==c)a.2k(\'1a-1j-1v\')})}6 1i(){4(o<n)15(o+1);9 15(0)}6 1s(){4(o>0)15(o-1);9 15(n)}6 15(a){4(o==a)1k;4(j.17==2){4(t)1k;t=1P;1R=o;o=a;1S(1R)}9{o=a;w.J(-j.G*o)}1Q(o)}6 1S(a){u[o].5(\'1e\',\'1L\');u[o].1T(\'1p\').J(1);u[a].1T(\'1p\').J(0).1A(6(){u[a].5(\'1e\',\'1K\');t=1F})}6 1h(){4(!q){x.J(r,0).1A(6(){4(!s)$(\'I\'+j.3).5(\'M\',\'X\')})}9{y.J(r,0).1A(6(){4(!s)$(\'P\'+j.3).5(\'M\',\'X\')})}s=0}6 1M(){4(!q){$(\'I\'+j.3).5(\'M\',\'1o\');x.J(r,1)}9{$(\'P\'+j.3).5(\'M\',\'1o\');y.J(r,1)}s=1}6 1t(){4(q){$(\'P\'+j.3).5(\'M\',\'X\');4(j.D==1)y.H(\'C\',0);$(\'I\'+j.3).5(\'M\',\'1o\');4(j.D==1)x.H(\'C\',1)}9{$(\'I\'+j.3).5(\'M\',\'X\');4(j.D==1)x.H(\'C\',0);$(\'P\'+j.3).5(\'M\',\'1o\');4(j.D==1)y.H(\'C\',1)}}6 1B(){2l(6(){4(q&&!r)1i();1B()},k.1U)}6 1C(){$(\'8-L\'+j.3).5(\'2m\',\'X\');$(\'8\'+j.3).1b(\'1V\');4(1H.1I){v.1d(6(a){4(a)a.1b(\'1V\')})}1w();4(j.D){1W=F($(\'I\'+j.3)).x;$(\'I\'+j.3).5(\'16-N\',-1W/2);1X=F($(\'I\'+j.3)).x;$(\'P\'+j.3).5(\'16-N\',-1X/2);4(q){$(\'I\'+j.3).5(\'M\',\'X\')}9{$(\'P\'+j.3).5(\'M\',\'X\')}}1B()}4(j.1Y)1C.1U(j.1Y);9 1z.U(\'1a\',1C);1z.U(\'2n\',1w)}})})(2o.3);',62,149,'|||id|if|setStyle|function|var|djslider|else|||||||||||||||||||||||||||||opacity|show_buttons|padding|getSize|slide_size|set|play|start|duration|loader|display|left|width|pause|navigation|buttons_height|new|property|addEvent|getStyle|toInt|none|top|height|Fx|Tween|link|cancel|show_arrows|loadSlide|margin|slider_type|click|right|load|fade|visible_slides|each|visibility|transition|200|hideNavigation|nextSlide|button|return|max|bottom|button_pos|block|tween|next|prev|prevSlide|changeNavigation|cust|active|responsive|Math|buttons_margin|window|chain|slidePlay|sliderLoaded|this|slider|false|hide|Browser|ie8|position|hidden|visible|showNavigation|swipe|direction|true|updateActiveButton|prev_slide|makeFade|get|delay|in|play_width|pause_width|preload|DJImageSliderModule|Class|initialize|auto|getChildren|li|Array|for|relative|absolute|addEvents|mouseenter|mouseleave|store|cancelVertical|getElements|hasClass|measure|getParent|getPosition|removeClass|addClass|setTimeout|background|resize|document'.split('|'),0,{}));