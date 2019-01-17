[{"Owner":"Mark1","Date":"2017-10-21T16:21:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have built some simpler structures in BJS_co_ and I am researching how to build more complex ones. I can add materials to the simple meshes_co_ but what if it is more complicated.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSuppose I draw the profile of a car_co_ then extrude it into a 3d car shape_co_ how do I add different materials onto it. E.g. if I have two images for the front and rear windscreens (windshields)_co_ how do I add them to just those parts of the mesh?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-10-21T23:43:29Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya Mark1_co_ welcome to the forum.  I can only give MY opinion... and I_t_m no expert.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t#1 way_dd_  Make windshield_co_ rear window_co_ side windows_co_ door handles_co_ bumpers_co_ headlights_co_ blinkers... from separate mesh.  Set a special material for each one_co_ and position the extra mesh in the proper positions onto the extruded car body.  Probably set each extra mesh .parent _eq_ carbody... then position each.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t#2 way_dd_  Use picked points as references.  Look at this playground demo_co_ please_dd_  _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DBFVA%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DBFVA#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOpen your JS console_co_ and see X and Y _qt_textureCoordinates_qt_ are being reported... as you click-around on the plane.  They are numbers such as .73 and .04_co_ etc_co_ etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow_co_ enter a 2D paint program and make a texture that is 1000 x 1000. It should probably be a solid-colored texture.  Use the car body main color_co_ for easy painting_co_ later.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tPlace THAT 1000 x 1000 texture onto carBody.material.diffuseTexture.  Use the same methods as shown in that playground and click around on the car body.  You should be seeing the same kind of numbers... all values between 0 and 1.  You can think of these numbers as percentages.  .73 _eq_ 73%.  .04 _eq_ 4%_co_ etc.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow zoom-in your camera_co_ and click on the location where you want ONE corner of the windshield to be.  Record the values.  But this time_co_ if the X value is .73_co_ you write down 730.  If the Y value is .04_co_ you write down 40.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tDo the same for ALL 4 corners of the windshield.  Do the same for the rear window.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNOW_co_ return to your 2D paint program... with your 1000 x 1000 blank texture_co_ and use your new texture-coordinates list... to PAINT a windshield and rear window onto the blank texture. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tBe careful here.  I believe these coordinates will be measured from LOWER LEFT corner of texture/image.  SO_co_ using the numbers above as an example... your _qt_point_qt_ of interest will be 730 pixels RIGHT_co_ and 40 pixels UP... from image lower left corner.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tNow save your image_co_ and put the NEW saved image onto your car.  Is your windshield in the right place?  If so_co_ continue your clicking and writing coordinates... adding more and more things to your 1000x1000 texture.  Soon_co_ you will have a texture that precisely fits your extruded car_co_ and all the _qt_stuff_qt_ will be in the right place... because YOU painted it there.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tGoofy idea_co_ huh?  Clicking-upon certain points on your car_co_ writing down the numbers_co_ and painting your 1000x1000 texture... little by little.  I think it might work.  Later_co_ you can _qt_resample_qt_ your 1000 x 1000 image... to be 500 x 500 or ANY up-scaled or down-scaled size... as long as you keep your square-ness.  The texture will map onto the car... the same way_co_ no matter the texture scaling_co_ as long as you scale X and Y (U and V) identically.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOR... someone else will soon have a much better idea_co_ because my idea sucks.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  (Sometimes my ideas DO that.)  heh.  Sometimes textures don_t_t _qt_map_qt_ very _qt_uniformly_qt_ onto extrudeShapes [_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1WEZZ7%231_qt_ rel_eq__qt_external nofollow_qt__gt_like this_lt_/a_gt_].  \n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#1ZAXRO%238_qt_ rel_eq__qt_external nofollow_qt__gt_PolygonMeshBuilder_lt_/a_gt_ is ANOTHER way to do extrudes.  I don_t_t understand THEIR texture mapping_co_ either.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Perhaps modeling it in Blender or 3dsMax... might be the easiest way.  heh.  Stay tuned for more comments.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Mark1","Date":"2017-10-23T12:42:15Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThanks _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI see how #2 could work_co_ but it does seem a lot of manual work.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think your #1 way - separate mesh+material for each part - seems the most reliable way.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]