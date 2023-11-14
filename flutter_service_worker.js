'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "5a28c2586e056eae2562e97d5935805e",
"index.html": "be5d654a6c450caec8c37169a0c256b9",
"/": "be5d654a6c450caec8c37169a0c256b9",
"firebase-messaging-sw.js": "4375e6774666497aca08498767df3097",
"main.dart.js": "810792ef39c1e28a00fcdd6995fd5d4f",
"sqlite3.wasm": "91f3e6deef838b810d9ee3c8cc750eba",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"order_sound.mp3": "ab54bf75fb8723f828e3f3caa7338c59",
"sqflite_sw.js": "956c8c891e383d810e98bd8c25f33002",
"icons/zadinga_logo.png": "6261b748c03c17cfff182fa06325feb0",
"manifest.json": "4552dab47d4cb614c5f437c6eea3829a",
"assets/AssetManifest.json": "1150b0a30775056b139d05c2c1cf6742",
"assets/NOTICES": "aa612a5784f9331f86181fd09123e7b4",
"assets/FontManifest.json": "83cde3044936253640bca78b9ec73102",
"assets/packages/youtube_player_flutter/assets/speedometer.webp": "50448630e948b5b3998ae5a5d112622b",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/1.5x/powered_by_google_on_non_white.png": "a0bdd851f1d00d131f005c60ed2cb16b",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/1.5x/powered_by_google_on_white.png": "c7e713340ff7ad9e1af8482ad2a71349",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/2.0x/powered_by_google_on_non_white.png": "e72d1907bf5d0f6c1153e50aa7cf7f9a",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/2.0x/powered_by_google_on_white.png": "60e8a8323a1f5c9dc59c6783d5974123",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/powered_by_google_on_non_white.png": "27efb6d97555008ec637e8c5a6833f82",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/3.0x/powered_by_google_on_non_white.png": "97f2acfb6e993a0c4134d9d04dff21e2",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/3.0x/powered_by_google_on_white.png": "40bc3ae5444eae0b9228d83bfd865158",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/4.0x/powered_by_google_on_non_white.png": "33ff537622b33a8a161646a7be0800d0",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/4.0x/powered_by_google_on_white.png": "cbb17d77d4436ba71593febe71599b53",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/0.75x/powered_by_google_on_non_white.png": "78b06d238cb55fd775d0faefc44448f7",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/0.75x/powered_by_google_on_white.png": "31bc81278fd5b781b342ea1e767d032e",
"assets/packages/flutter_google_places_sdk_platform_interface/assets/google/powered_by_google_on_white.png": "f127e368d62ad92dacab340de5af50e8",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "8816e2d05def19ee4e977755031130b4",
"assets/fonts/MaterialIcons-Regular.otf": "93a5bcd76a6288ce77abd859263f92d1",
"assets/assets/images/grow_store_back_mobile.png": "110bdff153c658e81713cd7ec8546ad3",
"assets/assets/images/faqs.png": "872585d6a239f5563f1a99d437df302f",
"assets/assets/images/qa5.png": "90e26584da1bb52dff1475a9789a1661",
"assets/assets/images/jagged_divider.svg": "beac6f9f0075bbbba31b234b1fef4794",
"assets/assets/images/cube_scan.svg": "b450a646205a96adbcf84ec1d9974fb3",
"assets/assets/images/pan_card_demo.png": "acb7debc637e1388e14f9e2a628e2cf1",
"assets/assets/images/add_product_musk.png": "e1838b4278fa5191710a467c0bce6369",
"assets/assets/images/qa4.png": "7474ac5b9d61ca5b87923ab034b31f45",
"assets/assets/images/customer_loyality.png": "ec17772568e3acc458d7c6206fc8f81d",
"assets/assets/images/qa6.png": "3dcc625e6f848bda501f7164b2cbe7ff",
"assets/assets/images/self_delivery_banner.png": "eaf9b879aaf4cc12e7107da080e1ef60",
"assets/assets/images/estore_image.svg": "d9506f697592bd0fce7739538f530d62",
"assets/assets/images/rupee.svg": "4f330a32c05ed0662ee481495b7352b9",
"assets/assets/images/qa7.png": "86570cdc28e7e25309dc136a8f1cdcec",
"assets/assets/images/search_product.png": "23033f735b6a00b765ed6ac362d4dd48",
"assets/assets/images/shop.svg": "1cef87b79aac97adaa1d3beb5a3a24e4",
"assets/assets/images/business_function.png": "fadef9fd5e97a184849a2aa73e51ec73",
"assets/assets/images/qa3.png": "72b1feb337163338b48d88d322a5a9b8",
"assets/assets/images/silver_plan_icon.png": "83c676a606b3bf2de13d848c82de6814",
"assets/assets/images/sticky_bar.png": "070e127994aeca3a9303c83d4ed2430d",
"assets/assets/images/qa2.png": "864df9b3095e2aa7d41d767bad5eff41",
"assets/assets/images/app_icon.png": "6ad5e2dc023d4d65e1b5235bca1530e4",
"assets/assets/images/discount.png": "dec1aeb1b375ca21ac80061dec568b7b",
"assets/assets/images/placeholder_image.svg": "3462c981e847d62350ade641346fb454",
"assets/assets/images/gst_rs.svg": "a13c01ef8fe8458ca41446f9b2c36f44",
"assets/assets/images/add_product_banner.png": "cc6d7cb8b0ad9469439b00d8e1f9bc76",
"assets/assets/images/gst_data.svg": "adcb2d69f30b4e51339c89ac29edf1cd",
"assets/assets/images/qa1.png": "42376eed2f40228c369d975ef0bcbf60",
"assets/assets/images/gst_people.svg": "d02f12dbe022ad22955156682ba42d8e",
"assets/assets/images/placeholder_image_name.png": "e14531c5cda86b795d54542f89a7624a",
"assets/assets/images/ondc_logo.png": "df2e77e417c65850a3b4a0185d01ec0d",
"assets/assets/images/delivery.png": "bf609f9e20f9426fe17ba53e8e22ae35",
"assets/assets/images/dunzo_delivers.png": "ddcfa471bf39db5f6bc2040fe4236db5",
"assets/assets/images/setup_digital_payment.png": "6291620577aaae6e66b59d68abf94dc4",
"assets/assets/images/accounting.png": "8c6440779c6d1ecf2a516c316703dc24",
"assets/assets/images/location_map_banner.svg": "ccc20b4fbe7bf3fdf712e0109151a166",
"assets/assets/images/green_bg.png": "2aa839c3ec2b88f46cee34a9d3876709",
"assets/assets/images/stock.png": "18887d18f3ff6de4de0e14672d60830e",
"assets/assets/images/comments.png": "1f36eaaff83f096a1b134cd30fc2439a",
"assets/assets/images/manage_store.png": "e27df0d9a0c68e6b9e7211ec62e05618",
"assets/assets/images/shop_placeholder.png": "24976151a5e3faac70a32d3efd3630f6",
"assets/assets/images/create_bill_collapsed_musk.png": "f2627631343bb6c38631a1715516e978",
"assets/assets/images/start_store_setup.png": "1da827ae3ddea646cf96ec81888b6476",
"assets/assets/images/remote.png": "38079fc9ddf19ff9265d8887835baf68",
"assets/assets/images/fiverr-1-1.png": "51e9cc7e1558579d5b136f6eb0ce9753",
"assets/assets/images/product_pack.png": "881ce5e35415bee6cfdabd793e7e77d9",
"assets/assets/images/add_products.png": "254db28e5f24365215a223f05779f0b3",
"assets/assets/images/payment_logo_list.png": "f76913ba153f2a07c9d85352293df4da",
"assets/assets/images/swiping_machine.png": "1d238ee76d63911060c408de0f5849bd",
"assets/assets/images/create_bill_expanded_musk.png": "fb134b3aa39f4b7ee9e1f31f35249d2d",
"assets/assets/images/gst_media.svg": "6ee89c60f33b19d51594d50a4982a464",
"assets/assets/images/topBGDDesktop.png": "b79cc0a3931687df2806faca2448d6a2",
"assets/assets/images/share_receipt_on_whatsapp_desktop.png": "f2bc4a034c74a5383225a2e37b611b38",
"assets/assets/images/desktop_appbar_bg.png": "2f47243d1318cc8043f14e7eb0af3920",
"assets/assets/images/management.png": "4883d4757bdc75a5ed5f63589ffd54cf",
"assets/assets/images/copy.svg": "f89b32621b35c0a0ccb0c67e6c423cbf",
"assets/assets/images/zadinga_logo.png": "6911432e9e79bceb721b9ad1066a4060",
"assets/assets/images/store_address.png": "cc5c5e3ac5370fd1763c32a7288c0502",
"assets/assets/images/onboarding_screen_image3.png": "1884a5faf73bbbd293f6e1320514c4ea",
"assets/assets/images/onboarding_screen_image2.png": "9a38005a0a6a4433311a95db679123c1",
"assets/assets/images/no_result_found.png": "902b6f0e16ba324798c02b0802239ae4",
"assets/assets/images/share_receipt_on_whatsapp.png": "574ed59cb37ce79e1d07c02d113591a8",
"assets/assets/images/sell_more_banner_desktop.png": "f4d5f25a45b4f80ac3d0281634e6960f",
"assets/assets/images/flash_on.svg": "c2aa630b3110d63ae7783f1c3da3a176",
"assets/assets/images/product_lock.svg": "254944098a4ec52d9c6b308b2767b945",
"assets/assets/images/background_overlay.jpg": "05fed300dcaad58fb955a28930f500cd",
"assets/assets/images/dunzo_not_delivers.png": "f5a7f2b5011ef16ac547fa74e640ab67",
"assets/assets/images/onboarding_screen_image1.png": "b646facdb0eb531d1d60227cf0341815",
"assets/assets/images/order_address_banner.svg": "c1695899ae676efa6be721e6c523f6de",
"assets/assets/images/app_icon_bg.png": "b84ac9707cd38838866b08388730684f",
"assets/assets/images/setup_store_expanded_musk.png": "610bf07096ff78d936691ff9908c3032",
"assets/assets/images/parcel_1.png": "40c6b45c6e140f7ae90afe368c4abede",
"assets/assets/images/Component%2520162%2520(1).png": "854a77f131a1ab19afa8bbacf6a0c889",
"assets/assets/images/onboarding_screen_image5.png": "a2dc3acc8677800fea9f20ad33af9051",
"assets/assets/images/payments.png": "8457b80e0cfa5ced8b0ec3fd7d9b8416",
"assets/assets/images/onboarding_screen_image4.png": "884d2b9f2a97b152dc7936c809d0bac9",
"assets/assets/images/trash.svg": "45433c566f97b675e773160f01fefe7b",
"assets/assets/images/marketing.png": "a7c01af324c820e1725b55c3a6ab4486",
"assets/assets/images/switch.png": "fe8aab9cd027bd16878c68a8119d2841",
"assets/assets/images/flash_off.svg": "b663dca4ebad4766486c963ab6b948d3",
"assets/assets/images/setup_store_collapsed_musk.png": "6d5915f4cf90c45ab0b04ffcd503abc9",
"assets/assets/images/edit.svg": "5fe7d5e7ffbdb170fbbdd0e89df3f773",
"assets/assets/images/sell_more_banner.png": "66ac629fc8be10c1b3c450defe57c5df",
"assets/assets/images/setup_digital_payment2.png": "1e55046ec5e19fc07c32a14d84ca436c",
"assets/assets/images/desktop_payment_appbar_bg.png": "fa1d2970ab52fd9f01d8a84738befbce",
"assets/assets/images/onboarding_screen_image6.png": "e2701dd8fbe90f120e96283373412b87",
"assets/assets/images/Group%2520772540753.png": "4c54f52a11a4b9a112e59755e060a30b",
"assets/assets/images/pwa_device.svg": "082caf2e3a4863ff2a8657db422b14cb",
"assets/assets/images/manage_store_back_web.png": "c290c06ffcbff11eabd4603784f5d87f",
"assets/assets/images/upgrade_your_plan.png": "e08dffc56b3ca60c5bd314a31a834bb5",
"assets/assets/images/upi_qr_scanner.png": "b66a7ffdd41237f37a19ff5020ff7906",
"assets/assets/images/share.svg": "587348aea5a7ac2037fe50cf1fa44805",
"assets/assets/images/manage_store_back_mob.png": "1ba601a9e23df49d67dfa218a0c73ef3",
"assets/assets/images/search_store_location.svg": "a8ebfbc0ec7e20cfc4706ec85ef19bbe",
"assets/assets/images/zadinga_logo_dashboard.png": "583112cfedc5470ed41e1ef6efb18067",
"assets/assets/images/store_world.svg": "253c7c02923dcd7e80226508893b8748",
"assets/assets/images/business_function_item_bg.png": "c8b9c64cf13962211bcdfb31ec24b394",
"assets/assets/images/user_img_placeholder.png": "2293c024c67ee9bfe2c197b754c9e507",
"assets/assets/images/paytm_png.png": "c4478d3ea4dffb963a355a1bb3fbff02",
"assets/assets/images/zadinga_biz_logo.png": "973d07b9dfa7d9753f1c3f5e55ea2ae7",
"assets/assets/images/help.svg": "47ee2544df3f57abf06cd789265df2cc",
"assets/assets/images/chat.png": "3364ba609b2194d6dd3ab85cc8672905",
"assets/assets/images/value_onboarding_image1.png": "09a7ed27075255f5df652c76bded1412",
"assets/assets/images/Component%2520163%2520(1).png": "adce68d7d63307458d5d2e89b59ab156",
"assets/assets/images/close_icon.png": "9081fa8824520f543778d3c75b163600",
"assets/assets/images/add_product_banner_desktop.png": "6f78d39f272e2ace36c7072609829cb3",
"assets/assets/images/no_items_added.png": "563f3cd5b9f641ae7d9d17c6406e30d4",
"assets/assets/images/small_whatsapp_color.png": "594f616c532004fba78a94efc7e63b21",
"assets/assets/images/money_bag.png": "b034c23d438b22235c9eb0a4c6bd8a4d",
"assets/assets/images/staff.png": "22eecabbb6f3cbd38eb5ff8ea6cc7922",
"assets/assets/images/zadinga_logo_small.png": "3dd071befaeb7cc350f0d9b7c91a9a6c",
"assets/assets/images/qa9.png": "5180ba5ae238774e8b912253f36cac9a",
"assets/assets/images/value_onboarding_image2.png": "9167ff901ea8f4fbb0f3e51fb5847737",
"assets/assets/images/social_media.png": "c8ad80c474d4d49e86b4cd541ce30d64",
"assets/assets/images/call-calling.png": "434d2995004b6e39aab72872c74f5d42",
"assets/assets/images/value_onboarding_image3.png": "0a2ed710c78a59a04903d2ac01dd91a2",
"assets/assets/images/zigzag.svg": "762fb2ff516df3768536a8d60a5b08b0",
"assets/assets/images/bg.png": "8fbea2990c36f3686f91d167aa6672b2",
"assets/assets/images/qa8.png": "ea6f4f9d56dd9a5e55627cb602f4a0ca",
"assets/assets/images/dunzo_delivery_banner.png": "27f5233d0a3a24a2f1a9519fcefa2f7e",
"assets/assets/images/top_green_bg.png": "d93bcff2f4e9191eb78684d59ea9dda3",
"assets/assets/sounds/order_sound.mp3": "ab54bf75fb8723f828e3f3caa7338c59",
"assets/assets/json/sweets_and_savouries.json": "775b5b02a3eea7d79a1e606b866d6011",
"assets/assets/json/kirana.json": "6d26d69e03938ef1d2c00ec1666a092b",
"assets/assets/json/language.json": "9b0d43936735e138957b6deecb622eb1",
"assets/assets/json/paint_and_hardware.json": "06da507a966a80ded28885869fe4aa31",
"assets/assets/json/furniture_homedecor_and_furnishing.json": "a9d1916dacf953ef464943803ba2f749",
"assets/assets/json/company.json": "970e6ea270904c62845831b5dc984c97",
"assets/assets/json/home_kitchen_appliciances.json": "d085c0a653194b0c3ff59f1b21651687",
"assets/assets/json/jewellery.json": "c64d4aaa7cf9c92afc5f9c032e9de851",
"assets/assets/json/currency.json": "14f36c21d09eaf5bb1295460309bcf3a",
"assets/assets/json/gifts_and_toys.json": "4acf19558f235122db28ed88246707ad",
"assets/assets/json/mobile_tablet_wearables.json": "26fb88cbbb84a608221d0761e4ca8521",
"assets/assets/json/restaurant_and_cafe.json": "7fa1c124ba88bec33df3691ac49b7963",
"assets/assets/json/dry_fruits_dates_and_seeds.json": "c73c62d911e1b6736ccd67d65d90059a",
"assets/assets/json/footwear.json": "6795dc2693b4fe06c9836cc789a81e0f",
"assets/assets/json/opticals.json": "9c7fcb13f29207f2c9761c7b89c4a20c",
"assets/assets/json/tax_slab.json": "489db2709538f9da8ce25869dea4192c",
"assets/assets/json/pet_food_and_accessories.json": "33d919d4084e1784ada830f458d35f17",
"assets/assets/json/fashion_furnishing_accessories.json": "349479fea4fa9de030df6a64a4d05b2e",
"assets/assets/json/categories_search_keywords.json": "3d5a45bd079810cd80918707a1643dbd",
"assets/assets/json/category.json": "8834df5e877a0fcf61bcba3aa91d671c",
"assets/assets/json/books.json": "89a456ff23651dcd7c53944a64dc3193",
"assets/assets/json/luggage.json": "4fac62526a058141008b46b2750d0320",
"assets/assets/json/watch.json": "a3a3d95b2ac1e240ca738bd00c3bc9fc",
"assets/assets/json/stationary.json": "4ec938edf999e4f026673dc30f11596c",
"assets/assets/json/fruits_and_vegetables.json": "ae126fe82b504b63c2345cda7a7e9550",
"assets/assets/json/meat_and_poultry.json": "9359773388320a435ea62ec3b3425067",
"assets/assets/json/car_accessories.json": "cfd759810e07a0550cb7c15f83a99b68",
"assets/assets/json/sport_accessories_clothing.json": "ffac6185aa69b0b3e54919e5f683d316",
"assets/assets/json/bakery.json": "164a41f08c9af8e9dfe2d33eb1330a92",
"assets/assets/icons/info_icon.svg": "54559de7cd01261f9dec22b854b02328",
"assets/assets/icons/arrow_right_white_with_bg.svg": "4fe6842c68a03196bd6801cdf7a3165c",
"assets/assets/icons/rider_assigned_yellow.svg": "3458a1807659679645fbdafea2094ebd",
"assets/assets/icons/link_domain_icon.svg": "5d01acccb21d7ea0f810b04b611a70de",
"assets/assets/icons/verify_thick.svg": "1fe37d92b9b28ccec739dd090fe4bd60",
"assets/assets/icons/refresh_circle.svg": "d1244eee2b584f8bf8f5311211bd5e7d",
"assets/assets/icons/gold_plan_coin.svg": "d5ed0994bae0b598ff55fea98716e074",
"assets/assets/icons/home_inactive.svg": "686ec717ebc544aa64203c0b4921e589",
"assets/assets/icons/search.svg": "ac3af5ee5a4781ab5cfd8bcde48244c1",
"assets/assets/icons/notes.svg": "0f313d748d20403b72bf556e1db9db83",
"assets/assets/icons/cheque.svg": "e2bb74200f3a68749e35789cf808faf8",
"assets/assets/icons/upi.svg": "589ce951330789dbc98703833eba14dd",
"assets/assets/icons/gallery_select_image.svg": "861a5be1817615be7d7e0dab64b64fa4",
"assets/assets/icons/payment_link.svg": "ab1485ba49032d56cb49981482df08bd",
"assets/assets/icons/outline_circle_grayed_whatsapp.svg": "c5125cb9d782c035a0d4c4bc7e148f51",
"assets/assets/icons/delivery_pending_yellow.svg": "559e864724f3a034ae3d37de6ccffd11",
"assets/assets/icons/orders_inactive.svg": "990a1685c589e84b0f1fc0932748d327",
"assets/assets/icons/prescription.svg": "efa1be82edb5ce5952612e0daedc42be",
"assets/assets/icons/payent_link_inactive.svg": "618abdc02fe70e8a7205f724ff391227",
"assets/assets/icons/box_tick.png": "20c989659513699ad1355aa6a73f5307",
"assets/assets/icons/document_text.svg": "718b4c1b948f31218929370701240207",
"assets/assets/icons/location_management_icon.png": "bd3336423a669d0e6b3707183cbdda40",
"assets/assets/icons/non_veg_icon.svg": "34bb2297aa6fe065ba3e05123197328e",
"assets/assets/icons/online_store.svg": "bb0c9b140f9db8c7bb484f79d5fc98e2",
"assets/assets/icons/expire_date_rectangle.svg": "9307e48237ccfe766f828794299ed089",
"assets/assets/icons/estore_banner_icon.svg": "677f297aea91ca095e9d9e114615f1e4",
"assets/assets/icons/timer_gray.svg": "e8f7626c573ce8df41eac2c75019af9f",
"assets/assets/icons/phonepe.svg": "b53c743944663aca06c385f315beabff",
"assets/assets/icons/business_category.svg": "ed57eb2a0588901d202d1b5073169489",
"assets/assets/icons/lock_grey.svg": "b34bbe71fbd1d97047d0e13ce8f4eac5",
"assets/assets/icons/bulk_upload_layer.svg": "8a43e7672b5b4423efea38aa8c102569",
"assets/assets/icons/search_inactive.svg": "11accd36a89c1e49ecb5411aca7b3382",
"assets/assets/icons/track.svg": "a32f5297f9b41f9011a8f09c751644b7",
"assets/assets/icons/flag.png": "18b47a556b6b3e997509d72a82bf6362",
"assets/assets/icons/ic_facebook.svg": "b6a511b1588af3c2a3f017009ea4f0f7",
"assets/assets/icons/display_business_name.svg": "2dbe5c3d8a2d3cb7f8ec8d50ab7fd7d6",
"assets/assets/icons/chat_icon_dashboard.png": "366d33d0bfff78115d05641683d4c22f",
"assets/assets/icons/user.svg": "aa7aebd5b776a7067a6a2c4129a42e5a",
"assets/assets/icons/truck_tick.svg": "3163c062309f73d32c70667fb2103a26",
"assets/assets/icons/manage_category_icon.svg": "bd0f86b385ee7edf488c681323eecb22",
"assets/assets/icons/right_arrow_black_circle.svg": "90b152afa910075c871a6e32eecf85a1",
"assets/assets/icons/estore_active.svg": "c5176f2a9dde2e37cc92a5fadf031688",
"assets/assets/icons/home.svg": "1c2aba15d23a78c943ae1ea1d5935852",
"assets/assets/icons/shop.svg": "3251106a357ab0441f0bd1bae896e65c",
"assets/assets/icons/alert.svg": "2499de44d5c9e34fa6405ef4a5a463a0",
"assets/assets/icons/rupees_round.svg": "65d0e3428664e96c14562a5972ab985b",
"assets/assets/icons/discount_and_loyalty_icon.png": "213fdf0e4a98f1cd5264fd97f396738a",
"assets/assets/icons/alert_red.svg": "c54cb752aceff58be9914f554047319a",
"assets/assets/icons/payment_icon.svg": "d151e542f198fd4ddc292300efa0f39b",
"assets/assets/icons/silver_plan_icon.png": "6869cf3290ac1b85ce05dadbc52843b4",
"assets/assets/icons/delivery_dunzo_black.svg": "ebe786616fdcfac575ad581b9209a28b",
"assets/assets/icons/secure.svg": "3920e86a7600492eebe06a2521ac48a3",
"assets/assets/icons/cancel.svg": "882497935e970e3056cee4b5fb687706",
"assets/assets/icons/add_icon.svg": "a3a9afa60e22363d3d89a72725cf8779",
"assets/assets/icons/grid_icon.svg": "905ad4b3e95b03112670ba51141243f4",
"assets/assets/icons/search_gray.svg": "54d4285e09e9910634cfb46cab76b51b",
"assets/assets/icons/down_circle_green.svg": "23d146a00aa38a876a2a5378af15c753",
"assets/assets/icons/ic_more_inactive.svg": "591e41e89132d6e7f28acf7fd90d03c8",
"assets/assets/icons/crop.svg": "c6337adde975f54eb1626dd309b141f6",
"assets/assets/icons/record_expense.svg": "8c15f87e1a9ed2fe57917f4edc2e66f5",
"assets/assets/icons/qr_upi_corner_line.svg": "99515613d4da099b64573883f16f5432",
"assets/assets/icons/expired_icon.svg": "23603d6706c585af485f1e5fb651aab8",
"assets/assets/icons/ic_zadinga_notif_icon.png": "f5d1231304cc49857746ee36ceec7c06",
"assets/assets/icons/search_active.svg": "c1c03c6ed7704a48ad4f2030368067a5",
"assets/assets/icons/pos_machine_inactive.svg": "f4728358ebcdb3729d794b1d4b409170",
"assets/assets/icons/accounting_icon.png": "98468012eb4fb9137e17850fa0aea3ad",
"assets/assets/icons/help_icon.svg": "a09ad4670ad8210f149e56c7edcc84b8",
"assets/assets/icons/refresh_icon.svg": "ca3fa3399fd32202a7a41af470ac38cd",
"assets/assets/icons/list_icon_bg.svg": "f04637dc82de587727256e10016f086a",
"assets/assets/icons/out_for_delivery_yellow.svg": "ff42358c3366adeeca593c91e9fd3def",
"assets/assets/icons/add_green_button.svg": "e3c532c5e9334b2cbc89859fa552d340",
"assets/assets/icons/outline_circle_grayed_view.svg": "adcdcc9151041d5c3f76614f3feb2d05",
"assets/assets/icons/right_arrow.svg": "5746ba31acf1d5521755ea99904ddc50",
"assets/assets/icons/truck_moving.svg": "c99e82c04727bf0e6ff32f92baeaeea3",
"assets/assets/icons/delivery.svg": "3a6c84d28da8f93cf7d4a9e4f2c5134a",
"assets/assets/icons/sliver_plan_icon.svg": "beaa9077ca8b3509f35bb5adabe2ceba",
"assets/assets/icons/tick_green_circle.png": "cd0bd8095d25224ea947ebe3e81adb4b",
"assets/assets/icons/add_icon_white.svg": "4a037052f157ff66273bf7df818eece3",
"assets/assets/icons/warning-2.svg": "97bf1b3a016ba556dab62c6e7e38e8d3",
"assets/assets/icons/setup_store_icon.png": "ba13d7edbe93b0652bd20e523c5145c2",
"assets/assets/icons/dot.svg": "5bce3afbc1e7448f89a4e3a57a75fc7a",
"assets/assets/icons/package_icon.svg": "735bea4c22127c69794a8dfa2c7f7417",
"assets/assets/icons/gps_black.svg": "5f5ccc5907cc3fd7f184386aa5933819",
"assets/assets/icons/gpay.svg": "05281bec179d7ec9c9825a9a2b72eea8",
"assets/assets/icons/add_product_icon.png": "bfd7a3bed39df3abdfdc01e8b926937d",
"assets/assets/icons/lock.svg": "e4d11da692d701deefea0fd97ef7a4c6",
"assets/assets/icons/delivered_icon.svg": "b3f27736d6e3aeaa31fc16648d5b6aa8",
"assets/assets/icons/share_store_icon.svg": "2b9fd361caa9d58fecac103b6d7fee05",
"assets/assets/icons/add_button.svg": "b88cbbc1ca6b0ef3e7b714b91fe53e6e",
"assets/assets/icons/discount.svg": "7df909d1e461f8bc62a3d3e3c1d4c775",
"assets/assets/icons/cross_with_bg_white.svg": "a2d6a76b487997202e277be156eb69a0",
"assets/assets/icons/pending_icon.svg": "70f019282270fb1f99f091e6cbb5d0fe",
"assets/assets/icons/back_border.svg": "43e9ee6d3ae806abac45bf412f8ec59f",
"assets/assets/icons/arrow_left.svg": "465e685a897db6df0f9e8d75f4c23f0f",
"assets/assets/icons/expiring_plan_icon.svg": "08c5bcd1068cd630932161a4b84816bf",
"assets/assets/icons/sales_icon.png": "cf80e7d4308c4753b16dd4a11546ea0e",
"assets/assets/icons/add_product_fab.svg": "e162476f62f7d5fbf4736f58f589631e",
"assets/assets/icons/heart_edit.svg": "5edb7ec017595778bc002450789123b9",
"assets/assets/icons/share_receipt.svg": "abd2f40ff2df74953daf24fdf625aab0",
"assets/assets/icons/credit_debit_card.svg": "90a782ebae0427cd61bbb69f31e197d9",
"assets/assets/icons/google_maps_icon.svg": "dc42bfc780291a21b18aad5b4fce2d0d",
"assets/assets/icons/info_green.svg": "7acf7704c4d1d7bf67126e60f1cca233",
"assets/assets/icons/store_bill.svg": "243a5fa6f6e924a9f06385eae2c02483",
"assets/assets/icons/green_tick.svg": "7665312a12200b11feaa271ef19ea8b4",
"assets/assets/icons/close_red.svg": "81cff6bd86b65ccf9d596d234e12d063",
"assets/assets/icons/ellipse.svg": "7e8c5584b91cb301a84761e82da38759",
"assets/assets/icons/fssai.svg": "3f336c825efd9c3c385c8233410ffa7d",
"assets/assets/icons/enter_manually.svg": "61068edd45dcf0f3c196c66cfe9b36c9",
"assets/assets/icons/red_alert.svg": "f02c08ef2059202e49dc0e75fb1b76c4",
"assets/assets/icons/white_back_red_border.svg": "3629eea138017096cbf8b7302e77e317",
"assets/assets/icons/veg_icon.svg": "1f89e8a29218f968a4960aa59e2191e4",
"assets/assets/icons/setting_key.svg": "1820b4fd10fbdcc6a70e3f441bc14bfe",
"assets/assets/icons/accepted_success.svg": "1f233cad2f94f5eab708b74209f25cd1",
"assets/assets/icons/location_picker_marker.svg": "ab81daaa4a35a92cb29d8238589f705f",
"assets/assets/icons/whatsapp_solid.svg": "34ddca245fcd536a2f49bfc87e380188",
"assets/assets/icons/payment_ic.svg": "2f516ca848d4e52c4dc6b73b172b313c",
"assets/assets/icons/add_icon_white_circle.svg": "daf43faf9b9049e3beff71ce503d9ecc",
"assets/assets/icons/searching_rider_with_bg_white.svg": "67bb033ce5193e2166a2e66080b629a8",
"assets/assets/icons/expired_plan_icon.svg": "5bee69cfecb7e8fc208f19e05890f35f",
"assets/assets/icons/orders_active.svg": "2453c796a7002d89ffe8876c73b4550a",
"assets/assets/icons/add_button_green.svg": "d5122d37514565689932367b8371df38",
"assets/assets/icons/call_number_icon.png": "82b297bc12ba477e40dc0dc7dc4f4fb2",
"assets/assets/icons/remove_button.svg": "46dc598a1700fa80e85326034a1ee692",
"assets/assets/icons/filters.svg": "63624b5a8918e34e38456e52a08c191f",
"assets/assets/icons/expired_icon_red.svg": "c4b5bf613bc1d6b2f544a92e901d3742",
"assets/assets/icons/wallet.svg": "1e839a6dd76de096f68ecf334488ac22",
"assets/assets/icons/bill_icon.svg": "1455e0f03cf4b16df3aaf655359bea57",
"assets/assets/icons/yellow_clock.svg": "87cbe4109a1f5371cad18329a61c297a",
"assets/assets/icons/rider_reached_shop.svg": "fe0a9ef72efcb4f31c74ffac2c0467f0",
"assets/assets/icons/tick.svg": "23f645f9602f3ba9e96632eb36c570ac",
"assets/assets/icons/reg_business_address.svg": "3b258bafd12ba57f12163fc489136c5e",
"assets/assets/icons/add_icon_grey_circle.svg": "1edbc36200107fe335232d8e4c50467e",
"assets/assets/icons/card_icon.svg": "02d5bb174946cfa27d0fc07e97768369",
"assets/assets/icons/platform_fees_icon.svg": "89cad54f6c8b866b9ba1d6a3ad3cc1b5",
"assets/assets/icons/flag.svg": "a6e047a8408f5369fd2b4c27fccae21d",
"assets/assets/icons/collect_payment_icon.svg": "14ede393dca358037843bbbb7ccfbab0",
"assets/assets/icons/ic_youtube.svg": "7d95214aed779e0de533c4645b1398ee",
"assets/assets/icons/tick_orange_circle.png": "67a7a4d725aac2dae5a2b678ccc0338b",
"assets/assets/icons/info_orange.svg": "e9e3d1d61128c5183eb8b5351217cea7",
"assets/assets/icons/more_vert_horizontal.svg": "379875333780ca2eeb6264c38e34553e",
"assets/assets/icons/online_store_icon_green.svg": "20579457994e82b25127d5542e737952",
"assets/assets/icons/circular_rupee_symbol.svg": "90174957044cbd40e57b1b14534344c0",
"assets/assets/icons/manage_category.svg": "09d8473c586885f4e3e03fefe6ada14f",
"assets/assets/icons/faqs_icon.png": "50cae44999d5357844f3e478edfd25cc",
"assets/assets/icons/more_icon.svg": "a9e6884a45aa912d942012503f6dbd7b",
"assets/assets/icons/warning_icon_yellow.svg": "ca9aba90da836b069ed730775142fafe",
"assets/assets/icons/platinum_plan_coin.svg": "d29245edce21731749ddb6a687c3714e",
"assets/assets/icons/cancel_grey.svg": "6c3ed5258f837c293972feb1ef7a0bb1",
"assets/assets/icons/button_icon_right.svg": "4fe6842c68a03196bd6801cdf7a3165c",
"assets/assets/icons/global.svg": "aadf8f192c322f170ca2624ba06583f9",
"assets/assets/icons/add_button_icon.svg": "bffbe305be85424cfb9e1caf11ce8b5a",
"assets/assets/icons/ready_to_ship.png": "ec3db607b98918433e703c19c2ff9436",
"assets/assets/icons/email.svg": "c342ca8b630417f570b0eed1359483b3",
"assets/assets/icons/blue_ondc_logo.png": "0191185559bc20869e60a4bf5cc7ce6a",
"assets/assets/icons/tick_yellow_with_bg_grey.svg": "fbe5c25f10f0bfb3332a023e76e7dd6a",
"assets/assets/icons/rider_assigned.svg": "02e914ce3bd1def9fc23a950664f2891",
"assets/assets/icons/upi_inactive.svg": "885efb0c4be41fb6d5422d0d6c212859",
"assets/assets/icons/delete_gray_round.svg": "66dafbc8389dc7bf217ff3deca8ee941",
"assets/assets/icons/arrow_right_white.svg": "8e18266658ae68f8f0a07770f434b08f",
"assets/assets/icons/info.svg": "6c1b22b60f454e5f4245418abc029bac",
"assets/assets/icons/yellow_cross.svg": "98381e7e2090a5f24e1399f9e314370a",
"assets/assets/icons/map_placeholder.svg": "bf541cdfc72a837fc5c4e9fbdc92af4c",
"assets/assets/icons/delivered_icon_green.svg": "cc6dcfc4fcf43247772d9295cfe46f4f",
"assets/assets/icons/home_outline_dark.svg": "f3a2e3647a716490cc5a8bc75ea02468",
"assets/assets/icons/red_cross_circle.png": "91624572187d07cbc168779624d9977d",
"assets/assets/icons/delete_account_icon.svg": "2dcc43e41094ac90f219d9d5791a20f1",
"assets/assets/icons/waving_hand.png": "8be6f0935591d71293b620a6cc840928",
"assets/assets/icons/check_green.svg": "0178e640b18c6af64447e6d992b2847b",
"assets/assets/icons/copy.svg": "a2d9d56acf68f30a9cad0e6cb01a38a6",
"assets/assets/icons/platinum_plan_icon.svg": "eb4e10217c337833b35608fbdca3a87b",
"assets/assets/icons/zadinga_logo.png": "e56960cd8e60b30b8e52e837ab02e8cc",
"assets/assets/icons/customer_management_icon.png": "f38b84b57f371bbf6de2928f5d76497e",
"assets/assets/icons/staff_management_icon.png": "ffc016d68413eaa750aba1aef5d0c8f1",
"assets/assets/icons/cash_payment.svg": "48e249ccb1239fb41f0b3fcedbfb8d4f",
"assets/assets/icons/cross_mark_red.svg": "983b9554275660a6ff0a3b326788a4d8",
"assets/assets/icons/image.svg": "e5b555af73e85b28dc3352f6dc3e1dc1",
"assets/assets/icons/mobikwik.svg": "ddaced767fd8cf537dce08c6708d4c34",
"assets/assets/icons/chat_with_us.svg": "dd72051c46a365fcbfa27d45dbbaef1e",
"assets/assets/icons/tick_green2.svg": "0531d21904f1de2450a6a687f66c4b13",
"assets/assets/icons/e_store_icon.svg": "e42c1da0230b050e3ebe1764dabcf1c3",
"assets/assets/icons/store_preference.svg": "76d5ed2b9b5927ec025cc1935ca972df",
"assets/assets/icons/bill_receipt.svg": "fd55d3bbe9bdec802ce825008f401b6d",
"assets/assets/icons/dunzo_delivery.png": "500f7db97b1b4139224f8f191a9c2fe5",
"assets/assets/icons/stock_management_icon.png": "e97461ffc11bbb32241178eda6afb92a",
"assets/assets/icons/order_picked_up.svg": "ed865bcf6e2ee025de6be7d0a73c6520",
"assets/assets/icons/calendar_green_icon.png": "0bf04b4373c2369c21ed9e4d9fa251ed",
"assets/assets/icons/arrow_down.svg": "b7a8d748ea993327bf2d35b92b632c8c",
"assets/assets/icons/chat.svg": "2c8a7e54f6e397b07a54c9f102e4a9cc",
"assets/assets/icons/alert_1.svg": "662657f11c31fbf109791022a912bf6a",
"assets/assets/icons/user1.png": "394bc6d5a5a0e144eff1537956ea6992",
"assets/assets/icons/netbanking.svg": "61a0ae2d1f8b30e9f09570e7ed499d2b",
"assets/assets/icons/outline_circle_grayed_print.svg": "29ad9bc98040d3d483f7aed75bcf4974",
"assets/assets/icons/delivery_icon.svg": "848bc18efb33b88e3ae08c723ceb1fbf",
"assets/assets/icons/red_cross2.svg": "0d348abbfd369c7c53bcd7e4746b4812",
"assets/assets/icons/refresh_circle_bold.svg": "2217585b1bd201ead8091a5e9cf3e9ba",
"assets/assets/icons/Silver.png": "d978c41e217b7b8f53e0a6cb072e9c27",
"assets/assets/icons/heart_break_icon.svg": "b095ed66f54f06b77cd4e85b42c1f443",
"assets/assets/icons/staff_management_empty.png": "3bd9d9d8d7360a84bf9c25b67b4d6da9",
"assets/assets/icons/tick_green1.svg": "bfe968ac497628834f15d6a92b548791",
"assets/assets/icons/camera.svg": "97980ebe434e5dbe40d21d5c3dc56b2d",
"assets/assets/icons/arrow_right_black_with_bg.svg": "3bb53f1932c6bc6ffbb104d9c3c0d595",
"assets/assets/icons/grey_clock.svg": "57c49fed66fb558b4ff341d4bce3a4fe",
"assets/assets/icons/edit_pencil.svg": "cdbec6ccb79a377f4317a8f2102280ed",
"assets/assets/icons/offline_billing_icon.svg": "cfc1142e6f83d52ea1b22e5632af7ee3",
"assets/assets/icons/admin.svg": "769f065556eb1306a11a30f4857f840e",
"assets/assets/icons/transactions_icon.png": "f8ad45daf01435c547b901c38a1e2cb5",
"assets/assets/icons/arrow_left_bg.png": "3c7350000d7850528aae8d47d4dea7d6",
"assets/assets/icons/phone_icon.svg": "4c17dd1a55e8a483dd002d678ecda813",
"assets/assets/icons/pos_icon.png": "31cd20a96a4cac0c2d1518acaf6eeb4a",
"assets/assets/icons/whatsapp.svg": "f7ad0099edba304a938eeb44add2f678",
"assets/assets/icons/flashRupeeIcon.png": "4dfa64bcf203689ac159a85ab45cb599",
"assets/assets/icons/add_image_icon.svg": "397df521bb7d02b98ab68635e8929a71",
"assets/assets/icons/upload_image_icon.png": "3473ad4ceac22f26c3112519eb0fdfe5",
"assets/assets/icons/cross_with_bg.svg": "6d25e86bceeb8ab54276291aa9aa176f",
"assets/assets/icons/no_wifi_icon.svg": "7367fb0c397e5a0e93b4678b5b9d29cf",
"assets/assets/icons/timer_payments.svg": "727f26d0bfa37774b9ff188ccea34ae6",
"assets/assets/icons/barcode_icon.svg": "5316d693c0009fb0ca844c1425cd30ad",
"assets/assets/icons/trash.svg": "8d1646372a02a980635d14069154365e",
"assets/assets/icons/manual_form_icon.svg": "92b2d15271485c8b72fe1daffb59e1c1",
"assets/assets/icons/stock_mgmt.svg": "c5085ada401bb81d8575f124fa5332e3",
"assets/assets/icons/silver_plan_coin.svg": "1dec0a5278a3a357191ea604662b508d",
"assets/assets/icons/bulb_black_icon.svg": "5a747f9d82573f326b075c00b8e9b988",
"assets/assets/icons/list_icon.svg": "b4eaf5d473fd004a2c4fc2b037b857eb",
"assets/assets/icons/rupees_icon_full.svg": "94331d33be84654755fd88cb3631c30e",
"assets/assets/icons/empty_box.svg": "7e70d42f3cb59562fbda2d26a1d47c46",
"assets/assets/icons/red_cross.svg": "4322cfc386ee5cb1f2d3c8eda8f6cadb",
"assets/assets/icons/payment_setting.svg": "3a28e54ac2db27aae26e17e938e0cd11",
"assets/assets/icons/star.svg": "ab418466c5ee2f44a83d184ff513fac9",
"assets/assets/icons/stock_value_icon.png": "ed13c46d338215f03db0acd82cc06d04",
"assets/assets/icons/outline_circle_grayed_share.svg": "8b6d5a2483521c58efc32c76aa45ec35",
"assets/assets/icons/subtract_icon.svg": "f307fd0e7f210f55a573ba5405a0b831",
"assets/assets/icons/manage_business_icon.png": "da73b583ce2a3b1f496da5e62b01a324",
"assets/assets/icons/gallery_gray.svg": "da137e212dfbe5303d61b9915d700c35",
"assets/assets/icons/call_back_icon.png": "c295e80f9af54dfb4a36722a2424e014",
"assets/assets/icons/gps_green.svg": "0eec953debe833bedaa52c5e18c757fb",
"assets/assets/icons/ondc_icon.svg": "0928f40395a1a6fc631f4deff87e1909",
"assets/assets/icons/gstin.svg": "6d9a6806aaca5914f0f4ebd0da73b510",
"assets/assets/icons/return_requested.svg": "80faa36e2e26c93a77c7770d49bb3267",
"assets/assets/icons/self_delivery.svg": "5aa36960cb74b6d610ed42813c5c8aa3",
"assets/assets/icons/grid_icon_bg.svg": "8a68edfcff25d840e0717e9267712c8b",
"assets/assets/icons/camera_gray.svg": "d6342474a9cae49c0c954a0259c2b3ea",
"assets/assets/icons/products_active.svg": "c61a4f4cc80bdcc6eb41106da02a9189",
"assets/assets/icons/create_bill_icon.png": "081cc09756e43fffa7930d2b3df44b8f",
"assets/assets/icons/out_for_delivery.svg": "c64dfd5eb822ed6575741e91ffce96d0",
"assets/assets/icons/product_icon.svg": "d2a1eec88a475af57f5f0b7b2fbf7421",
"assets/assets/icons/back_with_bg.svg": "5d357379a08e5b3cde0806d74c158f34",
"assets/assets/icons/delivery_pending.svg": "f9329ec7adea847e79cc1da75d49bd5c",
"assets/assets/icons/delete.svg": "ce5845a7525b83a125a2ae78a22bd167",
"assets/assets/icons/products_inactive.svg": "7998aac87d0a21e7f54285415f3d2574",
"assets/assets/icons/phone.svg": "fcadd0d1f2b9aa779cc4718a17cb2c6a",
"assets/assets/icons/self_delivery.png": "2918b5fc9ac203d586c77a6f502eeadc",
"assets/assets/icons/green_pen_edit.svg": "832549b0c38552633b5b7d38d8ee4ca4",
"assets/assets/icons/restricted_icon.svg": "c1ffad27822542e5455c550f96916943",
"assets/assets/icons/call.svg": "d4fc9408485896309e1588b7fa229a81",
"assets/assets/icons/rotate_right.svg": "1f518193120a6e3163593def89274944",
"assets/assets/icons/email_icon.svg": "7dbef60260c27b41106bcb01a2f3248e",
"assets/assets/icons/error_icon.svg": "3a52af11f8aabbedbdf2ac0bdd43560e",
"assets/assets/icons/location.svg": "6f8ae571cea5e8b46cb380df241d3229",
"assets/assets/icons/manage_business_icon_desktop.png": "840213e3d6e3586cf2ac41b946e489ff",
"assets/assets/icons/alert_outlined.svg": "4242d9d57f39f5f25fdc5c0f1373c862",
"assets/assets/icons/outline_green_light.svg": "30c67a52722b2d48e35fb6173f2373f0",
"assets/assets/icons/profile.svg": "0fbf49130a2766fed77a4f7585fe3a13",
"assets/assets/icons/restricted_product_icon.svg": "71d1d982de6175138140675b5057e91a",
"assets/assets/icons/watch_video.svg": "38a04a2945e9e2d91cb6e2b51ba8840a",
"assets/assets/icons/order_rejected.svg": "2c413f36a50644880c99de48d8ce83a2",
"assets/assets/icons/close_icon_bg_grey.svg": "e1876546bc4c5ad208cdd9ebd50af5ba",
"assets/assets/icons/profile_circle.svg": "370d4a5d13de8eef2d957f4e46d68ceb",
"assets/assets/icons/delivery_setting.svg": "5d44e2742ff0821a4002e7ba25d6df52",
"assets/assets/icons/searching_rider.svg": "d4e84df0eb223721d7641e28a0f3b204",
"assets/assets/icons/payments_icon.png": "f05d267ae354ea2fe148be80a27409f4",
"assets/assets/icons/online_store_setting.svg": "a58e3ca9fa250efd5f838dd644d628b4",
"assets/assets/icons/home_outline.svg": "b999ba8c08fb011430d84d9463b505bd",
"assets/assets/icons/upi_image_icon.png": "1f8a7b38c84d5d8d80a106a8bb9a1238",
"assets/assets/icons/store_icon.png": "d4cc3d07bf955a383eb337d0645f1f31",
"assets/assets/icons/notifications.svg": "c22230a49ac8dfa8099f9e38a0981565",
"assets/assets/icons/outline_thin_green_light.svg": "9ac6db5c00801d95c6eab4f943c9775c",
"assets/assets/icons/delivery_truck_icon.svg": "63f78dd1a82d47cff68fc6e16fb6707b",
"assets/assets/icons/plus_icon.png": "bc43feca697beeec1b330249fec7994a",
"assets/assets/icons/graphs.svg": "f6c96d906e7501f19d7a71dd1828dda1",
"assets/assets/icons/cross_icon_red.svg": "7c59592acf18d49bfde84d925ec1ddc6",
"assets/assets/icons/minus_button_icon.svg": "46dc598a1700fa80e85326034a1ee692",
"assets/assets/icons/discount_solid_green.svg": "fb21b69cfb5a1c2de9eecc6e59bcf6df",
"assets/assets/icons/logout_icon.svg": "86d024f71ee03b7166e121c85500b8b4",
"assets/assets/icons/rmc_icon.svg": "041a50fe78b09c6cee92c22f0f05f5b0",
"assets/assets/icons/reg_business_name.svg": "544d0b537d8d63f1222bb4d3d6698832",
"assets/assets/icons/delivery_icon.png": "25db46b46155103f1903966c9a1c5589",
"assets/assets/icons/views_icon.png": "067d42cf9d3ec2a707aafad68d5a776d",
"assets/assets/icons/warning_icon.svg": "235adf289170a3e009bda0d32d817d2b",
"assets/assets/icons/camera_select_image.svg": "7d0f13446eb76f2c0b0edc94d9f2c0de",
"assets/assets/icons/cross_mark_grey.svg": "8e5c3c1e8d60e49c6bd7105c105e6ada",
"assets/assets/icons/help_green_icon.svg": "65adacbde4698cc2813acef3db0f5b34",
"assets/assets/icons/more_vert.svg": "48e057c2edb07bd18c9d1241c47311b2",
"assets/assets/icons/online_delivered.png": "cb1b5ea607b24c949794b86c92daa5df",
"assets/assets/icons/order_delivered.svg": "9bf0335995c8fd4632a76eb297c6b08f",
"assets/assets/icons/edit_pencil_underline.svg": "c0d572344d99f8323707cb312f86cb38",
"assets/assets/icons/stock_management_icon.svg": "438579bc277fd2673815e50e280569e4",
"assets/assets/icons/dunzo_delivery.svg": "b9b0541394540ff334ce4d861ee07185",
"assets/assets/icons/gold_plan_icon.svg": "1c3c5bfbbde94d384f9cc40e9537e077",
"assets/assets/icons/delivery_setting_yellow.svg": "20e843d12d540f911ae001056fcb9a59",
"assets/assets/icons/estore_inactive.svg": "bbd76334e3f57820c6fa8723d7a161e7",
"assets/assets/icons/grey_tick.svg": "60f37e9554878b20a0e4acd698701aa1",
"assets/assets/icons/verify_icon.svg": "fe19b58a6e1d6b8ad225c85a01cc3238",
"assets/assets/icons/tick_green_with_bg_grey.svg": "a3597255261be8bd7aa9f7c5bfbb1f9f",
"assets/assets/icons/timer.svg": "595fec0aeaacd51badc31c02cb9c1364",
"assets/assets/icons/monitor.svg": "d99294cb9dc506db57751eb770bb9ba2",
"assets/assets/icons/chevron_right_arrow.svg": "25d97ae3f9cec7037e32a61d63652cf5",
"assets/assets/icons/Gold.png": "0faa5d3b723e7782a04d411422f8dc03",
"assets/assets/icons/ic_more.svg": "40be51322e4079d177f0343b739a30a7",
"assets/assets/icons/rupee_square.svg": "d67ab82f3b2369aa6f77079fc6b05781",
"assets/assets/icons/barcode_scanner_icon.svg": "f812a53be7dba0f5787f5c004e705bb8",
"assets/assets/icons/Platinum.png": "f2f804f77eee9142e852620d04ea554d",
"assets/assets/icons/eye_slash_icon.svg": "75966e25d22ce94fe0950a190fc84d10",
"assets/assets/icons/outline_circle_grayed_download.svg": "ca54ac9f3ad36a256e9ffd05c320a32b",
"assets/assets/icons/delivery_truck.svg": "6d6d036f2d759307c00901c249ad703c",
"assets/assets/icons/settlement_initiated_icon.png": "8bde7ff8eb997f76e25bf11f31ce5cb9",
"assets/assets/icons/call_icon.svg": "6ba87bd3e2751dddc517bdb7c687cc8c",
"assets/assets/icons/black_circular_rupee.svg": "cf4494ba853a53aa16e7592e3f36616d",
"assets/assets/icons/read_more.svg": "bfe6f2623d57cbb60f865564cf08be35",
"assets/assets/icons/rupees_icon_half.svg": "a2ccf5e6c9135cb0f7d5555d04c61828",
"assets/assets/icons/ic_instagram.svg": "fa6afb627569ae1d0b96e7b550f6f36c",
"assets/assets/lottie/shutter_lottie.json": "e94cd09fcd20b758429e36deab0fd905",
"assets/assets/lottie/zadinga_splash.json": "90ef184633345449f495d23c02c70732",
"assets/assets/lottie/zadinga_biz_logo_animation.json": "729f6632bb41e56a2a34a3b65131cda2",
"assets/assets/lottie/zadinga_biz_shutter_logo.json": "9e9950436a8bb602b3d8d771361e0fdf",
"assets/assets/lottie/zadinga_shutter.json": "08e2ea6586f213046bbdf713bb4cc079",
"assets/assets/lottie/confetti_lottie.json": "d9aa1ec52c266aa1de7229439d6f994b",
"assets/assets/lottie/tetris.gif": "0f0fb74d6aca903ecc73e04a7719a568",
"assets/assets/lottie/zadinga.json": "e3009d06bdb8a92300fd44f4816a9fe0",
"assets/assets/lottie/zadinga_logo.json": "e3009d06bdb8a92300fd44f4816a9fe0",
"assets/assets/lottie/cube_loader.json": "3bed70a9498966309be1420993191852",
"assets/assets/fonts/PlusJakartaSans-Medium.ttf": "86c690cf3c5fa19ac4d644e3179d726e",
"assets/assets/fonts/PlusJakartaSans-Regular.ttf": "1c53607464229476dd0241bcc71235f6",
"assets/assets/fonts/PlusJakartaSans-Bold.ttf": "202ed785290892875b3c8b3d0584efc5",
"zadinga_logo_small.png": "3dd071befaeb7cc350f0d9b7c91a9a6c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
