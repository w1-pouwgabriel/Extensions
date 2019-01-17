[{"Owner":"Junior","Date":"2014-09-10T02:00:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I am trying to simulate lens-flare from a gem stone that is part of a jewelry ring. The model that was exported from Blender. The ring is rotating on its central axis. (The rotation was animated in Blender.)  I added the lensflare to the main gem mesh but the origin seem to be at the center of the ring instead of the center of the gem. (You can see it _lt_a href_eq__qt_http_dd_//3dpanacea.com/3dring/_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_ . Each mesh has its own distinct origin in Blender.) The flares are also pointing  upward in the _t_z_t_ axis and they do not rotate with the ring. Is there a way to fix it so that_dd_- _lt_/p_gt__lt_ol_gt__lt_li_gt_The lens-flare can point in the _t_x_t_ or _t_y_t_ axis instead of the _t_z_t_ axis only._lt_/li_gt_\t_lt_li_gt_The lens-flare can rotate when the ring rotates. _lt_/li_gt_\t_lt_li_gt_The lens-flares can only be seen when the ring rotates at a certain angle to the camera_co_ and then fade away when the angle changes. _lt_/li_gt__lt_/ol_gt__lt_p_gt_I have attached the complete Babylon.js project with the Blend file to this post. I would greatly appreciate the assistance of anyone who can help me. Thank you.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_&lt_sm_fileStore.core_Emoticons&gt_sm_/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-8519-0-19827800-1410309944.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_09_2014/post-8519-0-19827800-1410309944.png_qt_ data-fileid_eq__qt_2675_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8519-0-19827800-1410309944.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2677_qt__gt_3dring.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2014-09-10T16:30:23Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Is this wiki helpful ?_lt_/p_gt__lt_p_gt__lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/How-to-use-lens-flares_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/How-to-use-lens-flares_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Junior","Date":"2014-09-10T21:25:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I have followed the instructions as described in the wiki before I posted this request. I got stuck and could not find a solution to my challenge. I believe that it could be solved using vector coordinates. I am not sure how to do this but I hope that someone is able to assist me. _lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-09-10T21:52:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi Junior!  I think I know what you are trying_co_ and lens flare might not be a good tool.  But who knows?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  I had a little fun trying some things...  _lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#1D6MP7%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#1D6MP7#1_lt_/a_gt_  This one uses the camera as the emitter_co_ and the camera then rotates around the _qt_gem_qt__co_ as opposed to rotating the gem itself._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I had a limited amount of textures to choose-from in the playground_co_ but maybe with the right textures (twinkles)... it might look ok._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Notice that all lights in that scene... have no intensity.  Interesting_co_ huh?  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  Turn them ON_co_ no major changes will happen._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Another approach... might be sprites.  What IS a sparkle/twinkle?  Well_co_ its a flash of light that tends to blind the camera... for a QUICK moment.  So_co_ if you placed sprites in front of the gem (sprites always face the camera)_co_ and then built a very short sprite animation of a _qt_twinkle_qt_ growing from tiny spark_co_ to large_co_ and then back to nothing (using alpha transparency around the sparkle)... (much like the twinkles you show in the picture)_co_ that might work._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Junior_t_s sparkle and twinkle workshop.  Part of the _qt_Glitter and Faery Dust_qt_ series.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Oh well_co_ modify and make more saves to that playground scene_co_ everyone_co_ as wanted.  I didn_t_t do so well at making twinkles_co_ but we have a playground scene to experiment-with_co_ now_co_ so we can put the whole team of sparkle-masters on the case.  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_You might get some interesting results with the demo url above... IF you make 4 lens flare systems (or more)_co_ but put _lt_u_gt_only one_lt_/u_gt_ (likely white) flare in each system_t_s array-of-flares.  Use the camera for the emitter on all 4 (or more) systems.  *shrug*  This way_co_ each lensFlareSystem makes one flash... and not a _qt_string_qt_ of flares._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I had to try it_dd_  _lt_a href_eq__qt_http_dd_//www.babylonjs.com/playground/#1D6MP7%232_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs.com/playground/#1D6MP7#2_lt_/a_gt_  _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ alt_eq__qt__dd_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt_  4-pack of lensFlareSystems...  *shrug*  Different size twinkles each time it is runned... because of the .random() calls._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Junior","Date":"2014-09-11T12:05:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hello Wingnut_co__lt_/p_gt__lt_p_gt_This is exactly what I have been looking for. You have made my day. Thank you for sharing your _t_sparkles_t_ with me. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_biggrin.png_qt_ alt_eq__qt__dd_D_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/biggrin@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2014-09-11T14:01:58Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Cool!  I have a feeling that a _lt_u_gt_single_lt_/u_gt_ lensFlareSystem would do the exact same thing (with 1-4 child flares all positioned close-to or atop each other).  I don_t_t know if light1 is used in the calculation of the flares.  Considering we had the .intensity of all lights set to zero_co_ I tend to think no._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_It would nice to be able to seriously adjust the occurrence-rate of the sparkles (from lots more to lots less)._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_If you experiment with those things_co_ or learn from _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/blob/master/Babylon/LensFlare/babylon.lensFlareSystem.js_qt_ rel_eq__qt_external nofollow_qt__gt_the code_lt_/a_gt_... tell us what you discover_co_ okay?  Thanks!_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_See that last section in _lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Babylon.js/wiki/How-to-use-lens-flares_qt_ rel_eq__qt_external nofollow_qt__gt_the lens flare tutorial_lt_/a_gt_?  _qt_Babylon.js can also detect occlusions for you. A mesh can occlude the lens flares if the following conditions are met_qt_...   I think_co_ maybe_co_ occlusion means _t_blockage_t_.  And occlusion testing... is testing if some mesh in the scene... is blocking the lens flares._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I_t_m just guessing.  A_lt_a href_eq__qt_http_dd_//en.wikipedia.org/wiki/Ambient_occlusion_qt_ rel_eq__qt_external nofollow_qt__gt_ wiki page about ambient occlusion_lt_/a_gt_ might help.  Also_co_ I found _lt_a href_eq__qt_http_dd_//nehe.gamedev.net/tutorial/3d_lens_flare_with_occlusion_testing/16007/_qt_ rel_eq__qt_external nofollow_qt__gt_a talkie web page about someone working with lens flares_lt_/a_gt_ in openGL.  The code is not applicable_co_ but the talking is._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]