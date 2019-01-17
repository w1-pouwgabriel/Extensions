[{"Owner":"javalang","Date":"2017-04-05T19:33:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tMaybe I have to explain it a bit more_dd_ I have a mesh-model (laptop screen) and I wish to see NO reflections looking in the normal of the surface but the more I turn the laptop_co_ the more reflections should appear. Is this possible?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreetings and thank  you\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-05T20:51:41Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYes sir _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\twe call it fresnel. Here is an example for you_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#17QZMR_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#17QZMR_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tAs you can see reflection is only visible on edges. But you can also do the opposite_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#17QZMR%231_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#17QZMR#1_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-05T20:55:57Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\tthank you sir_co_ I will have a look _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2017-04-05T21:00:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tAnd please note that fresnel can be used with specular and emissive as well_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_fresnelparameters_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//doc.babylonjs.com/tutorials/how_to_use_fresnelparameters_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-04-08T18:00:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHi guys.  This is an interesting challenge_co_ and I don_t_t think Fresnel ops are going to solve this.  (Sorry).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think this challenge will require... constantly changing the material.reflectionTexture.level... dependent-upon camera -&gt_sm_ laptop angle.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tI guess_co_ what_co_ Babylon.Ray stuff... to determine viewing angle?   Or do we have camera.getDirectionTo(laptopMesh) ?  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tOr perhaps similar code to DirectionalLight.setDirectionToTarget... a subtraction of the two positions?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYep_co_ me thinks this is a renderLoop/texture.level thing.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  But_co_ you know_co_ I_t_m wrong a lot.  Party on.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-04-08T18:46:14Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti have a shader Condition in shaderBuilder i don_t_t know that is exact answer for this\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ODVTX%2323_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ODVTX#23_lt_/a_gt_ \n_lt_/p_gt_\n\n_lt_p_gt_\n\tif you can make color map ( with special color for screen you can make it reflective )\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ODVTX%2324_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ODVTX#24_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#1ODVTX%2325_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.babylonjs-playground.com/#1ODVTX#25_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-09T12:10:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ You make me crazy with your ShaderBuilder_co_ so cool_co_ any chance to have a bit more information about?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-04-09T13:37:24Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_div style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\thi again \n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\tin github _dd_ \n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\t_lt_a href_eq__qt_https_dd_//github.com/BabylonJS/Extensions/tree/master/ShaderBuilder_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_#3c6994_sm__qt__gt_https_dd_//github.com/BabylonJS/Extensions/tree/master/ShaderBuilder_lt_/a_gt_\n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\tdocumentation _dd_ \n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\t_lt_a href_eq__qt_http_dd_//cdn.rawgit.com/RNasimiAsl/Extensions/master/ShaderBuilder/Documentation/ShaderBuilderReferences.html_qt_ rel_eq__qt_external nofollow_qt_ style_eq__qt_color_dd_#3c6994_sm__qt__gt_http_dd_//cdn.rawgit.com/RNasimiAsl/Extensions/master/ShaderBuilder/Documentation/ShaderBuilderReferences.html_lt_/a_gt_\n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\tyou can find the shader in BABYLON.Effect.ShaderStore\n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\tBABYLON.Effect.ShadersStore[_qt_ShaderBuilder_1PixelShader_qt_]\n\t_lt_/p_gt_\n\n\t_lt_p style_eq__qt_color_dd_#272a34_sm__qt__gt_\n\t\tBABYLON.Effect.ShadersStore[_qt_ShaderBuilder_1VertexShader_qt_]\n\t_lt_/p_gt_\n_lt_/div_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2017-04-09T14:06:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThis might sound ego-centric_co_ but I_t_m proud of my _qt_for kids_qt_-level ShaderBulder intro... _lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/topic/27285-wexha-planet/#comment-156655_qt_ rel_eq__qt__qt__gt_here_lt_/a_gt_.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThere_t_s one thing to keep in mind_co_ all the time.  ShaderBuilder is a piece-by-piece shader code assembly assistant.  It will not make you a genius at writing shader code_co_ but it can DEFINITELY help _qt_see_qt_ the important parts of shader code.  It_t_s good for _qt_breaking it down_qt_.  MOST of the _qt_magic_qt_ you see in ShaderBuilder demos... happens because Naz is damned good at shader coding.  He_t_s a pro... top of the line.  Soon he_t_ll be earning 6-fig income_co_ just because he knows shaders_co_ speak nothing of writing a cool assembling assistant_co_ based upon _qt_Fluent_qt_ coding format.  He_t_s just THAT cool.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tOnce I asked _qt_Naz_qt_ ( _lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ )... HOW to _lt_strong_gt_VIEW_lt_/strong_gt_ the final shader code (and maybe NOT compile it or install it in engine.programs_co_ etc etc).  Instead_co_ he sent me the shader code for the project we were working-on (blending materials).  hehe.  He pasted the pixel and frag code... right into the forum post!  What a guy!  Just giving away his coolest shader code... for all to steal!  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut_co_ what I really wanted... was for him to add another layer to the .build()...  like .displayOnly().  Shaderbuilder would then_co_ somehow_co_ display the end _lt_em_gt_result_lt_/em_gt_... the _qt_big strings_qt__co_ and perhaps automatically put in some quotes and \\n for us.  If you have ever used CYOS shader editor_co_ and used _qt_get .zip_qt_ from there_co_ you_t_ll see what I mean.  It puts the shaders into Babylon.ShadersStore format...  big string.  Sometimes folks need them with \\n line separators_co_ sometimes not.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf .displayOnly option is available_co_ users can use shaderBuilder for building_co_ testing_co_ experimenting_co_ but if they need the final shader code in .fx files_co_ they can easily use .displayOnly or .fileOnly .build options. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tNot sure if it is possible.  But... it would also be easy to _qt_see_qt_ what shaderBuilder builds_co_ too.  Folks might understand shaderBuilder better_co_ if they can see the big end result.  Not sure how to display_co_ either.  Perhaps just hand them array of strings_co_ and let user fig how to display?  *shrug*  A bit off-topic_co_ sorry.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-11T06:29:27Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/?do_eq_hovercard_qt_ data-mentionid_eq__qt_5733_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/5733-wingnut/_qt_ rel_eq__qt__qt__gt_@Wingnut_lt_/a_gt_ Hi Wingnut_co_ I fighted against ShaderBuilder_co_ I_t_m not sure if it_t_s _qt_blessing or curse_qt_ _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt_ _co_ to show the shader code I did it in this way_dd_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_...           \n .BuildMaterial(demo.scene)_sm_\n\n  var ps _eq_ BABYLON.Effect.ShadersStore[_qt_ShaderBuilder_1PixelShader_qt_]_sm_\n  var vs _eq_ BABYLON.Effect.ShadersStore[_qt_ShaderBuilder_1VertexShader_qt_]_sm_\n_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\tThat means_co_ after building something_co_ assign 2 vars_co_ stop with the chrome debugger and clip the txt to clipboaard and save it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBut then comes the interesting part_dd_ UNDERSTAND THIS CODE _lt_img alt_eq__qt__dd_(_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_sad.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/sad@2x.png 2x_qt_ title_eq__qt__dd_(_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tBut anyway_co_ I reached my goal_co_ a building with walls and windows where only the windows are reflecting_dd_ _lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DNWJEQ%231_qt_ rel_eq__qt_external nofollow_qt__gt_PG_dd_ wall with windows_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tTo see_co_ you must press run twice or switch from https to http...seems to be a problem with ShaderBuilder-script as external ref..\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ can you have a look at this PG if this is ok. thank you\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGreetings to all\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-04-11T06:48:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DNWJEQ%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DNWJEQ#4_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_   // make your color map\n                .Map({ path_dd_ _qt_https_dd_//rawgit.com/androdlang/clonerjs/master/assets/glass1.png_qt_ })\n                // keep this map in reference number 1\n                .Reference(1)\n\n               // make your current material\n                .Map({ path_dd_ _qt_https_dd_//rawgit.com/androdlang/clonerjs/master/assets/glass.jpg_qt__co_ alpha_dd_ true }_co_ 1.)\n                  \n                \n                // chose your color in refrence \n                // for this window is white\n                // replace your white colore in refrence with\n                // your owned material\n                .White(1_co_ // your reference number\n                \n                // always start sub material whit Babylonx.Helper()\n                BABYLONX.Helper()  \n\n                // your material for white colore is here\n                 .Reflect({ normal_dd_ _t_nrm_t__co_ path_dd_ _t_/textures/TropicalSunnyDay_t_ }_co_ 1.) \n\n                .InLine(_t_              \\n\\\n                    mat4 m4  _eq_ mat4(1._co_0._co_0._co_0._co_0._co_1._co_0._co_0._co_0._co_0._co_1._co_0._co_0._co_0._co_0._co_1.)_sm_\\n\\\n                    vec3 direction _eq_ normalize(pos*3.141592*length(camera-pos)*0.1-camera)_sm_\\n\\\n                    vec3 coords _eq_ reflect(direction_co_nrm) _sm_\\n\\\n                    vec3 cubeUV _eq_ vec3(m4*vec4(coords_co_0.))_sm_\\n\\\n                    result _eq_ textureCube(cubeRef_0_co_cubeUV_co_0.)_sm_\\n\\\n                    _t_)\n\n              // finish sub Part with Build method\n              .Build()\n                \n                _co_{\n                    // between 0.5 and -0.5 help to control color range \n                    // -0.5 if use full step\n                     rangeStep _dd_   -0.48 _co_\n                     // control power of your sub material \n                    // -0.5 make it lower and 0.5 make it high\n                     rangePower _dd_  0.0\n                \n                 })_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-04-11T06:58:04Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#G67XLZ%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#G67XLZ#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tsee this sample for find final fragment and vertex shader with shaderBuilder\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand notic that shaderBuilder just is string builder \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-11T07:06:55Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ Thank you very much_co_ that helps a LOT!!!!! _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tAnd btw._co_ you had an so exiting example of a glass bottle _lt_a href_eq__qt_http_dd_//185.88.152.45/eash/pub/preview#30304_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//185.88.152.45/eash/pub/preview#30304_lt_/a_gt_ but the link is down_co_ can you reactivate it? I asked in _qt_demo and projects_qt_ already.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tMany_co_ many thanks and greetings\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-04-11T07:08:59Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\ti loss that data but can make it  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\twanna make it with this sample?\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-11T07:13:19Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t_lt_p_gt_\n\t_lt_a contenteditable_eq__qt_false_qt_ data-ipshover_eq__qt__qt_ data-ipshover-target_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/?do_eq_hovercard_qt_ data-mentionid_eq__qt_13038_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/profile/13038-nasimiasl/_qt_ rel_eq__qt__qt__gt_@NasimiAsl_lt_/a_gt_ Yess_co_ you are the king! I have Forgotten to ask another question_dd_ in the cube/mirror example above_co_ is it easy to change the UV_t_s for the left/right side to be in the same orientation with front/back with ShaderBuilder?\n_lt_/p_gt_\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"NasimiAsl","Date":"2017-04-11T07:49:10Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DNWJEQ%236_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DNWJEQ#6_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tyou most make 2 mesh (inside glass and glass )\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand my recommendation make one other mesh (non transparency ) for your main object ( and make it back face enable )  \n_lt_/p_gt_\n\n_lt_p_gt_\n\tnotic this part _dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\treflectSize  is spetial and we cant calculate that in webgl so you most define that yours\n_lt_/p_gt_\n\n_lt_p_gt_\n\tbut if you have large object this parameter is low\n_lt_/p_gt_\n\n_lt_p_gt_\n\t1 _eq_&gt_sm_ reflectSize _dd_0.1\n_lt_/p_gt_\n\n_lt_p_gt_\n\t10 _eq_&gt_sm_ reflectSize _dd_0.01 ..\n_lt_/p_gt_\n\n_lt_p_gt_\n\t vec3 direction _eq_ normalize(pos*3.141592*length(camera-pos)* reflectSize  -camera)_sm_\\\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n_lt_iframe data-embedcontent_eq__qt__qt_ frameborder_eq__qt_0_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/topic/23187-cube-texture-reflection-size/?do_eq_embed_qt__gt__lt_/iframe_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//www.babylonjs-playground.com/#DNWJEQ%238_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//www.babylonjs-playground.com/#DNWJEQ#8_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"javalang","Date":"2017-04-11T08:24:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tOK_co_ that looks so cool!! Time for a Demo ShaderBuilder _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_ and ClonerSystem _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt__lt_/p_gt_\n\n_lt_p_gt_\n\tThank you\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\there it is_dd_ _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#VIC7RU%231_qt_ rel_eq__qt_external nofollow_qt__gt_ClonerSystem and ShaderBuilder_lt_/a_gt_ (several hundred clones)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tand machine-friendly _lt_a href_eq__qt_http_dd_//www.babylonjs-playground.com/#VIC7RU%234_qt_ rel_eq__qt_external nofollow_qt__gt_here_lt_/a_gt_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]