[{"Owner":"babbleon","Date":"2018-02-14T09:26:25Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tBelow is a PG for a scene I_t_m having problems with_dd_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#X6KVNY_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#X6KVNY_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI have a list of material definitions in JSON which I load with assetsManager_co_ once this is loaded.. I then load a .babylon file. We then loop through each of the materials in the JSON file and if the material name matches that in the scene_co_ it then change that material.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tProblem is_co_ the scene displays  before all the textures have loaded.. more noticable if you throttle the speed.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn an ideal world_co_ the spinning loading screen would show right up to the point that everything is ready_co_ but I can_t_t quite work out what I need to do.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tYes_co_ the textures &amp_sm_ AO map are large_co_ but this is really just to illustrate the problem better. \n_lt_/p_gt_\n\n_lt_p_gt_\n\tAny help would be gratefully received.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThank you\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-14T12:11:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHiya B.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#X6KVNY%231_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#X6KVNY#1_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tJust goofing around.  Probably bad ideas.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn line 35_co_ I set activeCamera.fov to 0.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIn lines 61-63_co_ I restore that field of view to default (2 seconds after loading screen ends).\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSort of like... closing the iris on the camera until...  we want it to open.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tThis might work_co_ but perhaps it is a bad solution.  Stay tuned for better ideas from people smarter than I.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-02-14T12:22:16Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you Wingnut_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tGood idea_co_ but if I throttle the speed to 3G on chrome_co_ your 2 second timeout isn_t_t enough.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI need to account for fast / slow data &amp_sm_ fast / slow computers too.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIdeally_co_ I would need to be able to check if the shader(s) is /  are ready and that is my sticking point.\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Wingnut","Date":"2018-02-14T13:07:00Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tYeah.  It almost seems like you need to refuse to close the loading screen... until you have iterated thru all scene.textures.isReady() or something like that.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs there any way to allow the assetsManager textureTask... to do _lt_u_gt_all_lt_/u_gt_ the texture loading?  Then use the _qt_directives_qt_ in the JSON as instructions for how to apply those material adjustments/textures?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIs _qt_the wait_qt_... waiting for the two Babylon.Texture loads that are _qt_ordered_qt_ by JSON _qt_parts_qt_?  (approx lines 48 and 56)\n_lt_/p_gt_\n\n_lt_p_gt_\n\tIf you could let a AssetsManager textureTask do those two Texture loads_co_ would the problem be gone?\n_lt_/p_gt_\n\n_lt_p_gt_\n\tSorry_co_ I_t_m really not qualified to be working on this.  _lt_img alt_eq__qt__dd_)_qt_ data-emoticon_eq__qt__qt_ height_eq__qt_20_qt_ src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_smile.png_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/smile@2x.png 2x_qt_ title_eq__qt__dd_)_qt_ width_eq__qt_20_qt_ /_gt_  Feel free to ignore me_co_ at will.\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-02-14T13:17:21Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\t_lt_s_gt_Hey Wingnut_co__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_Slightly ignoring what you kindly wrote... except to say that the delay in display is not due to texture loading_co_ it_t_s to do with the shader being ready in time._lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_Think I_t_m right in saying that _lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_However_co_ I have semi-sorted it_dd__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt__lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#X6KVNY%232_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#X6KVNY#2_lt_/a_gt__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_It display a loading screen when loading JSON and then another before the scene is ready... lines 62-72_dd__lt_/s_gt_\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_scene.registerBeforeRender(function()\n\t{\n\t\tif (!scene.isReady())\n\t\t{\n\t\t\tengine.displayLoadingUI()_sm_\n\t\t}\n\t\tif (scene.isReady())\n\t\t{\n\t\t\tengine.hideLoadingUI()_sm_\n\t\t}\n\t})_lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t_lt_s_gt_Now_co_ all I need to do it to get one seamless uninterrupted loading screen. Any bright ideas?_lt_/s_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tScratch that! It doesn_t_t work!\n_lt_/p_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t\t\t\n\n_lt_span class_eq__t_ipsType_reset ipsType_medium ipsType_light_t_ data-excludequote_gt_\n\t_lt_strong_gt_Edited _lt_time datetime_eq__t_2018-02-14T13_dd_19_dd_12Z_t_ title_eq__t_02/14/2018 01_dd_19  PM_t_ data-short_eq__t_Feb 14_t__gt_February 14_lt_/time_gt_ by babbleon_lt_/strong_gt_\n\t\n\t\t_lt_br_gt_suggestion didnt work\n\t\n\t\n_lt_/span_gt_\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Amarth2Estel","Date":"2018-02-14T13:47:46Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tHello !_lt_br /_gt_\n\t_lt_br /_gt_\n\tI think you may use the _t_onSuccess_t_ callback of your sceneLoader to do your material changes._lt_br /_gt_\n\tThis way_co_ the scene is not ready._lt_br /_gt_\n\tThen_co_ you just have to stop the renderLoop if the scene is not ready_co_ and wait until it is ready to start it again._lt_br /_gt_\n\t_lt_br /_gt_\n\tI was not able to test it_co_ because well.. my internet connection is too fast (I can_t_t believe I am actually complaining about that)._lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#X6KVNY%234_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#X6KVNY#4_lt_/a_gt__lt_br /_gt_\n\t \n_lt_/p_gt_\n\n_lt_p_gt_\n\tI guess you can also force the LoadingUI to be displayed instead of stoping the renderLoop_lt_br /_gt_\n\t_lt_a href_eq__qt_https_dd_//playground.babylonjs.com/#X6KVNY%235_qt_ rel_eq__qt_external nofollow_qt__gt_https_dd_//playground.babylonjs.com/#X6KVNY#5_lt_/a_gt_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI think that in your own code (working out of the playground) might be easier as you have complete control on the moment you launch the renderLoop._lt_br /_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-02-14T14:03:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tThank you Amarth2Estel_co_\n_lt_/p_gt_\n\n_lt_p_gt_\n\tI wont get a chance to play with this until tomorrow.. but I will see how I get on with it.\n_lt_/p_gt_\n\n_lt_p_gt_\n\tCheers_co_\n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"babbleon","Date":"2018-02-15T08:42:53Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_\n\tI think I have sorted this. Can_t_t show all of it in PG_co_ so have pasted below in case anyone else can make use of it.\n_lt_/p_gt_\n\n_lt_pre_gt_\n_lt_code_gt_var createScene _eq_ function()\n{\n\tengine.enableOfflineSupport _eq_ false_sm_\n\n\tvar scene _eq_ new BABYLON.Scene(engine)_sm_\n\n\tvar camera _eq_ new BABYLON.ArcRotateCamera(_t_Camera_t__co_ null_co_ null_co_ null_co_ BABYLON.Vector3.Zero()_co_ scene)_sm_\n\tcamera.setPosition(new BABYLON.Vector3(1.00_co_ 1.00_co_ -1.50))_sm_\n\tcamera.minZ _eq_ 0_sm_\n\tcamera.panningDistanceLimit _eq_ 1_sm_\n\tcamera.pinchPrecision _eq_ 60.00_sm_\n\tcamera.wheelPrecision _eq_ 60.00_sm_\n\tcamera.upperAlphaLimit _eq_ (Math.PI * (90.00 + 270) / 180)_sm_\n\tcamera.lowerAlphaLimit _eq_ (Math.PI * (-90.00 + 270) / 180)_sm_\n\tcamera.upperBetaLimit _eq_ 95.00 * (Math.PI / 180)_sm_\n\tcamera.lowerBetaLimit _eq_ 0.00 * (Math.PI / 180)_sm_\n\tcamera.lowerRadiusLimit _eq_ 0.50_sm_\n\tcamera.upperRadiusLimit _eq_ 2.00_sm_\n\tcamera.target _eq_ new BABYLON.Vector3(0.00_co_ 0.30_co_ 0.00)_sm_\n\tcamera.fov _eq_ 50.00 * (Math.PI / 180)_sm_\n\tcamera.attachControl(canvas_co_ false)_sm_\n\n\tvar light _eq_ new BABYLON.HemisphericLight(_qt_light1_qt__co_ new BABYLON.Vector3(0_co_ 4_co_ 0)_co_ scene)_sm_\n\tlight.intensity _eq_ 0.7_sm_\n\n\tvar assetsManager _eq_ new BABYLON.AssetsManager(scene)_sm_\n\t//load json file with specification for each material to be applied\n\tvar textTask _eq_ assetsManager.addTextFileTask(_t_materialsjson_t__co_ _t_https_dd_//raw.githubusercontent.com/babbleon/babylon/master/materials.json_t_)_sm_\n\tassetsManager.load()_sm_\n\ttextTask.onSuccess _eq_ function(task)\n\t{\n\t\tparts _eq_ JSON.parse(textTask.text).material_sm_\n\t\t//babylon file has materials_co_ but all are white\n\t\tBABYLON.SceneLoader.Append(_t__t__co_ _t_https_dd_//raw.githubusercontent.com/babbleon/babylon/master/testcubes.babylon_t__co_ scene_co_ function()\n\t\t{\n\t\t\tfor (var i _eq_ 0_sm_ i &lt_sm_ parts.length_sm_ i++)\n\t\t\t{\n\t\t\t\tfor (var j _eq_ 0_sm_ j &lt_sm_ scene.meshes.length_sm_ j++)\n\t\t\t\t{\n\t\t\t\t\t//loop thru each mesh_t_s material and if it matches that in the json file_co_ then we change it\n\t\t\t\t\tif (scene.meshes[j].material.name _eq__eq__eq_ parts[i].par_path)\n\t\t\t\t\t{\n\t\t\t\t\t\t//rand added to texture path to avoid caching on playground\n\t\t\t\t\t\tscene.meshes[j].material.diffuseTexture _eq_ new BABYLON.Texture(_t_https_dd_//raw.githubusercontent.com/babbleon/babylon/master/_t_ + parts[i].mat_id + _t_.jpg?rand_eq__t_ + Math.round(Math.random() * 100000)_co_ scene)_sm_\n\t\t\t\t\t\tscene.meshes[j].material.diffuseTexture.coordinatesIndex _eq_ 1_sm_\n\t\t\t\t\t\tscene.meshes[j].material.diffuseTexture.uScale _eq_ 5_sm_\n\t\t\t\t\t\tscene.meshes[j].material.diffuseTexture.vScale _eq_ 2_sm_\n\t\t\t\t\t\tscene.meshes[j].material.diffuseColor _eq_ BABYLON.Color3.FromHexString(parts[i].mat_diffuseColor)_sm_\n\t\t\t\t\t\tscene.meshes[j].material.specularColor _eq_ BABYLON.Color3.FromHexString(parts[i].mat_specularColor)_sm_\n\t\t\t\t\t\tscene.meshes[j].material.ambientColor _eq_ BABYLON.Color3.FromHexString(parts[i].mat_ambientColor)_sm_\n\t\t\t\t\t\tscene.meshes[j].material.emissiveColor _eq_ BABYLON.Color3.FromHexString(parts[i].mat_emissiveColor)_sm_\n\t\t\t\t\t\tscene.meshes[j].material.ambientTexture _eq_ new BABYLON.Texture(_t_https_dd_//raw.githubusercontent.com/babbleon/babylon/master/Job%201_FULL.png_t__co_ scene)_sm_\n\t\t\t\t\t\tscene.meshes[j].material.ambientTexture.coordinatesIndex _eq_ 0_sm_\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t})_sm_\n\t}\n\treturn scene_sm_\n}_sm_\n\nvar scene _eq_ createScene()_sm_\nengine.runRenderLoop(function()\n{\n\tif (!scene.isReady())\n\t{\n\t\tengine.displayLoadingUI()_sm_\n\t}\n\tif (scene.isReady())\n\t{\n\t\tscene.render()_sm_\n\t}\n})_sm__lt_/code_gt__lt_/pre_gt_\n\n_lt_p_gt_\n\t \n_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]