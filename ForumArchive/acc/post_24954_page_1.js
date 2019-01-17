[{"Owner":"royibernthal","Date":"2016-09-03T20:03:38Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI have 2 questions regarding loading meshes from a .babylon file_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1) I_t_m loading the .babylon file through the AssetsManager.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTextures related to the meshes that are specified in that file are being loaded as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAre these textures loaded right away or are they loaded only once the mesh is created?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m preloading all assets and displaying a loading bar before the game is shown. I_t_d like to know if these textures will be loaded with all assets in the preloading time_co_ or am I to expect extra loading time of these textures after preloading is over?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\t2) File names including paths of textures related to meshes must be specified in their designated _qt_name_qt_ parameter in the .babylon file. It makes sense.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like however to create a folder per .babylon file_co_ with the .babylon file and all its textures in that folder. Therefore_co_ I_t_d like the textures specified in the babylon files to only include the name of the texture file_co_ and adjust the path prefix at runtime according to the .babylon file path.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor example_co_ let_t_s say I have the babylon file assets/meshes/meshName/data.babylon_co_ and a texture specified in it is located in assets/meshes/meshName/.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like to specify in the texture_t_s name parameter only _qt_textureName.png_qt_ instead of _qt_assets/meshes/meshName/textureName.png_qt_  and to add the path prefix _qt_assets/meshes/meshName/_qt_ which will be derived from the path of the .babylon file at runtime.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs that possible? How should I approach this problem?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like to avoid having to manually edit paths in every .babylon file since I_t_m likely to be facing hundreds of those. I can also think of a dozen ways to modify the .babylon file_t_s actual content before it is even loaded_co_ but I_t_d like to avoid these as well for the sake of a _qt_prettier solution to the problem_qt_.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jellix","Date":"2016-09-04T19:13:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/?do_eq_hovercard_qt_ data-mentionid_eq__qt_8420_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/8420-royibernthal/_qt_ rel_eq__qt__qt__gt_@royibernthal_lt_/a_gt__co_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tquestion1_dd_ Don_t_t know for 100% but pretty sure that the AssetLoader also loads the textures of babylon-files before it dispatches the load-complete event.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tquestion2_dd_ Don_t_t understand exactly. It shouldn_t_t be a problem to add an order-path to a filename of a texture dynamically AFTER the babylon file is loaded (could explain it if u want). But I think that the problem would be that the AssetManager throws errors while loading because it tries to load the textures (and doesn_t_t find it) before you give the correct filepath to the loader.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-04T19:23:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_142640_qt_ data-ipsquote-contentid_eq__qt_24954_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1473016413_qt_ data-ipsquote-userid_eq__qt_21403_qt_ data-ipsquote-username_eq__qt_jellix_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\t9 minutes ago_co_ jellix said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tquestion2_dd_ Don_t_t understand exactly. It shouldn_t_t be a problem to add an order-path to a filename of a texture dynamically AFTER the babylon file is loaded (could explain it if u want). But I think that the problem would be that the AssetManager throws errors while loading because it tries to load the textures (and doesn_t_t find it) before you give the correct filepath to the loader.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThat_t_s the whole point _lt_img alt_eq__qt__sm_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ title_eq__qt__sm_)_qt_ width_eq__qt_20_qt_ /_gt_ To change the textures_t_ paths before the AssetsManager attempts to load the them.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"jellix","Date":"2016-09-04T19:34:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOh I see ... sorry no solution from me _dd_-( \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThe best would be to load the files without materials but I don_t_t think that it_t_s possible with babylon files. With obj files it is just by ignoring the corresponding mtl-file.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd it_t_s no solution to keep all textures in one summary folder?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAnd if the AssetManager doesn_t_t find the texture_co_ does it stop? Or does it just throw an error and goes on? If so_co_ maybe it would be a solution just to ignore the missing textures and to apply them afterwards.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-04T20:16:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tIt_t_ll result in the extra overhead of the failed requests_co_ it won_t_t be a _qt_clean solution_qt_ due to that and a couple of other reasons _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-05T13:23:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ _lt_img alt_eq__qt_BatmanSignalLightLarge.png_qt_ class_eq__qt_ipsImage_qt_ src_eq__qt_http_dd_//i380.photobucket.com/albums/oo247/Vuldacon/BatmanSignalLightLarge.png_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-19T22:27:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tAnyone?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-20T17:08:48Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tSo \n_lt_/p_gt_\n\n_lt_p_gt_\n\t1. Yes this is how the AssetsManager works so you_t_re fine\n_lt_/p_gt_\n\n_lt_p_gt_\n\t2. Depending on which exporter you are using_co_ it should already be the case. babylon files should only contains relative side by side texture filenames\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-20T17:44:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHere_t_s a PG demonstrating that textures are not loaded when specifying relative paths in the .babylon file_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SVN3I%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SVN3I#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tHere_t_s the .babylon file_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//runeslots.com/misc/bulbasaur_relative/data.babylon_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//runeslots.com/misc/bulbasaur_relative/data.babylon_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tFor instance_co_ this doesn_t_t work_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_qt_diffuseTexture_qt__dd_{_qt_name_qt__dd__qt_pm0001_00_BodyA1.png_qt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIt attempts to load_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/pm0001_00_BodyA1.png_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/pm0001_00_BodyA1.png_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_d like it to load_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//runeslots.com/misc/bulbasaur_relative/data.babylon_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//runeslots.com/misc/bulbasaur_relative/_lt_/a_gt__lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/pm0001_00_BodyA1.png_qt_ rel_eq__qt_external nofollow_qt__gt_pm0001_00_BodyA1.png_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBased on the file path of the .babylon file.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2016-09-21T17:47:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tIt works when you specify scene root_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1SVN3I%235_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1SVN3I#5_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"royibernthal","Date":"2016-09-21T23:52:39Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tOh I understand_co_ thanks.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]