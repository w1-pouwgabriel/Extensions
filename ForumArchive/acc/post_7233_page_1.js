[{"Owner":"davrous","Date":"2014-06-17T16:45:09Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Hi_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ I should have fixed a couple of bugs in the sandbox. I_t_ve also added support for scenes using .DDS or .TGA textures. I haven_t_t done a lot of tests so I_t_m waiting on your feedbacks. _lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/default_wink.png_qt_ alt_eq__qt__sm_)_qt_ srcset_eq__qt_http_dd_//www.html5gamedevs.com/uploads/emoticons/wink@2x.png 2x_qt_ width_eq__qt_20_qt_ height_eq__qt_20_qt__gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Bye_co__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Davud_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-18T15:04:32Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Any thoughts on supporting procedural textures?  If noise could be implemented_co_ then some sort of mapping back to Blender might be achieved.  I have looked at one of the shaders source listings the Blender python API can produce (STUCCI).  Was very large_co_ kind of kitchen sink with like 30 or more functions that never get called.  Not sure if Blender uses them_co_ as it is CPU based.  Maybe it is for that cycles render._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2014-06-19T15:49:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Just as a follow up_co_ I ran across this GPU shader doc for Blender _lt_a href_eq__qt_http_dd_//www.blender.org/documentation/blender_python_api_2_70_release/gpu.html_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//www.blender.org/documentation/blender_python_api_2_70_release/gpu.html_lt_/a_gt_ .  I decided to print out the glsl for 2 of these that I had made for the Gus_co_ The gingerbreadman tutorial.  I put both the little vertex shader and fragment shader in the same file._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Here is the python code (should look familar)_dd__lt_/p_gt__lt_p_gt__lt_span style_eq__qt_font-size_dd_10px_sm__qt__gt__lt_span style_eq__qt_font-family_dd__t_courier new_t__co_ courier_co_ monospace_sm__qt__gt_        # Textures_lt_br_gt_        self.textures _eq_ []_lt_br_gt_        self.shaders  _eq_ []_lt_br_gt_        textures _eq_ [mtex for mtex in material.texture_slots if mtex and mtex.texture]_lt_br_gt_        for mtex in textures_dd__lt_br_gt_            if mtex.texture.type _eq__eq_ _t_IMAGE_t__dd__lt_br_gt_                if mtex.texture.image_dd__lt_br_gt_                    if (mtex.use_map_color_diffuse and (mtex.texture_coords !_eq_ _t_REFLECTION_t_))_dd__lt_br_gt_                        # Diffuse_lt_br_gt_                        self.textures.append(Texture(_qt_diffuseTexture_qt__co_ mtex.diffuse_color_factor_co_ mtex_co_ filepath))_lt_br_gt_                    if mtex.use_map_ambient_dd__lt_br_gt_                        # Ambient_lt_br_gt_                        self.textures.append(Texture(_qt_ambientTexture_qt__co_ mtex.ambient_factor_co_ mtex_co_ filepath))_lt_br_gt_                    if mtex.use_map_alpha_dd__lt_br_gt_                        # Opacity_lt_br_gt_                        self.textures.append(Texture(_qt_opacityTexture_qt__co_ mtex.alpha_factor_co_ mtex_co_ filepath))_lt_br_gt_                    if mtex.use_map_color_diffuse and (mtex.texture_coords _eq__eq_ _t_REFLECTION_t_)_dd__lt_br_gt_                        # Reflection_lt_br_gt_                        self.textures.append(Texture(_qt_reflectionTexture_qt__co_ mtex.diffuse_color_factor_co_ mtex_co_ filepath))_lt_br_gt_                    if mtex.use_map_emit_dd__lt_br_gt_                        # Emissive_lt_br_gt_                        self.textures.append(Texture(_qt_emissiveTexture_qt__co_ mtex.emit_factor_co_ mtex_co_ filepath))     _lt_br_gt_                    if mtex.use_map_normal_dd__lt_br_gt_                        # Bump_lt_br_gt_                        self.textures.append(Texture(_qt_bumpTexture_qt__co_ mtex.emit_factor_co_ mtex_co_ filepath))  _lt_br_gt_#            else_dd__lt_br_gt_#                 TowerOfBabel.log(_t_WARNING texture type not currently supported_dd_  _t_ + mtex.texture.type + _qt__co_ ignored._qt_)_lt_br_gt__lt_br_gt_            else_dd_ #type _eq__eq_  _t_STUCCI_t_ or _t_NOISE_t__lt_br_gt_                shader _eq_ gpu.export_shader(scene_co_ material)_lt_br_gt_#                self.shaders.append(shader[_qt_fragment_qt_])_lt_br_gt_                glsl_handler _eq_ open(_qt_/home/jeff/Desktop/_qt_ + mtex.texture.type + _qt_.glsl_qt__co_ _t_w_t_)  _lt_br_gt_                glsl_handler.write(shader[_qt_vertex_qt_])                      _lt_br_gt_                glsl_handler.write(_qt_\\n//#############################################################################\\n_qt_)                      _lt_br_gt_                glsl_handler.write(shader[_qt_fragment_qt_])_lt_br_gt_                glsl_handler.close()_lt_/span_gt__lt_/span_gt__lt_br_gt_ _lt_/p_gt__lt_p_gt_Here is the output.  I cannot do anything with it_co_ but that does not mean some else can_t_t._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2019_qt__gt_NOISE.glsl.txt_lt_/a_gt__lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_2020_qt__gt_STUCCI.glsl.txt_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-11T20:46:07Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_I tacked a question on to this topic / announcement a year ago.  Fast forward a year with Procedural shaders added as of BJS 2.0._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Am starting to think that procedural textures from Blender could at least be mapped.  Here is the dropdown types list_dd__lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_05_2015/post-8492-0-07740500-1431376581.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_05_2015/post-8492-0-07740500-1431376581.png_qt_ data-fileid_eq__qt_4255_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8492-0-07740500-1431376581.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I see there is wood_co_ marble_co_ &amp_sm_ clouds in BJS.  How well they match up_co_ I do not know. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_From the Blender vertex shader_co_ there are these varying var to Fragment_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_varying vec3 varposition_sm_varying vec3 varnormal_sm__lt_/pre_gt__lt_p_gt_in our default vertex shader_co_ there is_dd__lt_/p_gt__lt_pre class_eq__qt_ipsCode prettyprint_qt__gt_// Outputvarying vec3 vPositionW_sm_#ifdef NORMALvarying vec3 vNormalW_sm_#endif_lt_/pre_gt__lt_p_gt_There are 8 inexplicable uniforms in the fragment shader of the NOISE from above.  Not sure_co_ but if they are passed in_co_ then there must be UI to set there value._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Does anyone think this is remotely possible?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-11T21:11:45Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_It should be_dd_)_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_pulling in @meulta_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-18T18:21:44Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I am finding UI for specific procedural textures.  Working with Wood.  There is_dd__lt_/p_gt__lt_p_gt_noise_basis_dd_ Sine_co_ Saw_co_ &amp_sm_ Tri_lt_/p_gt__lt_p_gt_wood_type_dd_ Bands_co_ Rings_co_ Band Noise_co_ &amp_sm_ Ring Noise_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Several noise settings (available only for types Band Noise &amp_sm_ Ring Noise)_lt_/p_gt__lt_p_gt_noise_type_dd_Soft &amp_sm_ Hard_lt_/p_gt__lt_p_gt_noise_basis_dd_ dropdown list with many_lt_/p_gt__lt_p_gt_noise_scale_dd_ number_lt_/p_gt__lt_p_gt_noise_nabla_dd_ number_lt_/p_gt__lt_p_gt_noise_turbulence_dd_ number_lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_05_2015/post-8492-0-14227900-1431972778.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_05_2015/post-8492-0-14227900-1431972778.png_qt_ data-fileid_eq__qt_4321_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8492-0-14227900-1431972778.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_If strictly just mapping to BJS wood for now_co_ the only settings are size_co_ ampscale_co_ &amp_sm_ woodColor.  As there are no pictures of BJS wood samples that I know of here is a swag_dd__lt_/p_gt__lt_p_gt_Type of wood is Bands_co__lt_/p_gt__lt_p_gt_noise_basis is used to set ampscale to 1 of 3 values._lt_/p_gt__lt_p_gt_Have no clue what size is_lt_/p_gt__lt_p_gt_Not sure what color to use._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-20T17:27:43Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Like it!!! do you plan to subimit a PR for this? I would love to have it in 2.1_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-05-20T19:05:47Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_As long as a .babylon handles procedural textures_co_ it is already there.  I am not going to edit Fileloader.  I would try to implement in TOB first.  It is faster_co_ and not reliant on FileLoader.  Would put as much as possible in pass 1_co_ so would be cut and paste for the Blender mapping part._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-05-21T17:26:06Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Sounds good_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-06-24T18:00:36Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Well_co_ I have embarked on texture baking for Blender procedural textures.  After some fumbling_co_ I am getting output all the way to a scene.  Have come to the conclusion that the script cannot just render the entire mesh as in the scene.  This takes into account lights &amp_sm_ this precludes normal textures_co_ since there is only one image.  Planning to switch to multiple bakes as required._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Anyway_co_ working with what I have so far_co_ I found that uv.smart_project gave the best results.  Still you can see _qt_seams_qt_ though._lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2015/post-8492-0-77348500-1435168212.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2015/post-8492-0-77348500-1435168212.png_qt_ data-fileid_eq__qt_4529_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8492-0-77348500-1435168212.png_qt__gt__lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_I was able to minimize by upping my image size.  This caused me to do a whole bunch of formats.  I tried the TARGA format_co_ but it would not load in a scene.  Here is the file_dd__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_4530_qt__gt_targa.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-06-24T20:21:03Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_what is the error reported?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-06-24T23:46:37Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_No actual error in the console.  Scene loads_co_ but missing the mesh_co_ though the shadow of the mesh_co_ not baked_co_ is visible.  All I have to do is switch to jpg or png_co_ and everything is fine.  Targa file displays when I open it with the Linux Image Viewer program. _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_This is not a big deal for me.  Targa format is the biggest_co_ except for JPEG2000.  Just thought I would give the feedback asked for by the original post._lt_/p_gt__lt_p_gt__lt_a class_eq__qt_ipsAttachLink ipsAttachLink_image_qt_ href_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2015/post-8492-0-30604900-1435189350.png_qt_ rel_eq__qt_external nofollow_qt__gt__lt_img src_eq__qt_http_dd_//www.html5gamedevs.com/uploads/monthly_06_2015/post-8492-0-30604900-1435189350.png_qt_ data-fileid_eq__qt_4531_qt_ class_eq__qt_ipsImage ipsImage_thumbnailed_qt_ alt_eq__qt_post-8492-0-30604900-1435189350.png_qt__gt__lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-06-25T17:08:02Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_can you provide the scene alongside the texture?_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-06-25T17:13:33Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Yes_co_ not at the right machine now.  Will put html &amp_sm_ source in zip_co_ along with targa &amp_sm_ jpg versions. Change either the name of the image file or change in line source file to control which gets loaded._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-06-29T14:20:01Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Been awol a few days.  Here is the full zip as described.  Note how arc-rotate camera is initialized wrong.  Will look into why_co_ along with changing camera to be separated from renderer_co_ implemented in 2.1.  Would have an issue implementing this in the .babylon version of the exporter_co_ I think.  Does Fileloader work with a rig field?_lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Also_co_ need to upgrade Blender exporter for 2.0 shadows.  In the request site_co_ I asked for a picture of the UI 3DMax used._lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//babylonjs.uservoice.com/forums/267546-general/suggestions/7742544-blender-addon-support-for-variance-shadows_qt_ rel_eq__qt_external nofollow_qt__gt_http_dd_//babylonjs.uservoice.com/forums/267546-general/suggestions/7742544-blender-addon-support-for-variance-shadows_lt_/a_gt__lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt__lt_a href_eq__qt_http_dd_//www.html5gamedevs.com/applications/core/interface/file/attachment.php?id_eq_4559_qt__gt_targa_full_scene.zip_lt_/a_gt__lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"Deltakosh","Date":"2015-06-29T14:55:50Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_The texture works for me._lt_/p_gt__lt_p_gt_ _lt_/p_gt__lt_p_gt_Did you allowed .tga mime type(actually I see that your file has no extension. this could be the reason why as your webserver may not know how to serve it)_lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"},{"Owner":"JCPalmer","Date":"2015-06-29T15:25:11Z","Content":"_lt_div class_eq__qt_mages_qt__gt_\n\t\t\t\n_lt_p_gt_Ok_co_ I didn_t_t know the extension for this was .tga and not .targa.  I switched file to have .tga &amp_sm_ Firefox used it.  I do not actually use a web-server most of the time_co_ just double click the html file_co_ unless running CocoonJS from a Tablet or something._lt_/p_gt_\n\n\n\t\t\t\n\t\t_lt_/div_gt_\n\n\t\t_lt_div class_eq__qt_ipsI_qt__gt__lt_/div_gt__lt_/div_gt_"}]