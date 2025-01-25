export interface Loaders {
  [name: string]: string[]
}

export interface ConsoleLoaderOptions extends consoleStylerOptions {
  message?: string
  loaderName?: LoadersNames
}

export interface ConsoleLoaderResult {
  result: any
  error: Error | null
}

export interface ConsoleLoader {
  (
    task: () => Promise<any>,
    options?: ConsoleLoaderOptions
  ): Promise<ConsoleLoaderResult>
}

export interface TextColors {
  yellow: number
  red: number
  green: number
  blue: number
  cyan: number
  magenta: number
  white: number
  black: number
}

export type Colors = keyof TextColors

export type consoleStylerOptions = {
  color?: Colors
  bold?: boolean
  bgColor?: Colors
  indent?: number
  capitalize?: boolean
  emojiStart?: EmojiName
  emojiEnd?: EmojiName
  aling?: 'left' | 'center' | 'right'
}

export type consoleStylerData = any

export interface FormatText {
  (data: consoleStylerData, options?: consoleStylerOptions): string
}
export interface ConsoleStyler {
  (data: consoleStylerData, options?: consoleStylerOptions): void
}

export interface EmojiCategory {
  [subCategory: string]: {
    [emojiName: string]: string
  }
}

export interface Emojis {
  [category: string]: EmojiCategory
}

export type LoadersNames =
  | 'animals'
  | 'arrows'
  | 'bar'
  | 'bounce'
  | 'bouncingBall'
  | 'boxGrow'
  | 'car'
  | 'chars'
  | 'clock'
  | 'dots'
  | 'earth'
  | 'fillBox'
  | 'fish'
  | 'grenade'
  | 'hand'
  | 'loadingWords'
  | 'monkey'
  | 'moon'
  | 'rocket'
  | 'runner'
  | 'snake'
  | 'soccer'
  | 'spinner'
  | 'stars'
  | 'trafficLight'
  | 'wave'

