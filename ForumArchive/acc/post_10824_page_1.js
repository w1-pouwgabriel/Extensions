[{"Owner":"Aswin Shrestha","Date":"2014-12-03T15:26:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Has anyone worked on the SRTM data for Babylonjs?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I wanted to use the SRTM data (GeoTiff) to render terrains in Babylonjs. What I feel should be done is_co_ using the given .tiff/ASCII files to generate the bump maps for the terrain. But_co_ I_t_m not so sure if that_t_s how it should be used._lt_/p_gt__lt_p_gt_So_co_ if anyone here can give me a heads up on this_co_ it would be very grateful._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Thanks._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2014-12-03T17:52:13Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hey_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I don_t_t know what is SRTM_co_ but if it_t_s based on textures like _lt_a href_eq__qt_http_dd_//www2.jpl.nasa.gov/srtm/_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www2.jpl.nasa.gov/srtm/_lt_/a_gt_ then BabylonJS is not able (today) to create normal maps on the fly. You can implement it by following a tutorial (you can take a look in Irrlicht 3D engine ( driver-&gt_sm_makeTextureNormalMapped() ) to see how the algorithm looks like _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Aswin Shrestha","Date":"2014-12-04T09:31:05Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Cool. Thanks for the info. I_t_ll definitely look into the implementation. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Luaacro","Date":"2014-12-04T14:56:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_You can find the Irrlicht implementation here _dd_ _lt_a href_eq__qt_http_dd_//sourceforge.net/p/irrlicht/code/HEAD/tree/branches/releases/1.8/source/Irrlicht/CNullDriver.cpp#l1127_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//sourceforge.net/p/irrlicht/code/HEAD/tree/branches/releases/1.8/source/Irrlicht/CNullDriver.cpp#l1127_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you make it work_co_ don_t_t hesitate to implement it directly into BabylonJS_co_ it would be AWESOME _eq_D_lt_/p_gt__lt_p_gt_Also don_t_t hesitate if you encounter problems during the implementation _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Aswin Shrestha","Date":"2014-12-08T17:24:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Thank you for the link @luaacro _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_I_t_ll try my best to  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]