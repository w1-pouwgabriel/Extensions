[{"Owner":"DezOnlyOne","Date":"2016-08-11T20:01:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI want to be able to animate my camera and its target to different locations around my scene. I set up an some animation keys but I don_t_t know how I would animate my target. I am using the values for camera._currentTarget to come up with something set the target of the camera too_co_ but I am not sure what I am missing here. Why doesn_t_t this work? All that animates is my camera position but my target remains the same. The camera and target should dolly to the new positions\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_engine.runRenderLoop(function () {\n    if(cameraAnimating){\n        camera.setTarget(camera._currentTarget)_sm_\n    }\n\n    scene.render()_sm_\n})_sm_\n\nfunction animateCamera(pos_co_ tgt_co_ frameCt){\n    var animPos_x _eq_ new BABYLON.Animation(_t_animPos_x_t__co_ _t_position.x_t__co_ 30_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\n    var animPos_y _eq_ new BABYLON.Animation(_t_animPos_y_t__co_ _t_position.y_t__co_ 30_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\n    var animPos_z _eq_ new BABYLON.Animation(_t_animPos_z_t__co_ _t_position.z_t__co_ 30_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\n\n    var animTgt_x _eq_ new BABYLON.Animation(_t_animTgt_x_t__co_ _t__currentTarget.x_t__co_ 30_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\n    var animTgt_y _eq_ new BABYLON.Animation(_t_animTgt_y_t__co_ _t__currentTarget.y_t__co_ 30_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\n    var animTgt_z _eq_ new BABYLON.Animation(_t_animTgt_z_t__co_ _t__currentTarget.z_t__co_ 30_co_ BABYLON.Animation.ANIMATIONTYPE_FLOAT_co_ BABYLON.Animation.ANIMATIONLOOPMODE_CONSTANT)_sm_\n\n    var animPosKeys_x _eq_ []_sm_\n    animPosKeys_x.push({ frame_dd_ 0_co_ value_dd_ camera.position.x })_sm_\n    animPosKeys_x.push({ frame_dd_ frameCt_co_ value_dd_ pos.x })_sm_\n    animPos_x.setKeys(animPosKeys_x)_sm_\n\n    var animPosKeys_y _eq_ []_sm_\n    animPosKeys_y.push({ frame_dd_ 0_co_ value_dd_ camera.position.y })_sm_\n    animPosKeys_y.push({ frame_dd_ frameCt_co_ value_dd_ pos.y })_sm_\n    animPos_y.setKeys(animPosKeys_y)_sm_\n\n    var animPosKeys_z _eq_ []_sm_\n    animPosKeys_z.push({ frame_dd_ 0_co_ value_dd_ camera.position.z })_sm_\n    animPosKeys_z.push({ frame_dd_ frameCt_co_ value_dd_ pos.z })_sm_\n    animPos_z.setKeys(animPosKeys_z)_sm_\n\n    camera.animations.push(animPos_x)_sm_\n    camera.animations.push(animPos_y)_sm_\n    camera.animations.push(animPos_z)_sm_\n\n    var animTgtKeys_x _eq_ []_sm_\n    animTgtKeys_x.push({ frame_dd_ 0_co_ value_dd_ camera._currentTarget.x })_sm_\n    animTgtKeys_x.push({ frame_dd_ frameCt_co_ value_dd_ tgt.x })_sm_\n    animTgt_x.setKeys(animTgtKeys_x)_sm_\n\n    var animTgtKeys_y _eq_ []_sm_\n    animTgtKeys_y.push({ frame_dd_ 0_co_ value_dd_ camera._currentTarget.y })_sm_\n    animTgtKeys_y.push({ frame_dd_ frameCt_co_ value_dd_ tgt.y })_sm_\n    animTgt_y.setKeys(animTgtKeys_y)_sm_\n\n    var animTgtKeys_z _eq_ []_sm_\n    animTgtKeys_z.push({ frame_dd_ 0_co_ value_dd_ camera._currentTarget.z })_sm_\n    animTgtKeys_z.push({ frame_dd_ frameCt_co_ value_dd_ tgt.z })_sm_\n    animTgt_z.setKeys(animTgtKeys_z)_sm_\n\n    camera.animations.push(animTgt_x)_sm_\n    camera.animations.push(animTgt_y)_sm_\n    camera.animations.push(animTgt_z)_sm_\n\n    cameraAnimating _eq_ true_sm_\n    scene.beginAnimation(camera_co_ 0_co_ frameCt_co_ false_co_ 1_co_ function(){ cameraAnimating _eq_ false })_sm_\n}_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-13T01:02:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tHi D!  Good to see you again.  You know how it works_co_ around here.  You get best results when you make a test playground that we can all play-with.  It_t_s easier for us all to fix_co_ that way.  Feel like doing one?  thx.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-13T06:15:56Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/21594-camera-boom-prototype/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2016-08-15T17:30:52Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_139769_qt_ data-ipsquote-contentid_eq__qt_24428_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1471050152_qt_ data-ipsquote-userid_eq__qt_5733_qt_ data-ipsquote-username_eq__qt_Wingnut_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 8/12/2016 at 9_dd_02 PM_co_ Wingnut said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\tHi D!  Good to see you again.  You know how it works_co_ around here.  You get best results when you make a test playground that we can all play-with.  It_t_s easier for us all to fix_co_ that way.  Feel like doing one?  thx.\n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tHey Wingnut! Good to see you as well.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CN7MM%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CN7MM#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI should have created one in the beginning. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tRight now_co_ line62 is where I am calling the animateCamera function that should animate the camera and its target so that the POV slides to each preset position(cams object). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tCamera position is no problem to animate_co_ the target of the camera is the part that is the pain it seems. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2016-08-15T17:37:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_blockquote class_eq__qt_ipsQuote_qt_ data-ipsquote_eq__qt__qt_ data-ipsquote-contentapp_eq__qt_forums_qt_ data-ipsquote-contentclass_eq__qt_forums_Topic_qt_ data-ipsquote-contentcommentid_eq__qt_139780_qt_ data-ipsquote-contentid_eq__qt_24428_qt_ data-ipsquote-contenttype_eq__qt_forums_qt_ data-ipsquote-timestamp_eq__qt_1471068956_qt_ data-ipsquote-userid_eq__qt_19199_qt_ data-ipsquote-username_eq__qt_Pryme8_qt__gt_\n\t_lt_div class_eq__qt_ipsQuote_citation_qt__gt_\n\t\tOn 8/13/2016 at 2_dd_15 AM_co_ Pryme8 said_dd_\n\t_lt_/div_gt_\n\n\t_lt_div class_eq__qt_ipsQuote_contents_qt__gt_\n\t\t_lt_p_gt_\n\t\t\t_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/21594-camera-boom-prototype/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\t\t_lt_/p_gt_\n\n\t\t_lt_p_gt_\n\t\t\t \n\t\t_lt_/p_gt_\n\t_lt_/div_gt_\n_lt_/blockquote_gt_\n\n_lt_p_gt_\n\tThis is pretty cool... I still need to animate the target and have the camera follow it_co_ but this is a clean way to do some flying through a scene. \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-15T17:56:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tJust Lerp between your camera and target your followings position_sm_ then offset it to the desired amount.  And have the cameras keep looking at the real target not the offset.\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2016-08-16T12:23:22Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tJust get his playground working_co_ _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/?do_eq_hovercard_qt_ data-mentionid_eq__qt_19199_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/19199-pryme8/_qt_ rel_eq__qt__qt__gt_@Pryme8_lt_/a_gt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_span_gt_@dez - it looks like .lockedTarget is a better property for target animations  (better than ._currentTarget)._lt_/span_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1CN7MM%234_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1CN7MM#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI_t_m ONLY animating target right now.  Camera position animations were already working fine.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tStill doing tests_co_ but I_t_m seeing some positive results.  Is this enough to get your rolling?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf not_co_ holler.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI find it interesting that you are using 3 separate float-type animations_co_ one for x_co_ one for y_co_ and one for z (for both cam positions and target positions). \n_lt_/p_gt_\n\n_lt_p_gt_\n\tDid you know that there is a _lt_a href_eq__qt_http_dd_//doc.babylonjs.com/classes/2.4/Animation#static-animationtype_vector3-number_qt_ rel_eq__qt_external nofollow_qt__gt_vector3-type animation_lt_/a_gt__co_ too?  It can do all 3 axes in a single animation.  Not sure if that would work for you_co_ but I thought I would remind you of its existence.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"DezOnlyOne","Date":"2016-08-16T14:12:20Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t@Wingnut\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes that would make things simpler. I tried to just add a property to the camera called focus and it worked well_co_ but your solution is cleaner and will do exactly what I need it to. I think I will use @Pryme8\n_lt_/p_gt_\n\n_lt_p_gt_\n\t solution for something as well. You guys have been really helpful as always. This is the best forum_co_ and a huge reason I switched over from Threejs. \n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tThanks\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Pryme8","Date":"2016-08-16T14:29:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_div class_eq__qt_ipsEmbeddedVideo_qt__gt_\n\t_lt_div_gt_\n\t\t_lt_iframe allowfullscreen_eq__qt_true_qt_ frameborder_eq__qt_0_qt_ height_eq__qt_270_qt_ src_eq__qt_https_dd_//www.youtube.com/embed/_rJ6JWnVnn8?feature_eq_oembed_qt_ width_eq__qt_480_qt__gt__lt_/iframe_gt_\n\t_lt_/div_gt_\n_lt_/div_gt_\n\n_lt_p_gt_\n\t_lt_br /_gt_\n\tThe math in this might help...  its old school play canvas so the work flow is different_co_ but the math is the same.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]