export type EmojiName =
  | 'a_button_blood_type'
  | 'ab_button_blood_type'
  | 'abacus'
  | 'accordion'
  | 'adhesive_bandage'
  | 'admission_tickets'
  | 'aerial_tramway'
  | 'airplane'
  | 'airplane_arrival'
  | 'airplane_departure'
  | 'alarm_clock'
  | 'alembic'
  | 'alien'
  | 'alien_monster'
  | 'ambulance'
  | 'american_football'
  | 'amphora'
  | 'anatomical_heart'
  | 'anchor'
  | 'anger_symbol'
  | 'angry_face'
  | 'angry_face_with_horns'
  | 'anguished_face'
  | 'ant'
  | 'antenna_bars'
  | 'anxious_face_with_sweat'
  | 'aquarius'
  | 'aries'
  | 'articulated_lorry'
  | 'artist'
  | 'artist_palette'
  | 'astonished_face'
  | 'astronaut'
  | 'atm_sign'
  | 'atom_symbol'
  | 'auto_rickshaw'
  | 'automobile'
  | 'avocado'
  | 'axe'
  | 'b_button_blood_type'
  | 'baby'
  | 'baby_angel'
  | 'baby_bottle'
  | 'baby_chick'
  | 'baby_symbol'
  | 'back_arrow'
  | 'backhand_index_pointing_down'
  | 'backhand_index_pointing_left'
  | 'backhand_index_pointing_right'
  | 'backhand_index_pointing_up'
  | 'backpack'
  | 'bacon'
  | 'badger'
  | 'badminton'
  | 'bagel'
  | 'baggage_claim'
  | 'baguette_bread'
  | 'balance_scale'
  | 'bald'
  | 'ballet_shoes'
  | 'balloon'
  | 'ballot_box_with_ballot'
  | 'banana'
  | 'banjo'
  | 'bank'
  | 'bar_chart'
  | 'barber_pole'
  | 'baseball'
  | 'basket'
  | 'basketball'
  | 'bat'
  | 'bathtub'
  | 'battery'
  | 'beach_with_umbrella'
  | 'beaming_face_with_smiling_eyes'
  | 'beans'
  | 'bear'
  | 'beating_heart'
  | 'beaver'
  | 'bed'
  | 'beer_mug'
  | 'beetle'
  | 'bell'
  | 'bell_pepper'
  | 'bell_with_slash'
  | 'bellhop_bell'
  | 'bento_box'
  | 'beverage_box'
  | 'bicycle'
  | 'bikini'
  | 'billed_cap'
  | 'biohazard'
  | 'bird'
  | 'birthday_cake'
  | 'bison'
  | 'biting_lip'
  | 'black_bird'
  | 'black_cat'
  | 'black_circle'
  | 'black_heart'
  | 'black_large_square'
  | 'black_medium_small_square'
  | 'black_medium_square'
  | 'black_nib'
  | 'black_small_square'
  | 'black_square_button'
  | 'blossom'
  | 'blowfish'
  | 'blue_book'
  | 'blue_circle'
  | 'blue_heart'
  | 'blue_square'
  | 'blueberries'
  | 'boar'
  | 'bomb'
  | 'bone'
  | 'bookmark'
  | 'bookmark_tabs'
  | 'books'
  | 'boomerang'
  | 'bottle_with_popping_cork'
  | 'bouquet'
  | 'bow_and_arrow'
  | 'bowl_with_spoon'
  | 'bowling'
  | 'boxing_glove'
  | 'brain'
  | 'bread'
  | 'breast_feeding'
  | 'brick'
  | 'bridge_at_night'
  | 'briefcase'
  | 'briefs'
  | 'bright_button'
  | 'broccoli'
  | 'broken_heart'
  | 'broom'
  | 'brown_circle'
  | 'brown_heart'
  | 'brown_square'
  | 'bubble_tea'
  | 'bubbles'
  | 'bucket'
  | 'bug'
  | 'building_construction'
  | 'bullet_train'
  | 'bullseye'
  | 'burrito'
  | 'bus'
  | 'bus_stop'
  | 'bust_in_silhouette'
  | 'busts_in_silhouette'
  | 'butter'
  | 'butterfly'
  | 'cactus'
  | 'calendar'
  | 'call_me_hand'
  | 'camel'
  | 'camera'
  | 'camera_with_flash'
  | 'camping'
  | 'cancer'
  | 'candle'
  | 'candy'
  | 'canned_food'
  | 'canoe'
  | 'capricorn'
  | 'card_file_box'
  | 'card_index'
  | 'card_index_dividers'
  | 'carousel_horse'
  | 'carp_streamer'
  | 'carpentry_saw'
  | 'carrot'
  | 'castle'
  | 'cat'
  | 'cat_face'
  | 'cat_with_tears_of_joy'
  | 'cat_with_wry_smile'
  | 'chains'
  | 'chair'
  | 'chart_decreasing'
  | 'chart_increasing'
  | 'chart_increasing_with_yen'
  | 'check_box_with_check'
  | 'check_mark'
  | 'check_mark_button'
  | 'cheese_wedge'
  | 'cherries'
  | 'cherry_blossom'
  | 'chess_pawn'
  | 'chestnut'
  | 'chicken'
  | 'child'
  | 'children_crossing'
  | 'chipmunk'
  | 'chocolate_bar'
  | 'chopsticks'
  | 'christmas_tree'
  | 'church'
  | 'cigarette'
  | 'cinema'
  | 'circled_m'
  | 'circus_tent'
  | 'cityscape'
  | 'cityscape_at_dusk'
  | 'cl_button'
  | 'clamp'
  | 'clapper_board'
  | 'clapping_hands'
  | 'classical_building'
  | 'clinking_beer_mugs'
  | 'clinking_glasses'
  | 'clipboard'
  | 'clockwise_vertical_arrows'
  | 'closed_book'
  | 'closed_mailbox_with_lowered_flag'
  | 'closed_mailbox_with_raised_flag'
  | 'closed_umbrella'
  | 'cloud'
  | 'cloud_with_lightning'
  | 'cloud_with_lightning_and_rain'
  | 'cloud_with_rain'
  | 'cloud_with_snow'
  | 'clown_face'
  | 'club_suit'
  | 'clutch_bag'
  | 'coat'
  | 'cockroach'
  | 'cocktail_glass'
  | 'coconut'
  | 'coffin'
  | 'coin'
  | 'cold_face'
  | 'collision'
  | 'comet'
  | 'compass'
  | 'computer_disk'
  | 'computer_mouse'
  | 'confetti_ball'
  | 'confounded_face'
  | 'confused_face'
  | 'construction'
  | 'construction_worker'
  | 'control_knobs'
  | 'convenience_store'
  | 'cook'
  | 'cooked_rice'
  | 'cookie'
  | 'cooking'
  | 'cool_button'
  | 'copyright'
  | 'coral'
  | 'couch_and_lamp'
  | 'counterclockwise_arrows_button'
  | 'couple_with_heart'
  | 'couple_with_heart_man_man'
  | 'couple_with_heart_woman_man'
  | 'couple_with_heart_woman_woman'
  | 'cow'
  | 'cow_face'
  | 'cowboy_hat_face'
  | 'crab'
  | 'crayon'
  | 'credit_card'
  | 'crescent_moon'
  | 'cricket'
  | 'cricket_game'
  | 'crocodile'
  | 'croissant'
  | 'cross_mark'
  | 'cross_mark_button'
  | 'crossed_fingers'
  | 'crossed_swords'
  | 'crown'
  | 'crutch'
  | 'crying_cat'
  | 'crying_face'
  | 'crystal_ball'
  | 'cucumber'
  | 'cup_with_straw'
  | 'cupcake'
  | 'curling_stone'
  | 'curly_hair'
  | 'curly_loop'
  | 'currency_exchange'
  | 'curry_rice'
  | 'custard'
  | 'customs'
  | 'cut_of_meat'
  | 'cyclone'
  | 'dagger'
  | 'dango'
  | 'dark_skin_tone'
  | 'dashing_away'
  | 'deaf_person'
  | 'deciduous_tree'
  | 'deer'
  | 'delivery_truck'
  | 'department_store'
  | 'derelict_house'
  | 'desert'
  | 'desert_island'
  | 'desktop_computer'
  | 'detective'
  | 'diamond_suit'
  | 'diamond_with_a_dot'
  | 'dim_button'
  | 'disappointed_face'
  | 'disguised_face'
  | 'divide'
  | 'diving_mask'
  | 'diya_lamp'
  | 'dizzy'
  | 'dna'
  | 'dodo'
  | 'dog'
  | 'dog_face'
  | 'dollar_banknote'
  | 'dolphin'
  | 'donkey'
  | 'door'
  | 'dotted_line_face'
  | 'dotted_six_pointed_star'
  | 'double_curly_loop'
  | 'double_exclamation_mark'
  | 'doughnut'
  | 'dove'
  | 'down_arrow'
  | 'down_left_arrow'
  | 'down_right_arrow'
  | 'downcast_face_with_sweat'
  | 'downwards_button'
  | 'dragon'
  | 'dragon_face'
  | 'dress'
  | 'drooling_face'
  | 'drop_of_blood'
  | 'droplet'
  | 'drum'
  | 'duck'
  | 'dumpling'
  | 'dvd'
  | 'e_mail'
  | 'eagle'
  | 'ear'
  | 'ear_of_corn'
  | 'ear_with_hearing_aid'
  | 'egg'
  | 'eggplant'
  | 'eight_oclock'
  | 'eight_pointed_star'
  | 'eight_spoked_asterisk'
  | 'eight_thirty'
  | 'eject_button'
  | 'electric_plug'
  | 'elephant'
  | 'elevator'
  | 'eleven_oclock'
  | 'eleven_thirty'
  | 'elf'
  | 'empty_nest'
  | 'end_arrow'
  | 'enraged_face'
  | 'envelope'
  | 'envelope_with_arrow'
  | 'euro_banknote'
  | 'evergreen_tree'
  | 'ewe'
  | 'exclamation_question_mark'
  | 'exploding_head'
  | 'expressionless_face'
  | 'eye'
  | 'eye_in_speech_bubble'
  | 'eyes'
  | 'face_blowing_a_kiss'
  | 'face_exhaling'
  | 'face_holding_back_tears'
  | 'face_in_clouds'
  | 'face_savoring_food'
  | 'face_screaming_in_fear'
  | 'face_vomiting'
  | 'face_with_crossed_out_eyes'
  | 'face_with_diagonal_mouth'
  | 'face_with_hand_over_mouth'
  | 'face_with_head_bandage'
  | 'face_with_medical_mask'
  | 'face_with_monocle'
  | 'face_with_open_eyes_and_hand_over_mouth'
  | 'face_with_open_mouth'
  | 'face_with_peeking_eye'
  | 'face_with_raised_eyebrow'
  | 'face_with_rolling_eyes'
  | 'face_with_spiral_eyes'
  | 'face_with_steam_from_nose'
  | 'face_with_symbols_on_mouth'
  | 'face_with_tears_of_joy'
  | 'face_with_thermometer'
  | 'face_with_tongue'
  | 'face_without_mouth'
  | 'factory'
  | 'factory_worker'
  | 'fairy'
  | 'falafel'
  | 'fallen_leaf'
  | 'family'
  | 'farmer'
  | 'fast_down_button'
  | 'fast_forward_button'
  | 'fast_reverse_button'
  | 'fast_up_button'
  | 'fax_machine'
  | 'fearful_face'
  | 'feather'
  | 'female_sign'
  | 'ferris_wheel'
  | 'ferry'
  | 'field_hockey'
  | 'file_cabinet'
  | 'file_folder'
  | 'film_frames'
  | 'film_projector'
  | 'fire'
  | 'fire_engine'
  | 'fire_extinguisher'
  | 'firecracker'
  | 'firefighter'
  | 'fireworks'
  | 'first_place_medal'
  | 'first_quarter_moon'
  | 'first_quarter_moon_face'
  | 'fish'
  | 'fish_cake_with_swirl'
  | 'fishing_pole'
  | 'five_oclock'
  | 'five_thirty'
  | 'flag_in_hole'
  | 'flamingo'
  | 'flashlight'
  | 'flat_shoe'
  | 'flatbread'
  | 'fleur_de_lis'
  | 'flexed_biceps'
  | 'floppy_disk'
  | 'flower_playing_cards'
  | 'flushed_face'
  | 'flute'
  | 'fly'
  | 'flying_disc'
  | 'flying_saucer'
  | 'fog'
  | 'foggy'
  | 'folded_hands'
  | 'folding_hand_fan'
  | 'fondue'
  | 'foot'
  | 'footprints'
  | 'fork_and_knife'
  | 'fork_and_knife_with_plate'
  | 'fortune_cookie'
  | 'fountain'
  | 'fountain_pen'
  | 'four_leaf_clover'
  | 'four_oclock'
  | 'four_thirty'
  | 'fox'
  | 'framed_picture'
  | 'free_button'
  | 'french_fries'
  | 'fried_shrimp'
  | 'frog'
  | 'front_facing_baby_chick'
  | 'frowning_face'
  | 'frowning_face_with_open_mouth'
  | 'fuel_pump'
  | 'full_moon'
  | 'full_moon_face'
  | 'funeral_urn'
  | 'game_die'
  | 'garlic'
  | 'gear'
  | 'gem_stone'
  | 'gemini'
  | 'genie'
  | 'ghost'
  | 'ginger_root'
  | 'giraffe'
  | 'glass_of_milk'
  | 'glasses'
  | 'globe_showing_americas'
  | 'globe_showing_asia_australia'
  | 'globe_showing_europe_africa'
  | 'globe_with_meridians'
  | 'gloves'
  | 'glowing_star'
  | 'goal_net'
  | 'goat'
  | 'goblin'
  | 'goggles'
  | 'goose'
  | 'gorilla'
  | 'graduation_cap'
  | 'grapes'
  | 'green_apple'
  | 'green_book'
  | 'green_circle'
  | 'green_heart'
  | 'green_salad'
  | 'green_square'
  | 'grey_heart'
  | 'grimacing_face'
  | 'grinning_cat'
  | 'grinning_cat_with_smiling_eyes'
  | 'grinning_face'
  | 'grinning_face_with_big_eyes'
  | 'grinning_face_with_smiling_eyes'
  | 'grinning_face_with_sweat'
  | 'grinning_squinting_face'
  | 'growing_heart'
  | 'guard'
  | 'guide_dog'
  | 'guitar'
  | 'hair_pick'
  | 'hamburger'
  | 'hammer'
  | 'hammer_and_pick'
  | 'hammer_and_wrench'
  | 'hamsa'
  | 'hamster'
  | 'hand_with_fingers_splayed'
  | 'hand_with_index_finger_and_thumb_crossed'
  | 'handbag'
  | 'handshake'
  | 'hatching_chick'
  | 'headphone'
  | 'headstone'
  | 'health_worker'
  | 'hear_no_evil_monkey'
  | 'heart_decoration'
  | 'heart_exclamation'
  | 'heart_hands'
  | 'heart_on_fire'
  | 'heart_suit'
  | 'heart_with_arrow'
  | 'heart_with_ribbon'
  | 'heavy_dollar_sign'
  | 'heavy_equals_sign'
  | 'hedgehog'
  | 'helicopter'
  | 'herb'
  | 'hibiscus'
  | 'high_heeled_shoe'
  | 'high_speed_train'
  | 'high_voltage'
  | 'hiking_boot'
  | 'hindu_temple'
  | 'hippopotamus'
  | 'hole'
  | 'hollow_red_circle'
  | 'honey_pot'
  | 'honeybee'
  | 'hook'
  | 'horizontal_traffic_light'
  | 'horse'
  | 'horse_face'
  | 'horse_racing'
  | 'hospital'
  | 'hot_beverage'
  | 'hot_dog'
  | 'hot_face'
  | 'hot_pepper'
  | 'hot_springs'
  | 'hotel'
  | 'hourglass_done'
  | 'hourglass_not_done'
  | 'house'
  | 'house_with_garden'
  | 'houses'
  | 'hundred_points'
  | 'hushed_face'
  | 'hut'
  | 'hyacinth'
  | 'ice'
  | 'ice_cream'
  | 'ice_hockey'
  | 'ice_skate'
  | 'id_button'
  | 'identification_card'
  | 'inbox_tray'
  | 'incoming_envelope'
  | 'index_pointing_at_the_viewer'
  | 'index_pointing_up'
  | 'infinity'
  | 'information'
  | 'input_latin_letters'
  | 'input_latin_lowercase'
  | 'input_latin_uppercase'
  | 'input_numbers'
  | 'input_symbols'
  | 'jack_o_lantern'
  | 'japanese_acceptable_button'
  | 'japanese_application_button'
  | 'japanese_bargain_button'
  | 'japanese_castle'
  | 'japanese_congratulations_button'
  | 'japanese_discount_button'
  | 'japanese_dolls'
  | 'japanese_free_of_charge_button'
  | 'japanese_here_button'
  | 'japanese_monthly_amount_button'
  | 'japanese_no_vacancy_button'
  | 'japanese_not_free_of_charge_button'
  | 'japanese_open_for_business_button'
  | 'japanese_passing_grade_button'
  | 'japanese_post_office'
  | 'japanese_prohibited_button'
  | 'japanese_reserved_button'
  | 'japanese_secret_button'
  | 'japanese_service_charge_button'
  | 'japanese_symbol_for_beginner'
  | 'japanese_vacancy_button'
  | 'jar'
  | 'jeans'
  | 'jellyfish'
  | 'joker'
  | 'joystick'
  | 'judge'
  | 'kaaba'
  | 'kangaroo'
  | 'key'
  | 'keyboard'
  | 'keycap_*'
  | 'keycap_#'
  | 'keycap_0'
  | 'keycap_1'
  | 'keycap_10'
  | 'keycap_2'
  | 'keycap_3'
  | 'keycap_4'
  | 'keycap_5'
  | 'keycap_6'
  | 'keycap_7'
  | 'keycap_8'
  | 'keycap_9'
  | 'khanda'
  | 'kick_scooter'
  | 'kimono'
  | 'kiss'
  | 'kiss_man_man'
  | 'kiss_mark'
  | 'kiss_woman_man'
  | 'kiss_woman_woman'
  | 'kissing_cat'
  | 'kissing_face'
  | 'kissing_face_with_closed_eyes'
  | 'kissing_face_with_smiling_eyes'
  | 'kitchen_knife'
  | 'kite'
  | 'kiwi_fruit'
  | 'knot'
  | 'koala'
  | 'lab_coat'
  | 'label'
  | 'lacrosse'
  | 'ladder'
  | 'lady_beetle'
  | 'laptop'
  | 'large_blue_diamond'
  | 'large_orange_diamond'
  | 'last_quarter_moon'
  | 'last_quarter_moon_face'
  | 'last_track_button'
  | 'latin_cross'
  | 'leaf_fluttering_in_wind'
  | 'leafy_green'
  | 'ledger'
  | 'left_arrow'
  | 'left_arrow_curving_right'
  | 'left_facing_fist'
  | 'left_luggage'
  | 'left_right_arrow'
  | 'left_speech_bubble'
  | 'leftwards_hand'
  | 'leftwards_pushing_hand'
  | 'leg'
  | 'lemon'
  | 'leo'
  | 'leopard'
  | 'level_slider'
  | 'libra'
  | 'light_blue_heart'
  | 'light_bulb'
  | 'light_rail'
  | 'light_skin_tone'
  | 'link'
  | 'linked_paperclips'
  | 'lion'
  | 'lipstick'
  | 'litter_in_bin_sign'
  | 'lizard'
  | 'llama'
  | 'lobster'
  | 'locked'
  | 'locked_with_key'
  | 'locked_with_pen'
  | 'locomotive'
  | 'lollipop'
  | 'long_drum'
  | 'lotion_bottle'
  | 'lotus'
  | 'loudly_crying_face'
  | 'loudspeaker'
  | 'love_hotel'
  | 'love_letter'
  | 'love_you_gesture'
  | 'low_battery'
  | 'luggage'
  | 'lungs'
  | 'lying_face'
  | 'mage'
  | 'magic_wand'
  | 'magnet'
  | 'magnifying_glass_tilted_left'
  | 'magnifying_glass_tilted_right'
  | 'mahjong_red_dragon'
  | 'male_sign'
  | 'mammoth'
  | 'man_dancing'
  | 'mango'
  | 'mans_shoe'
  | 'mantelpiece_clock'
  | 'manual_wheelchair'
  | 'map_of_japan'
  | 'maple_leaf'
  | 'maracas'
  | 'martial_arts_uniform'
  | 'mate'
  | 'meat_on_bone'
  | 'mechanic'
  | 'mechanical_arm'
  | 'mechanical_leg'
  | 'medical_symbol'
  | 'medium_dark_skin_tone'
  | 'medium_light_skin_tone'
  | 'medium_skin_tone'
  | 'megaphone'
  | 'melon'
  | 'melting_face'
  | 'memo'
  | 'men_holding_hands'
  | 'mending_heart'
  | 'menorah'
  | 'mens_room'
  | 'merperson'
  | 'metro'
  | 'microbe'
  | 'microphone'
  | 'microscope'
  | 'middle_finger'
  | 'military_helmet'
  | 'military_medal'
  | 'milky_way'
  | 'minibus'
  | 'minus'
  | 'mirror'
  | 'mirror_ball'
  | 'moai'
  | 'mobile_phone'
  | 'mobile_phone_off'
  | 'mobile_phone_with_arrow'
  | 'money_bag'
  | 'money_mouth_face'
  | 'money_with_wings'
  | 'monkey'
  | 'monkey_face'
  | 'monorail'
  | 'moon_cake'
  | 'moon_viewing_ceremony'
  | 'moose'
  | 'mosque'
  | 'mosquito'
  | 'motor_boat'
  | 'motor_scooter'
  | 'motorcycle'
  | 'motorized_wheelchair'
  | 'motorway'
  | 'mount_fuji'
  | 'mountain'
  | 'mountain_cableway'
  | 'mountain_railway'
  | 'mouse'
  | 'mouse_face'
  | 'mouse_trap'
  | 'mouth'
  | 'movie_camera'
  | 'multiply'
  | 'mushroom'
  | 'musical_keyboard'
  | 'musical_note'
  | 'musical_notes'
  | 'musical_score'
  | 'muted_speaker'
  | 'mx_claus'
  | 'nail_polish'
  | 'name_badge'
  | 'national_park'
  | 'nauseated_face'
  | 'nazar_amulet'
  | 'necktie'
  | 'nerd_face'
  | 'nest_with_eggs'
  | 'nesting_dolls'
  | 'neutral_face'
  | 'new_button'
  | 'new_moon'
  | 'new_moon_face'
  | 'newspaper'
  | 'next_track_button'
  | 'ng_button'
  | 'night_with_stars'
  | 'nine_oclock'
  | 'nine_thirty'
  | 'ninja'
  | 'no_bicycles'
  | 'no_entry'
  | 'no_littering'
  | 'no_mobile_phones'
  | 'no_one_under_eighteen'
  | 'no_pedestrians'
  | 'no_smoking'
  | 'non_potable_water'
  | 'nose'
  | 'notebook'
  | 'notebook_with_decorative_cover'
  | 'nut_and_bolt'
  | 'o_button_blood_type'
  | 'octopus'
  | 'oden'
  | 'office_building'
  | 'office_worker'
  | 'ogre'
  | 'oil_drum'
  | 'ok_button'
  | 'ok_hand'
  | 'old_key'
  | 'older_person'
  | 'olive'
  | 'om'
  | 'on_arrow'
  | 'oncoming_automobile'
  | 'oncoming_bus'
  | 'oncoming_fist'
  | 'oncoming_police_car'
  | 'oncoming_taxi'
  | 'one_oclock'
  | 'one_piece_swimsuit'
  | 'one_thirty'
  | 'onion'
  | 'open_book'
  | 'open_file_folder'
  | 'open_hands'
  | 'open_mailbox_with_lowered_flag'
  | 'open_mailbox_with_raised_flag'
  | 'ophiuchus'
  | 'optical_disk'
  | 'orange_book'
  | 'orange_circle'
  | 'orange_heart'
  | 'orange_square'
  | 'orangutan'
  | 'orthodox_cross'
  | 'otter'
  | 'outbox_tray'
  | 'owl'
  | 'ox'
  | 'oyster'
  | 'p_button'
  | 'package'
  | 'page_facing_up'
  | 'page_with_curl'
  | 'pager'
  | 'paintbrush'
  | 'palm_down_hand'
  | 'palm_tree'
  | 'palm_up_hand'
  | 'palms_up_together'
  | 'pancakes'
  | 'panda'
  | 'paperclip'
  | 'parachute'
  | 'parrot'
  | 'part_alternation_mark'
  | 'party_popper'
  | 'partying_face'
  | 'passenger_ship'
  | 'passport_control'
  | 'pause_button'
  | 'paw_prints'
  | 'pea_pod'
  | 'peace_symbol'
  | 'peach'
  | 'peacock'
  | 'peanuts'
  | 'pear'
  | 'pen'
  | 'pencil'
  | 'penguin'
  | 'pensive_face'
  | 'people_holding_hands'
  | 'people_hugging'
  | 'people_with_bunny_ears'
  | 'people_wrestling'
  | 'performing_arts'
  | 'persevering_face'
  | 'person'
  | 'person_bald'
  | 'person_beard'
  | 'person_biking'
  | 'person_blond_hair'
  | 'person_bouncing_ball'
  | 'person_bowing'
  | 'person_cartwheeling'
  | 'person_climbing'
  | 'person_curly_hair'
  | 'person_facepalming'
  | 'person_feeding_baby'
  | 'person_fencing'
  | 'person_frowning'
  | 'person_gesturing_no'
  | 'person_gesturing_ok'
  | 'person_getting_haircut'
  | 'person_getting_massage'
  | 'person_golfing'
  | 'person_in_bed'
  | 'person_in_lotus_position'
  | 'person_in_manual_wheelchair'
  | 'person_in_motorized_wheelchair'
  | 'person_in_steamy_room'
  | 'person_in_suit_levitating'
  | 'person_in_tuxedo'
  | 'person_juggling'
  | 'person_kneeling'
  | 'person_lifting_weights'
  | 'person_mountain_biking'
  | 'person_playing_handball'
  | 'person_playing_water_polo'
  | 'person_pouting'
  | 'person_raising_hand'
  | 'person_red_hair'
  | 'person_rowing_boat'
  | 'person_running'
  | 'person_shrugging'
  | 'person_standing'
  | 'person_surfing'
  | 'person_swimming'
  | 'person_taking_bath'
  | 'person_tipping_hand'
  | 'person_walking'
  | 'person_wearing_turban'
  | 'person_white_hair'
  | 'person_with_crown'
  | 'person_with_skullcap'
  | 'person_with_veil'
  | 'person_with_white_cane'
  | 'petri_dish'
  | 'pick'
  | 'pickup_truck'
  | 'pie'
  | 'pig'
  | 'pig_face'
  | 'pig_nose'
  | 'pile_of_poo'
  | 'pill'
  | 'pilot'
  | 'pinched_fingers'
  | 'pinching_hand'
  | 'pine_decoration'
  | 'pineapple'
  | 'ping_pong'
  | 'pink_heart'
  | 'piñata'
  | 'pisces'
  | 'pizza'
  | 'placard'
  | 'place_of_worship'
  | 'play_button'
  | 'play_or_pause_button'
  | 'playground_slide'
  | 'pleading_face'
  | 'plunger'
  | 'plus'
  | 'polar_bear'
  | 'police_car'
  | 'police_car_light'
  | 'police_officer'
  | 'poodle'
  | 'pool_8_ball'
  | 'popcorn'
  | 'post_office'
  | 'postal_horn'
  | 'postbox'
  | 'pot_of_food'
  | 'potable_water'
  | 'potato'
  | 'potted_plant'
  | 'poultry_leg'
  | 'pound_banknote'
  | 'pouring_liquid'
  | 'pouting_cat'
  | 'prayer_beads'
  | 'pregnant_person'
  | 'pretzel'
  | 'printer'
  | 'prohibited'
  | 'purple_circle'
  | 'purple_heart'
  | 'purple_square'
  | 'purse'
  | 'pushpin'
  | 'puzzle_piece'
  | 'rabbit'
  | 'rabbit_face'
  | 'raccoon'
  | 'racing_car'
  | 'radio'
  | 'radio_button'
  | 'radioactive'
  | 'railway_car'
  | 'railway_track'
  | 'rainbow'
  | 'raised_back_of_hand'
  | 'raised_fist'
  | 'raised_hand'
  | 'raising_hands'
  | 'ram'
  | 'rat'
  | 'razor'
  | 'receipt'
  | 'record_button'
  | 'recycling_symbol'
  | 'red_apple'
  | 'red_circle'
  | 'red_envelope'
  | 'red_exclamation_mark'
  | 'red_hair'
  | 'red_heart'
  | 'red_paper_lantern'
  | 'red_question_mark'
  | 'red_square'
  | 'red_triangle_pointed_down'
  | 'red_triangle_pointed_up'
  | 'registered'
  | 'relieved_face'
  | 'reminder_ribbon'
  | 'repeat_button'
  | 'repeat_single_button'
  | 'rescue_workers_helmet'
  | 'restroom'
  | 'reverse_button'
  | 'revolving_hearts'
  | 'rhinoceros'
  | 'ribbon'
  | 'rice_ball'
  | 'rice_cracker'
  | 'right_anger_bubble'
  | 'right_arrow'
  | 'right_arrow_curving_down'
  | 'right_arrow_curving_left'
  | 'right_arrow_curving_up'
  | 'right_facing_fist'
  | 'rightwards_hand'
  | 'rightwards_pushing_hand'
  | 'ring'
  | 'ring_buoy'
  | 'ringed_planet'
  | 'roasted_sweet_potato'
  | 'robot'
  | 'rock'
  | 'rocket'
  | 'roll_of_paper'
  | 'rolled_up_newspaper'
  | 'roller_coaster'
  | 'roller_skate'
  | 'rolling_on_the_floor_laughing'
  | 'rooster'
  | 'rose'
  | 'rosette'
  | 'round_pushpin'
  | 'rugby_football'
  | 'running_shirt'
  | 'running_shoe'
  | 'sad_but_relieved_face'
  | 'safety_pin'
  | 'safety_vest'
  | 'sagittarius'
  | 'sailboat'
  | 'sake'
  | 'salt'
  | 'saluting_face'
  | 'sandwich'
  | 'sari'
  | 'satellite'
  | 'satellite_antenna'
  | 'sauropod'
  | 'saxophone'
  | 'scarf'
  | 'school'
  | 'scientist'
  | 'scissors'
  | 'scorpio'
  | 'scorpion'
  | 'screwdriver'
  | 'scroll'
  | 'seal'
  | 'seat'
  | 'second_place_medal'
  | 'see_no_evil_monkey'
  | 'seedling'
  | 'selfie'
  | 'service_dog'
  | 'seven_oclock'
  | 'seven_thirty'
  | 'sewing_needle'
  | 'shaking_face'
  | 'shallow_pan_of_food'
  | 'shamrock'
  | 'shark'
  | 'shaved_ice'
  | 'sheaf_of_rice'
  | 'shield'
  | 'shinto_shrine'
  | 'ship'
  | 'shooting_star'
  | 'shopping_bags'
  | 'shopping_cart'
  | 'shortcake'
  | 'shorts'
  | 'shower'
  | 'shrimp'
  | 'shuffle_tracks_button'
  | 'shushing_face'
  | 'sign_of_the_horns'
  | 'singer'
  | 'six_oclock'
  | 'six_thirty'
  | 'skateboard'
  | 'skier'
  | 'skis'
  | 'skull'
  | 'skull_and_crossbones'
  | 'skunk'
  | 'sled'
  | 'sleeping_face'
  | 'sleepy_face'
  | 'slightly_frowning_face'
  | 'slightly_smiling_face'
  | 'slot_machine'
  | 'sloth'
  | 'small_airplane'
  | 'small_blue_diamond'
  | 'small_orange_diamond'
  | 'smiling_cat_with_heart_eyes'
  | 'smiling_face'
  | 'smiling_face_with_halo'
  | 'smiling_face_with_heart_eyes'
  | 'smiling_face_with_hearts'
  | 'smiling_face_with_horns'
  | 'smiling_face_with_open_hands'
  | 'smiling_face_with_smiling_eyes'
  | 'smiling_face_with_sunglasses'
  | 'smiling_face_with_tear'
  | 'smirking_face'
  | 'snail'
  | 'snake'
  | 'sneezing_face'
  | 'snow_capped_mountain'
  | 'snowboarder'
  | 'snowflake'
  | 'snowman'
  | 'snowman_without_snow'
  | 'soap'
  | 'soccer_ball'
  | 'socks'
  | 'soft_ice_cream'
  | 'softball'
  | 'soon_arrow'
  | 'sos_button'
  | 'spade_suit'
  | 'spaghetti'
  | 'sparkle'
  | 'sparkler'
  | 'sparkles'
  | 'sparkling_heart'
  | 'speak_no_evil_monkey'
  | 'speaker_high_volume'
  | 'speaker_low_volume'
  | 'speaker_medium_volume'
  | 'speaking_head'
  | 'speech_balloon'
  | 'speedboat'
  | 'spider'
  | 'spider_web'
  | 'spiral_calendar'
  | 'spiral_notepad'
  | 'spiral_shell'
  | 'sponge'
  | 'spoon'
  | 'sport_utility_vehicle'
  | 'sports_medal'
  | 'spouting_whale'
  | 'squid'
  | 'squinting_face_with_tongue'
  | 'stadium'
  | 'star'
  | 'star_and_crescent'
  | 'star_of_david'
  | 'star_struck'
  | 'station'
  | 'statue_of_liberty'
  | 'steaming_bowl'
  | 'stethoscope'
  | 'stop_button'
  | 'stop_sign'
  | 'stopwatch'
  | 'straight_ruler'
  | 'strawberry'
  | 'student'
  | 'studio_microphone'
  | 'stuffed_flatbread'
  | 'sun'
  | 'sun_behind_cloud'
  | 'sun_behind_large_cloud'
  | 'sun_behind_rain_cloud'
  | 'sun_behind_small_cloud'
  | 'sun_with_face'
  | 'sunflower'
  | 'sunglasses'
  | 'sunrise'
  | 'sunrise_over_mountains'
  | 'sunset'
  | 'superhero'
  | 'supervillain'
  | 'sushi'
  | 'suspension_railway'
  | 'swan'
  | 'sweat_droplets'
  | 'synagogue'
  | 'syringe'
  | 't_rex'
  | 't_shirt'
  | 'taco'
  | 'takeout_box'
  | 'tamale'
  | 'tanabata_tree'
  | 'tangerine'
  | 'taurus'
  | 'taxi'
  | 'teacher'
  | 'teacup_without_handle'
  | 'teapot'
  | 'tear_off_calendar'
  | 'technologist'
  | 'teddy_bear'
  | 'telephone'
  | 'telephone_receiver'
  | 'telescope'
  | 'television'
  | 'ten_oclock'
  | 'ten_thirty'
  | 'tennis'
  | 'tent'
  | 'test_tube'
  | 'thermometer'
  | 'thinking_face'
  | 'third_place_medal'
  | 'thong_sandal'
  | 'thought_balloon'
  | 'thread'
  | 'three_oclock'
  | 'three_thirty'
  | 'thumbs_down'
  | 'thumbs_up'
  | 'ticket'
  | 'tiger'
  | 'tiger_face'
  | 'timer_clock'
  | 'tired_face'
  | 'toilet'
  | 'tokyo_tower'
  | 'tomato'
  | 'tongue'
  | 'toolbox'
  | 'tooth'
  | 'toothbrush'
  | 'top_arrow'
  | 'top_hat'
  | 'tornado'
  | 'trackball'
  | 'tractor'
  | 'trade_mark'
  | 'train'
  | 'tram'
  | 'tram_car'
  | 'transgender_symbol'
  | 'triangular_ruler'
  | 'trident_emblem'
  | 'troll'
  | 'trolleybus'
  | 'trophy'
  | 'tropical_drink'
  | 'tropical_fish'
  | 'trumpet'
  | 'tulip'
  | 'tumbler_glass'
  | 'turkey'
  | 'turtle'
  | 'twelve_oclock'
  | 'twelve_thirty'
  | 'two_hearts'
  | 'two_hump_camel'
  | 'two_oclock'
  | 'two_thirty'
  | 'umbrella'
  | 'umbrella_on_ground'
  | 'umbrella_with_rain_drops'
  | 'unamused_face'
  | 'unicorn'
  | 'unlocked'
  | 'up_arrow'
  | 'up_button'
  | 'up_down_arrow'
  | 'up_left_arrow'
  | 'up_right_arrow'
  | 'upside_down_face'
  | 'upwards_button'
  | 'vampire'
  | 'vertical_traffic_light'
  | 'vibration_mode'
  | 'victory_hand'
  | 'video_camera'
  | 'video_game'
  | 'videocassette'
  | 'violin'
  | 'virgo'
  | 'volcano'
  | 'volleyball'
  | 'vs_button'
  | 'vulcan_salute'
  | 'waffle'
  | 'waning_crescent_moon'
  | 'waning_gibbous_moon'
  | 'warning'
  | 'wastebasket'
  | 'watch'
  | 'water_buffalo'
  | 'water_closet'
  | 'water_pistol'
  | 'water_wave'
  | 'watermelon'
  | 'waving_hand'
  | 'wavy_dash'
  | 'waxing_crescent_moon'
  | 'waxing_gibbous_moon'
  | 'weary_cat'
  | 'weary_face'
  | 'wedding'
  | 'whale'
  | 'wheel'
  | 'wheel_of_dharma'
  | 'wheelchair_symbol'
  | 'white_cane'
  | 'white_circle'
  | 'white_exclamation_mark'
  | 'white_flower'
  | 'white_hair'
  | 'white_heart'
  | 'white_large_square'
  | 'white_medium_small_square'
  | 'white_medium_square'
  | 'white_question_mark'
  | 'white_small_square'
  | 'white_square_button'
  | 'wilted_flower'
  | 'wind_chime'
  | 'wind_face'
  | 'window'
  | 'wine_glass'
  | 'wing'
  | 'winking_face'
  | 'winking_face_with_tongue'
  | 'wireless'
  | 'wolf'
  | 'woman_and_man_holding_hands'
  | 'woman_dancing'
  | 'woman_with_headscarf'
  | 'womans_boot'
  | 'womans_clothes'
  | 'womans_hat'
  | 'womans_sandal'
  | 'women_holding_hands'
  | 'womens_room'
  | 'wood'
  | 'woozy_face'
  | 'world_map'
  | 'worm'
  | 'worried_face'
  | 'wrapped_gift'
  | 'wrench'
  | 'writing_hand'
  | 'x_ray'
  | 'yarn'
  | 'yawning_face'
  | 'yellow_circle'
  | 'yellow_heart'
  | 'yellow_square'
  | 'yen_banknote'
  | 'yin_yang'
  | 'yo_yo'
  | 'zany_face'
  | 'zebra'
  | 'zipper_mouth_face'
  | 'zombie'
  | 'zzz'
