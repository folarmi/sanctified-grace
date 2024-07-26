
import React from 'react';

const psalmsAndHymnsData = [
  {
    "category": "THE SPIRIT OF THE PSALMS",
    "hymns": [
      {
        "hymn_number": "1_1",
        "hymn_title": "How_blest_are_they_who_turn_to_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn1_1.pdf"
      },
      {
        "hymn_number": "1_2",
        "hymn_title": "I_once_despised_and_scorned_the_name",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn1_2.pdf"
      },
      {
        "hymn_number": "2_1",
        "hymn_title": "Though_sinners_boldly_join",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn2_1.pdf"
      },
      {
        "hymn_number": "2_2",
        "hymn_title": "O_wherefore_do_the_nations_rage",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn2_2.pdf"
      },
      {
        "hymn_number": "3",
        "hymn_title": "Thy_promise,_Lord,_is_perfect_peace",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn3.pdf"
      },
      {
        "hymn_number": "4_1",
        "hymn_title": "O_God_of_righteousness",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn4_1.pdf"
      },
      {
        "hymn_number": "4_2",
        "hymn_title": "Let_all_now_stand_in_awe",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn4_2.pdf"
      },
      {
        "hymn_number": "5",
        "hymn_title": "Lord,_in_the_morning_Thou_shalt_hear",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn5.pdf"
      },
      {
        "hymn_number": "6",
        "hymn_title": "Gently,_gently_lay_Thy_rod",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn6.pdf"
      },
      {
        "hymn_number": "7",
        "hymn_title": "Lord_my_God,_I_trust_in_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn7.pdf"
      },
      {
        "hymn_number": "8",
        "hymn_title": "O_Lord,_our_Lord,_how_high,_how_great",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn8.pdf"
      },
      {
        "hymn_number": "9",
        "hymn_title": "Sing_to_the_Lord,_Who_here_proclaims",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn9.pdf"
      },
      {
        "hymn_number": "10",
        "hymn_title": "Lord,_when_evil_times_hold_sway",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn10.pdf"
      },
      {
        "hymn_number": "11",
        "hymn_title": "In_the_Lord_I’ve_put_my_trust",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn11.pdf"
      },
      {
        "hymn_number": "12",
        "hymn_title": "Lord,_when_iniquities_abound",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn12.pdf"
      },
      {
        "hymn_number": "13_1",
        "hymn_title": "O_Lord,_at_times_my_heart_is_cold",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn13_1.pdf"
      },
      {
        "hymn_number": "13_2",
        "hymn_title": "How_long_wilt_Thou_conceal_Thy_face?",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn13_2.pdf"
      },
      {
        "hymn_number": "14",
        "hymn_title": "This_race_in_such_corruption",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn14.pdf"
      },
      {
        "hymn_number": "15",
        "hymn_title": "Lord_Jesus,_near_to_Thee_I’d_be",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn15.pdf"
      },
      {
        "hymn_number": "16",
        "hymn_title": "Preserve_me,_Lord,_in_time_of_need",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn16.pdf"
      },
      {
        "hymn_number": "17_1",
        "hymn_title": "Hear,_O_my_Lord,_regard_my_cry",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn17_1.pdf"
      },
      {
        "hymn_number": "17_2",
        "hymn_title": "What_sinners_value,_I_resign",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn17_2.pdf"
      },
      {
        "hymn_number": "18",
        "hymn_title": "Whom_should_we_love_like_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn18.pdf"
      },
      {
        "hymn_number": "19_1",
        "hymn_title": "The_heavens_declare_Thy_glory,_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn19_1.pdf"
      },
      {
        "hymn_number": "19_2",
        "hymn_title": "God’s_precepts_are_righteous_and_just",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn19_2.pdf"
      },
      {
        "hymn_number": "20",
        "hymn_title": "The_Lord_will_hear_when_troubles_come",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn20.pdf"
      },
      {
        "hymn_number": "21",
        "hymn_title": "When_pain_and_weakness_bowed_His_head",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn21.pdf"
      },
      {
        "hymn_number": "22_1",
        "hymn_title": "Now_let_our_mournful_songs_record",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn22_1.pdf"
      },
      {
        "hymn_number": "22_2",
        "hymn_title": "Such_grief_was_Thine,_such_deep_distress",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn22_2.pdf"
      },
      {
        "hymn_number": "22_3",
        "hymn_title": "Come,_ye_that_fear_the_Saviour",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn22_3.pdf"
      },
      {
        "hymn_number": "23_1",
        "hymn_title": "The_Lord’s_my_Shepherd,_I’ll_not_want",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn23_1.pdf"
      },
      {
        "hymn_number": "23_2",
        "hymn_title": "My_Shepherd_will_supply_my_need",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn23_2.pdf"
      },
      {
        "hymn_number": "23_3",
        "hymn_title": "My_Shepherd_is_the_Lord_Who_knows_my_needs",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn23_3.pdf"
      },
      {
        "hymn_number": "23_4",
        "hymn_title": "Jesus_the_good_Shepherd_is",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn23_4.pdf"
      },
      {
        "hymn_number": "23_5",
        "hymn_title": "The_Lord_my_Shepherd_is",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn23_5.pdf"
      },
      {
        "hymn_number": "24_1",
        "hymn_title": "The_spacious_earth_is_all_the_Lord’s",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn24_1.pdf"
      },
      {
        "hymn_number": "24_2",
        "hymn_title": "Our_Lord_is_risen_from_the_dead",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn24_2.pdf"
      },
      {
        "hymn_number": "25_1",
        "hymn_title": "I_lift_my_soul_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn25_1.pdf"
      },
      {
        "hymn_number": "25_2",
        "hymn_title": "Mine_eyes_and_my_desire",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn25_2.pdf"
      },
      {
        "hymn_number": "26",
        "hymn_title": "Lord,_I_delight_to_find_my_place",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn26.pdf"
      },
      {
        "hymn_number": "27",
        "hymn_title": "The_Lord_my_Saviour_is_my_light",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn27.pdf"
      },
      {
        "hymn_number": "28",
        "hymn_title": "Lord,_my_Rock,_to_Thee_I_prayed",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn28.pdf"
      },
      {
        "hymn_number": "29_1",
        "hymn_title": "Give_to_the_Lord,_ye_sons_of_fame",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn29_1.pdf"
      },
      {
        "hymn_number": "29_2",
        "hymn_title": "In_God’s_own_house_the_loftiest_praises_sing",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn29_2.pdf"
      },
      {
        "hymn_number": "30_1",
        "hymn_title": "I_will_extol_Thee,_Lord_on_high",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn30_1.pdf"
      },
      {
        "hymn_number": "30_2",
        "hymn_title": "I_will_extol_Thee,_Lord,_my_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn30_2.pdf"
      },
      {
        "hymn_number": "31_1",
        "hymn_title": "The_Saviour_Who_redeemed_our_souls",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn31_1.pdf"
      },
      {
        "hymn_number": "31_2",
        "hymn_title": "In_God_alone_we_put_our_trust",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn31_2.pdf"
      },
      {
        "hymn_number": "32_1",
        "hymn_title": "How_blest_are_we_if_God_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn32_1.pdf"
      },
      {
        "hymn_number": "32_2",
        "hymn_title": "How_blest_are_they_whose_trespass",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn32_2.pdf"
      },
      {
        "hymn_number": "32_3",
        "hymn_title": "Blessèd_are_they,_supremely_blest",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn32_3.pdf"
      },
      {
        "hymn_number": "33_1",
        "hymn_title": "Come,_ransomed_souls,_in_God_rejoice",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn33_1.pdf"
      },
      {
        "hymn_number": "33_2",
        "hymn_title": "Blest_is_the_church,_where_God_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn33_2.pdf"
      },
      {
        "hymn_number": "34",
        "hymn_title": "Through_all_the_changing_scenes_of_life",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn34.pdf"
      },
      {
        "hymn_number": "35_1",
        "hymn_title": "Behold_the_love,_the_generous_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn35_1.pdf"
      },
      {
        "hymn_number": "35_2",
        "hymn_title": "Plead_my_cause,_O_Lord,_I_pray",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn35_2.pdf"
      },
      {
        "hymn_number": "36_1",
        "hymn_title": "High_in_the_heavens,_eternal_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn36_1.pdf"
      },
      {
        "hymn_number": "36_2",
        "hymn_title": "Thy_mercy_and_Thy_Truth,_O_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn36_2.pdf"
      },
      {
        "hymn_number": "37_1",
        "hymn_title": "Why_should_I_so_fretful_be",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn37_1.pdf"
      },
      {
        "hymn_number": "37_2",
        "hymn_title": "O_Lord,_the_steps_of_all_Thy_saints",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn37_2.pdf"
      },
      {
        "hymn_number": "38_1",
        "hymn_title": "Rebuke_me_not_in_anger,_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn38_1.pdf"
      },
      {
        "hymn_number": "38_2",
        "hymn_title": "In_Thy_wrath_and_hot_displeasure",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn38_2.pdf"
      },
      {
        "hymn_number": "38_3",
        "hymn_title": "My_soul,_the_final_hour_will_come",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn38_3.pdf"
      },
      {
        "hymn_number": "39_1",
        "hymn_title": "When_tried,_O_Lord,_with_grief_and_woe",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn39_1.pdf"
      },
      {
        "hymn_number": "39_2",
        "hymn_title": "My_end,_Lord,_make_me_know",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn39_2.pdf"
      },
      {
        "hymn_number": "39_3",
        "hymn_title": "Almighty_Maker_of_my_frame",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn39_3.pdf"
      },
      {
        "hymn_number": "40_1",
        "hymn_title": "I_waited_for_the_Lord_my_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn40_1.pdf"
      },
      {
        "hymn_number": "40_2",
        "hymn_title": "The_offering_on_the_altar_burned",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn40_2.pdf"
      },
      {
        "hymn_number": "41",
        "hymn_title": "Happy_are_they_whose_tender_care",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn41.pdf"
      },
      {
        "hymn_number": "42_1",
        "hymn_title": "As_pants_the_hart_for_cooling_streams",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn42_1.pdf"
      },
      {
        "hymn_number": "42_2",
        "hymn_title": "As_pants_the_deer_for_streams_of_life",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn42_2.pdf"
      },
      {
        "hymn_number": "43_1",
        "hymn_title": "O_send_Thy_light_forth_and_Thy_Truth",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn43_1.pdf"
      },
      {
        "hymn_number": "43_2",
        "hymn_title": "O_Thou,_my_strength,_with_heart_oppressed",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn43_2.pdf"
      },
      {
        "hymn_number": "44_1",
        "hymn_title": "O_Lord,_we_have_heard,_for_the_Scriptures_have_told",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn44_1.pdf"
      },
      {
        "hymn_number": "44_2",
        "hymn_title": "The_battles_of_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn44_2.pdf"
      },
      {
        "hymn_number": "44_3",
        "hymn_title": "Arm_of_the_Lord,_awake,_awake!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn44_3.pdf"
      },
      {
        "hymn_number": "45_1",
        "hymn_title": "With_hearts_in_love_abounding",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn45_1.pdf"
      },
      {
        "hymn_number": "45_2",
        "hymn_title": "Hail,_mighty_Jesus!_how_divine",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn45_2.pdf"
      },
      {
        "hymn_number": "45_3",
        "hymn_title": "Now_be_my_heart_inspired_to_sing",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn45_3.pdf"
      },
      {
        "hymn_number": "45_4",
        "hymn_title": "Let_us_sing_the_King_Messiah",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn45_4.pdf"
      },
      {
        "hymn_number": "45_5",
        "hymn_title": "My_heart_is_full_of_Christ,_and_longs",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn45_5.pdf"
      },
      {
        "hymn_number": "46_1",
        "hymn_title": "God_is_the_refuge_of_His_saints",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn46_1.pdf"
      },
      {
        "hymn_number": "46_2",
        "hymn_title": "God_is_our_refuge_and_our_strength",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn46_2.pdf"
      },
      {
        "hymn_number": "47_1",
        "hymn_title": "Come,_praise_the_Lord_with_sacred_song",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn47_1.pdf"
      },
      {
        "hymn_number": "47_2",
        "hymn_title": "Glorious_is_the_Lord_Most_High",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn47_2.pdf"
      },
      {
        "hymn_number": "48_1",
        "hymn_title": "Great_is_the_Lord;_O_greatly_praise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn48_1.pdf"
      },
      {
        "hymn_number": "48_2",
        "hymn_title": "We_join_to_praise_our_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn48_2.pdf"
      },
      {
        "hymn_number": "49_1",
        "hymn_title": "Humble_us,_Lord,_before_Thy_Word",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn49_1.pdf"
      },
      {
        "hymn_number": "49_2",
        "hymn_title": "Let_all_the_listening_world_attend",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn49_2.pdf"
      },
      {
        "hymn_number": "49_3",
        "hymn_title": "Dust_to_dust_each_mortal_dies",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn49_3.pdf"
      },
      {
        "hymn_number": "50_1",
        "hymn_title": "The_God_of_glory_sends_His_summons_forth",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn50_1.pdf"
      },
      {
        "hymn_number": "50_2",
        "hymn_title": "The_mighty_God_has_spoken",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn50_2.pdf"
      },
      {
        "hymn_number": "50_3",
        "hymn_title": "The_mighty_God,_the_Lord,_has_called",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn50_3.pdf"
      },
      {
        "hymn_number": "51_1",
        "hymn_title": "God_be_merciful_to_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn51_1.pdf"
      },
      {
        "hymn_number": "51_2",
        "hymn_title": "God_of_unfathomable_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn51_2.pdf"
      },
      {
        "hymn_number": "51_3",
        "hymn_title": "Look_upon_me,_O_Lord,_forgive",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn51_3.pdf"
      },
      {
        "hymn_number": "51_4",
        "hymn_title": "Lord,_I_am_vile,_conceived_in_sin",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn51_4.pdf"
      },
      {
        "hymn_number": "51_5",
        "hymn_title": "O_Thou_Who_hears_when_sinners_cry",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn51_5.pdf"
      },
      {
        "hymn_number": "52_1",
        "hymn_title": "In_vain_the_powers_of_darkness_try",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn52_1.pdf"
      },
      {
        "hymn_number": "52_2",
        "hymn_title": "Is_there_glory_found_in_cunning",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn52_2.pdf"
      },
      {
        "hymn_number": "53",
        "hymn_title": "Fools_in_their_hearts_still_say",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn53.pdf"
      },
      {
        "hymn_number": "54",
        "hymn_title": "Save_me_by_Thy_glorious_name",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn54.pdf"
      },
      {
        "hymn_number": "55",
        "hymn_title": "O_God,_my_refuge,_hear_my_cries",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn55.pdf"
      },
      {
        "hymn_number": "56",
        "hymn_title": "God_counts_the_sorrows_of_His_saints",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn56.pdf"
      },
      {
        "hymn_number": "57",
        "hymn_title": "My_God,_in_Whom_are_all_the_springs",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn57.pdf"
      },
      {
        "hymn_number": "58",
        "hymn_title": "Rulers_who_make_themselves_as_gods",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn58.pdf"
      },
      {
        "hymn_number": "59",
        "hymn_title": "I_am_hated,_Lord,_by_those",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn59.pdf"
      },
      {
        "hymn_number": "60",
        "hymn_title": "In_times_of_weakness_and_of_blight",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn60.pdf"
      },
      {
        "hymn_number": "61",
        "hymn_title": "When_overwhelmed_with_grief",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn61.pdf"
      },
      {
        "hymn_number": "62_1",
        "hymn_title": "When_dangers_press_and_fears_invade",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn62_1.pdf"
      },
      {
        "hymn_number": "62_2",
        "hymn_title": "My_spirit_looks_to_God_alone",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn62_2.pdf"
      },
      {
        "hymn_number": "63_1",
        "hymn_title": "Early,_my_God,_without_delay",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn63_1.pdf"
      },
      {
        "hymn_number": "63_2",
        "hymn_title": "O_God,_Thou_art_my_God_alone",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn63_2.pdf"
      },
      {
        "hymn_number": "64",
        "hymn_title": "Hear,_O_Lord,_our_supplication",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn64.pdf"
      },
      {
        "hymn_number": "65",
        "hymn_title": "Praise,_Lord,_for_Thee,_in_Zion_waits",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn65.pdf"
      },
      {
        "hymn_number": "66_1",
        "hymn_title": "Let_all_the_earth_revere_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn66_1.pdf"
      },
      {
        "hymn_number": "66_2",
        "hymn_title": "All_thanks_to_the_Lamb,_Who_calls_us_to_meet!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn66_2.pdf"
      },
      {
        "hymn_number": "67",
        "hymn_title": "God_of_mercy,_God_of_grace",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn67.pdf"
      },
      {
        "hymn_number": "68",
        "hymn_title": "As_Thy_chosen_people,_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn68.pdf"
      },
      {
        "hymn_number": "69_1",
        "hymn_title": "Lord,_I_would_stand_with_thoughtful_eye",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn69_1.pdf"
      },
      {
        "hymn_number": "69_2",
        "hymn_title": "Come,_let_us_join_with_reverent_fear",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn69_2.pdf"
      },
      {
        "hymn_number": "70_1",
        "hymn_title": "Come,_O_our_God,_our_souls_to_bless",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn70_1.pdf"
      },
      {
        "hymn_number": "70_2",
        "hymn_title": "O_hasten,_Lord,_my_soul_to_bless",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn70_2.pdf"
      },
      {
        "hymn_number": "71_1",
        "hymn_title": "My_Saviour_and_almighty_Friend",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn71_1.pdf"
      },
      {
        "hymn_number": "71_2",
        "hymn_title": "Almighty_Father_of_mankind",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn71_2.pdf"
      },
      {
        "hymn_number": "72_1",
        "hymn_title": "Jesus_shall_reign_where’er_the_sun",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn72_1.pdf"
      },
      {
        "hymn_number": "72_2",
        "hymn_title": "Hail_to_the_Lord’s_Anointed",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn72_2.pdf"
      },
      {
        "hymn_number": "72_3",
        "hymn_title": "Hasten,_Lord,_the_glorious_time",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn72_3.pdf"
      },
      {
        "hymn_number": "73_1",
        "hymn_title": "Lord,_what_a_thoughtless_wretch_was_I",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn73_1.pdf"
      },
      {
        "hymn_number": "73_2",
        "hymn_title": "In_close_communion,_Lord,_with_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn73_2.pdf"
      },
      {
        "hymn_number": "74_1",
        "hymn_title": "How_long,_eternal_God,_how_long",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn74_1.pdf"
      },
      {
        "hymn_number": "74_2",
        "hymn_title": "O_Lord_our_God,_arise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn74_2.pdf"
      },
      {
        "hymn_number": "75",
        "hymn_title": "That_God_the_Lord_is_ever_nigh",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn75.pdf"
      },
      {
        "hymn_number": "76_1",
        "hymn_title": "Among_His_people,_God_is_known",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn76_1.pdf"
      },
      {
        "hymn_number": "76_2",
        "hymn_title": "In_Judah_God_of_old_was_known",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn76_2.pdf"
      },
      {
        "hymn_number": "77_1",
        "hymn_title": "To_God_will_I_direct_my_prayer",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn77_1.pdf"
      },
      {
        "hymn_number": "77_2",
        "hymn_title": "Has_God_cast_off_for_ever?",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn77_2.pdf"
      },
      {
        "hymn_number": "78_1",
        "hymn_title": "O_praise_our_great_and_gracious_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn78_1.pdf"
      },
      {
        "hymn_number": "78_2",
        "hymn_title": "Give_ear_to_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn78_2.pdf"
      },
      {
        "hymn_number": "79",
        "hymn_title": "Thou_gracious_God,_and_kind",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn79.pdf"
      },
      {
        "hymn_number": "80_1",
        "hymn_title": "O_Shepherd_of_the_church,_give_ear",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn80_1.pdf"
      },
      {
        "hymn_number": "80_2",
        "hymn_title": "Saviour,_visit_Thy_plantation",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn80_2.pdf"
      },
      {
        "hymn_number": "81",
        "hymn_title": "Jesus,_Lord,_our_strength_and_Saviour",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn81.pdf"
      },
      {
        "hymn_number": "82",
        "hymn_title": "The_kings_of_earth_are_in_the_hands",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn82.pdf"
      },
      {
        "hymn_number": "83",
        "hymn_title": "Speak_in_Thy_power,_our_mighty_God!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn83.pdf"
      },
      {
        "hymn_number": "84_1",
        "hymn_title": "How_honoured,_how_dear",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn84_1.pdf"
      },
      {
        "hymn_number": "84_2",
        "hymn_title": "Lord_of_the_worlds_above",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn84_2.pdf"
      },
      {
        "hymn_number": "84_3",
        "hymn_title": "My_soul,_how_lovely_is_the_place",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn84_3.pdf"
      },
      {
        "hymn_number": "84_4",
        "hymn_title": "How_lovely_are_Thy_dwellings_fair",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn84_4.pdf"
      },
      {
        "hymn_number": "85_1",
        "hymn_title": "Salvation_is_for_ever_nigh",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn85_1.pdf"
      },
      {
        "hymn_number": "85_2",
        "hymn_title": "What_God_th’Almighty_Lord_will_speak",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn85_2.pdf"
      },
      {
        "hymn_number": "86",
        "hymn_title": "To_my_humble_prayer",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn86.pdf"
      },
      {
        "hymn_number": "87_1",
        "hymn_title": "God_in_His_earthly_kingdom_lays",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn87_1.pdf"
      },
      {
        "hymn_number": "87_2",
        "hymn_title": "Glorious_things_of_thee_are_spoken",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn87_2.pdf"
      },
      {
        "hymn_number": "88",
        "hymn_title": "Lord_God_of_my_salvation",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn88.pdf"
      },
      {
        "hymn_number": "89_1",
        "hymn_title": "My_song_for_ever_shall_record",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn89_1.pdf"
      },
      {
        "hymn_number": "89_2",
        "hymn_title": "O_what_shall_I_do_my_Saviour_to_praise?",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn89_2.pdf"
      },
      {
        "hymn_number": "89_3",
        "hymn_title": "My_song_shall_be_of_mercy",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn89_3.pdf"
      },
      {
        "hymn_number": "90_1",
        "hymn_title": "Our_God,_our_help_in_ages_past",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn90_1.pdf"
      },
      {
        "hymn_number": "90_2",
        "hymn_title": "O_God_the_Rock_of_Ages",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn90_2.pdf"
      },
      {
        "hymn_number": "91_1",
        "hymn_title": "There_is_a_safe_and_secret_place",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn91_1.pdf"
      },
      {
        "hymn_number": "91_2",
        "hymn_title": "He_who_has_made_his_refuge_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn91_2.pdf"
      },
      {
        "hymn_number": "92",
        "hymn_title": "Sweet_is_the_work,_my_God,_my_King",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn92.pdf"
      },
      {
        "hymn_number": "93",
        "hymn_title": "The_Lord_of_glory_reigns;_He_reigns_on_high",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn93.pdf"
      },
      {
        "hymn_number": "94",
        "hymn_title": "Can_guilty_man,_indeed,_believe",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn94.pdf"
      },
      {
        "hymn_number": "95",
        "hymn_title": "Come,_let_our_voices_join_to_raise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn95.pdf"
      },
      {
        "hymn_number": "96",
        "hymn_title": "Sing_to_the_Lord_through_all_the_lands",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn96.pdf"
      },
      {
        "hymn_number": "97",
        "hymn_title": "He_reigns,_the_Lord,_the_Saviour_reigns!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn97.pdf"
      },
      {
        "hymn_number": "98_1",
        "hymn_title": "Joy_to_the_world!_the_Lord_is_come",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn98_1.pdf"
      },
      {
        "hymn_number": "98_2",
        "hymn_title": "Unto_God_our_Saviour",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn98_2.pdf"
      },
      {
        "hymn_number": "99",
        "hymn_title": "Revere_the_Lord_as_King",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn99.pdf"
      },
      {
        "hymn_number": "100",
        "hymn_title": "Before_Jehovah’s_awesome_throne",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn100.pdf"
      },
      {
        "hymn_number": "101",
        "hymn_title": "Lord,_when_I_lift_my_voice_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn101.pdf"
      },
      {
        "hymn_number": "102",
        "hymn_title": "Hear_me,_O_Lord,_nor_hide_Thy_face",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn102.pdf"
      },
      {
        "hymn_number": "103_1",
        "hymn_title": "My_soul,_repeat_His_praise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn103_1.pdf"
      },
      {
        "hymn_number": "103_2",
        "hymn_title": "O_bless_the_Lord,_my_soul!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn103_2.pdf"
      },
      {
        "hymn_number": "103_3",
        "hymn_title": "Praise,_my_soul,_the_King_of_Heaven",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn103_3.pdf"
      },
      {
        "hymn_number": "104_1",
        "hymn_title": "O_worship_the_King",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn104_1.pdf"
      },
      {
        "hymn_number": "104_2",
        "hymn_title": "Vast_are_Thy_works,_Almighty_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn104_2.pdf"
      },
      {
        "hymn_number": "104_3",
        "hymn_title": "Lord,_if_one_moment_Thou_Thy_face_shouldst_hide",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn104_3.pdf"
      },
      {
        "hymn_number": "105",
        "hymn_title": "Give_thanks_to_God,_invoke_His_name",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn105.pdf"
      },
      {
        "hymn_number": "106",
        "hymn_title": "God_of_eternal_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn106.pdf"
      },
      {
        "hymn_number": "107_1",
        "hymn_title": "O_give_thanks_unto_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn107_1.pdf"
      },
      {
        "hymn_number": "107_2",
        "hymn_title": "From_age_to_age_exalt_His_name",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn107_2.pdf"
      },
      {
        "hymn_number": "108",
        "hymn_title": "My_heart_is_fixed,_O_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn108.pdf"
      },
      {
        "hymn_number": "109",
        "hymn_title": "Stranger_and_pilgrim_here_below",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn109.pdf"
      },
      {
        "hymn_number": "110",
        "hymn_title": "Father,_Son_and_Holy_Spirit",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn110.pdf"
      },
      {
        "hymn_number": "111_1",
        "hymn_title": "Praise_the_Lord_with_exultation",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn111_1.pdf"
      },
      {
        "hymn_number": "111_2",
        "hymn_title": "With_all_my_heart_I’ll_praise_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn111_2.pdf"
      },
      {
        "hymn_number": "112",
        "hymn_title": "How_blest_are_they_who_fear_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn112.pdf"
      },
      {
        "hymn_number": "113",
        "hymn_title": "All_who_delight_to_serve_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn113.pdf"
      },
      {
        "hymn_number": "114",
        "hymn_title": "When_forth_from_Egypt’s_trembling_hand",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn114.pdf"
      },
      {
        "hymn_number": "115",
        "hymn_title": "Lord,_Thou_alone_art_merciful_and_true!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn115.pdf"
      },
      {
        "hymn_number": "116_1",
        "hymn_title": "I_love_the_Lord_Who_heard_my_cry",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn116_1.pdf"
      },
      {
        "hymn_number": "116_2",
        "hymn_title": "For_mercies_countless_as_the_sands",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn116_2.pdf"
      },
      {
        "hymn_number": "116_3",
        "hymn_title": "Redeemed_from_guilt,_redeemed_from_fears",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn116_3.pdf"
      },
      {
        "hymn_number": "116_4",
        "hymn_title": "What_shall_I_render_to_my_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn116_4.pdf"
      },
      {
        "hymn_number": "117_1",
        "hymn_title": "All_the_nations,_praise_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn117_1.pdf"
      },
      {
        "hymn_number": "117_2",
        "hymn_title": "From_all_that_dwell_below_the_skies",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn117_2.pdf"
      },
      {
        "hymn_number": "118_1",
        "hymn_title": "O_praise_the_Lord,_for_He_is_good",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn118_1.pdf"
      },
      {
        "hymn_number": "118_2",
        "hymn_title": "Behold_the_sure_foundation_stone",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn118_2.pdf"
      },
      {
        "hymn_number": "118_3",
        "hymn_title": "This_is_the_day_the_Lord_has_made",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn118_3.pdf"
      },
      {
        "hymn_number": "119_1",
        "hymn_title": "How_blest_are_they_who_keep_God’s_Word",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_1.pdf"
      },
      {
        "hymn_number": "119_2",
        "hymn_title": "How_shall_the_young_direct_their_way?",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_2.pdf"
      },
      {
        "hymn_number": "119_3",
        "hymn_title": "Thy_servant,_saved_by_Thee,_shall_live",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_3.pdf"
      },
      {
        "hymn_number": "119_4",
        "hymn_title": "My_soul_lies_cleaving_to_the_dust",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_4.pdf"
      },
      {
        "hymn_number": "119_5",
        "hymn_title": "Teach_me,_O_Lord,_Thy_way_of_Truth",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_5.pdf"
      },
      {
        "hymn_number": "119_6",
        "hymn_title": "May_Thy_mercies_rest_upon_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_6.pdf"
      },
      {
        "hymn_number": "119_7",
        "hymn_title": "Thou_art_my_portion,_O_my_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_7.pdf"
      },
      {
        "hymn_number": "119_8",
        "hymn_title": "O_how_I_love_Thy_holy_Word",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_8.pdf"
      },
      {
        "hymn_number": "119_9",
        "hymn_title": "My_life_was_fashioned_by_Thy_hand",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_9.pdf"
      },
      {
        "hymn_number": "119_10",
        "hymn_title": "For_ever,_Lord,_Thy_Word_shall_stand",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_10.pdf"
      },
      {
        "hymn_number": "119_11",
        "hymn_title": "Let_all_the_world’s_fair_writers_join",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_11.pdf"
      },
      {
        "hymn_number": "119_12",
        "hymn_title": "O_how_I_love_Thy_law",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_12.pdf"
      },
      {
        "hymn_number": "119_13",
        "hymn_title": "Vain_and_futile_are_the_thoughts",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_13.pdf"
      },
      {
        "hymn_number": "119_14",
        "hymn_title": "Deceit_and_falsehood_we_abhor",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_14.pdf"
      },
      {
        "hymn_number": "119_15",
        "hymn_title": "O_how_the_wonders_of_Thy_law",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_15.pdf"
      },
      {
        "hymn_number": "119_16",
        "hymn_title": "Consider_all_my_troubles,_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_16.pdf"
      },
      {
        "hymn_number": "119_17",
        "hymn_title": "They_hate_me,_Lord,_without_a_cause",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn119_17.pdf"
      },
      {
        "hymn_number": "120_1",
        "hymn_title": "In_trouble_and_distress_I_cry",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn120_1.pdf"
      },
      {
        "hymn_number": "120_2",
        "hymn_title": "Jesus!_how_my_heart_is_pained",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn120_2.pdf"
      },
      {
        "hymn_number": "121_1",
        "hymn_title": "Unto_the_hills_around_do_I_lift_up",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn121_1.pdf"
      },
      {
        "hymn_number": "121_2",
        "hymn_title": "Upward_I_lift_mine_eyes",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn121_2.pdf"
      },
      {
        "hymn_number": "122_1",
        "hymn_title": "How_pleased_and_blest_was_I",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn122_1.pdf"
      },
      {
        "hymn_number": "122_2",
        "hymn_title": "Our_special_day,_O_Lord,_has_come",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn122_2.pdf"
      },
      {
        "hymn_number": "123",
        "hymn_title": "Unto_Thee_I_lift_my_eyes",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn123.pdf"
      },
      {
        "hymn_number": "124",
        "hymn_title": "Had_not_the_Lord,_my_heart_may_cry",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn124.pdf"
      },
      {
        "hymn_number": "125",
        "hymn_title": "Who_in_the_Lord_confide",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn125.pdf"
      },
      {
        "hymn_number": "126",
        "hymn_title": "When_God_revealed_His_gracious_name",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn126.pdf"
      },
      {
        "hymn_number": "127",
        "hymn_title": "Vain_the_toiling_of_the_builder",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn127.pdf"
      },
      {
        "hymn_number": "128",
        "hymn_title": "How_blest_are_they_who_fear_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn128.pdf"
      },
      {
        "hymn_number": "129",
        "hymn_title": "Many_times_since_days_of_youth",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn129.pdf"
      },
      {
        "hymn_number": "130_1",
        "hymn_title": "Out_of_the_depths_I_cry_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn130_1.pdf"
      },
      {
        "hymn_number": "130_2",
        "hymn_title": "From_sorrow’s_depths_I_cry,_O_Lord,_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn130_2.pdf"
      },
      {
        "hymn_number": "131_1",
        "hymn_title": "Quiet,_Lord,_my_froward_heart",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn131_1.pdf"
      },
      {
        "hymn_number": "131_2",
        "hymn_title": "Lord,_if_Thou_Thy_grace_impart",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn131_2.pdf"
      },
      {
        "hymn_number": "132",
        "hymn_title": "Where_shall_we_go_to_seek_and_find",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn132.pdf"
      },
      {
        "hymn_number": "133_1",
        "hymn_title": "How_pleasant_here_to_see",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn133_1.pdf"
      },
      {
        "hymn_number": "133_2",
        "hymn_title": "How_beautiful_the_sight!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn133_2.pdf"
      },
      {
        "hymn_number": "133_3",
        "hymn_title": "When_all_are_sweetly_joined",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn133_3.pdf"
      },
      {
        "hymn_number": "134",
        "hymn_title": "Bless_the_Lord,_His_servants",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn134.pdf"
      },
      {
        "hymn_number": "135",
        "hymn_title": "Praise_ye_the_Lord,_exalt_His_name",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn135.pdf"
      },
      {
        "hymn_number": "136_1",
        "hymn_title": "Give_to_our_God_immortal_praise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn136_1.pdf"
      },
      {
        "hymn_number": "136_2",
        "hymn_title": "Give_thanks_to_God_Most_High",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn136_2.pdf"
      },
      {
        "hymn_number": "137_1",
        "hymn_title": "Arise,_despondent_saints",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn137_1.pdf"
      },
      {
        "hymn_number": "137_2",
        "hymn_title": "Far_from_my_heavenly_home",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn137_2.pdf"
      },
      {
        "hymn_number": "138",
        "hymn_title": "With_all_my_powers_of_heart_and_tongue",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn138.pdf"
      },
      {
        "hymn_number": "139_1",
        "hymn_title": "Lord,_Thou_hast_searched_and_seen_me_through",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn139_1.pdf"
      },
      {
        "hymn_number": "139_2",
        "hymn_title": "Lord,_Thou_hast_searched_me,_and_dost_know",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn139_2.pdf"
      },
      {
        "hymn_number": "139_3",
        "hymn_title": "All_that_I_am_I_owe_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn139_3.pdf"
      },
      {
        "hymn_number": "139_4",
        "hymn_title": "When_I_in_awe_and_wonder_stand",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn139_4.pdf"
      },
      {
        "hymn_number": "140",
        "hymn_title": "Believers,_like_their_Lord_of_old",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn140.pdf"
      },
      {
        "hymn_number": "141",
        "hymn_title": "O_Lord,_accept_my_prayers,_my_vows",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn141.pdf"
      },
      {
        "hymn_number": "142",
        "hymn_title": "I_cried_unto_the_Lord_my_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn142.pdf"
      },
      {
        "hymn_number": "143",
        "hymn_title": "When_Satan_my_accuser",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn143.pdf"
      },
      {
        "hymn_number": "144",
        "hymn_title": "Blest_be_the_Lord,_our_strength,_our_tower",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn144.pdf"
      },
      {
        "hymn_number": "145_1",
        "hymn_title": "O_Lord,_Thou_art_my_God_and_King",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn145_1.pdf"
      },
      {
        "hymn_number": "145_2",
        "hymn_title": "Long_as_I_live_I’ll_bless_Thy_name",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn145_2.pdf"
      },
      {
        "hymn_number": "146",
        "hymn_title": "I’ll_praise_my_Maker_while_I’ve_breath",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn146.pdf"
      },
      {
        "hymn_number": "147_1",
        "hymn_title": "O_praise_the_Lord,_’tis_good_to_raise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn147_1.pdf"
      },
      {
        "hymn_number": "147_2",
        "hymn_title": "Praise_ye_the_Lord;_’tis_good_to_raise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn147_2.pdf"
      },
      {
        "hymn_number": "148_1",
        "hymn_title": "Praise_the_Lord,_ye_heavens_adore_Him",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn148_1.pdf"
      },
      {
        "hymn_number": "148_2",
        "hymn_title": "Let_every_creature_join_and_sing",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn148_2.pdf"
      },
      {
        "hymn_number": "149_1",
        "hymn_title": "O_praise_ye_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn149_1.pdf"
      },
      {
        "hymn_number": "149_2",
        "hymn_title": "Prepare_a_new_song",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn149_2.pdf"
      },
      {
        "hymn_number": "150",
        "hymn_title": "O_praise_ye_the_Lord!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn150.pdf"
      }
    ]
  },
  {
    "category": "ADORATION OF THE TRIUNE GOD",
    "hymns": [
      {
        "hymn_number": "151",
        "hymn_title": "Come,_Thou_Almighty_King",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn151.pdf"
      },
      {
        "hymn_number": "152",
        "hymn_title": "We_give_immortal_praise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn152.pdf"
      },
      {
        "hymn_number": "153",
        "hymn_title": "Command_Thy_blessing_from_above",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn153.pdf"
      },
      {
        "hymn_number": "154",
        "hymn_title": "What_was_it,_O_our_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn154.pdf"
      },
      {
        "hymn_number": "155",
        "hymn_title": "To_Him_that_chose_us_first",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn155.pdf"
      },
      {
        "hymn_number": "156",
        "hymn_title": "Father_of_Heaven,_Whose_love_profound",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn156.pdf"
      },
      {
        "hymn_number": "157",
        "hymn_title": "God_is_in_His_temple",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn157.pdf"
      },
      {
        "hymn_number": "158",
        "hymn_title": "The_God_of_Abraham_praise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn158.pdf"
      }
    ]
  },
  {
    "category": "GOD THE FATHER − His Attributes and Perfection",
    "hymns": [
      {
        "hymn_number": "159",
        "hymn_title": "How_shall_I_praise_the_eternal_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn159.pdf"
      },
      {
        "hymn_number": "160",
        "hymn_title": "O_everlasting_Light",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn160.pdf"
      },
      {
        "hymn_number": "161",
        "hymn_title": "Begin_my_tongue_a_heavenly_theme",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn161.pdf"
      },
      {
        "hymn_number": "162",
        "hymn_title": "We_praise,_we_worship_Thee,_O_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn162.pdf"
      },
      {
        "hymn_number": "163",
        "hymn_title": "Great_God!_how_infinite_art_Thou!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn163.pdf"
      },
      {
        "hymn_number": "164",
        "hymn_title": "How_shall_I_sing_that_majesty",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn164.pdf"
      },
      {
        "hymn_number": "165",
        "hymn_title": "Eternal_Power!_Whose_high_abode",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn165.pdf"
      },
      {
        "hymn_number": "166",
        "hymn_title": "The_Lord_is_King!_lift_up_your_voice",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn166.pdf"
      },
      {
        "hymn_number": "167",
        "hymn_title": "Can_mortals_understand_or_find",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn167.pdf"
      },
      {
        "hymn_number": "168",
        "hymn_title": "Bright_the_vision_that_delighted",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn168.pdf"
      },
      {
        "hymn_number": "169",
        "hymn_title": "Holy,_holy,_holy,_Lord_God_Almighty!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn169.pdf"
      },
      {
        "hymn_number": "170",
        "hymn_title": "Wait,_O_my_soul,_your_Maker’s_will",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn170.pdf"
      },
      {
        "hymn_number": "171",
        "hymn_title": "Come,_humble_souls,_approach_your_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn171.pdf"
      },
      {
        "hymn_number": "172",
        "hymn_title": "Songs_of_praise_the_angels_sang",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn172.pdf"
      },
      {
        "hymn_number": "173",
        "hymn_title": "Great_God_of_wonders!_all_Thy_ways",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn173.pdf"
      },
      {
        "hymn_number": "174",
        "hymn_title": "O_Love_of_God,_how_strong_and_true!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn174.pdf"
      },
      {
        "hymn_number": "175",
        "hymn_title": "O_heavenly_King",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn175.pdf"
      },
      {
        "hymn_number": "176",
        "hymn_title": "Thy_mercy,_my_God,_is_the_theme_of_my_song",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn176.pdf"
      },
      {
        "hymn_number": "177",
        "hymn_title": "Praise,_everlasting_praise,_be_paid",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn177.pdf"
      },
      {
        "hymn_number": "178",
        "hymn_title": "Praise_to_the_Lord,_the_Almighty,_the_King_of_creation",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn178.pdf"
      },
      {
        "hymn_number": "179",
        "hymn_title": "‘Great_is_Thy_faithfulness,’_O_God_my_Father",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn179.pdf"
      },
      {
        "hymn_number": "180",
        "hymn_title": "O_what_matchless_condescension",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn180.pdf"
      }
    ]
  },
  {
    "category": "GOD THE FATHER − Creation and Providence",
    "hymns": [
      {
        "hymn_number": "181",
        "hymn_title": "I_sing_the_almighty_power_of_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn181.pdf"
      },
      {
        "hymn_number": "182",
        "hymn_title": "O_give_thanks_to_Him_Who_made",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn182.pdf"
      },
      {
        "hymn_number": "183",
        "hymn_title": "Hast_thou_not_known,_hast_thou_not_heard",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn183.pdf"
      },
      {
        "hymn_number": "184",
        "hymn_title": "All_praise_to_God_Who_reigns_above",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn184.pdf"
      },
      {
        "hymn_number": "185",
        "hymn_title": "Sovereign_Ruler_of_the_skies!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn185.pdf"
      },
      {
        "hymn_number": "186",
        "hymn_title": "When_all_Thy_mercies,_O_my_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn186.pdf"
      },
      {
        "hymn_number": "187",
        "hymn_title": "All_my_hope_on_God_is_founded",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn187.pdf"
      },
      {
        "hymn_number": "188",
        "hymn_title": "God_moves_in_a_mysterious_way",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn188.pdf"
      },
      {
        "hymn_number": "189",
        "hymn_title": "Now_thank_we_all_our_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn189.pdf"
      }
    ]
  },
  {
    "category": "THE LORD JESUS CHRIST − His Names and Titles",
    "hymns": [
      {
        "hymn_number": "190_1",
        "hymn_title": "Join_all_the_glorious_names_(Version_1)",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn190_1.pdf"
      },
      {
        "hymn_number": "190_2",
        "hymn_title": "Join_all_the_glorious_names_(Version_2)",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn190_2.pdf"
      },
      {
        "hymn_number": "191",
        "hymn_title": "Jesus!_the_name_high_over_all",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn191.pdf"
      },
      {
        "hymn_number": "192",
        "hymn_title": "At_the_name_of_Jesus",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn192.pdf"
      },
      {
        "hymn_number": "193",
        "hymn_title": "Light_of_the_world,_for_ever,_ever_shining",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn193.pdf"
      },
      {
        "hymn_number": "194",
        "hymn_title": "One_there_is,_above_all_others",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn194.pdf"
      },
      {
        "hymn_number": "195",
        "hymn_title": "I’ve_found_a_Friend,_O,_such_a_Friend!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn195.pdf"
      },
      {
        "hymn_number": "196",
        "hymn_title": "O_now,_my_soul,_forget_no_more",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn196.pdf"
      },
      {
        "hymn_number": "197",
        "hymn_title": "Come,_let_us_join_our_cheerful_songs",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn197.pdf"
      },
      {
        "hymn_number": "198",
        "hymn_title": "’Tis_the_Church_triumphant_singing",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn198.pdf"
      },
      {
        "hymn_number": "199",
        "hymn_title": "Glory_to_God_on_high!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn199.pdf"
      },
      {
        "hymn_number": "200",
        "hymn_title": "Christ,_Whose_glory_fills_the_skies",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn200.pdf"
      },
      {
        "hymn_number": "201",
        "hymn_title": "Thou_art_the_Way,_to_Thee_alone",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn201.pdf"
      },
      {
        "hymn_number": "202",
        "hymn_title": "How_sweet_the_name_of_Jesus_sounds",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn202.pdf"
      },
      {
        "hymn_number": "203",
        "hymn_title": "Thou_art_the_everlasting_Word",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn203.pdf"
      },
      {
        "hymn_number": "204",
        "hymn_title": "I’ve_found_the_pearl_of_greatest_price",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn204.pdf"
      }
    ]
  },
  {
    "category": "THE LORD JESUS CHRIST − Praise to the Saviour",
    "hymns": [
      {
        "hymn_number": "205",
        "hymn_title": "Awake,_my_soul,_in_joyful_lays",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn205.pdf"
      },
      {
        "hymn_number": "206",
        "hymn_title": "Immortal_honours_rest_on_Jesus’_head",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn206.pdf"
      },
      {
        "hymn_number": "207",
        "hymn_title": "Let_us_love_and_sing_and_wonder",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn207.pdf"
      },
      {
        "hymn_number": "208",
        "hymn_title": "Let_earth_and_Heaven_agree",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn208.pdf"
      },
      {
        "hymn_number": "209",
        "hymn_title": "Behold_the_glories_of_the_Lamb",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn209.pdf"
      },
      {
        "hymn_number": "210",
        "hymn_title": "Jesus,_and_shall_it_ever_be",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn210.pdf"
      },
      {
        "hymn_number": "211",
        "hymn_title": "Now_in_praise_let_us_arise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn211.pdf"
      },
      {
        "hymn_number": "212",
        "hymn_title": "Now_to_the_Lord_a_noble_song!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn212.pdf"
      },
      {
        "hymn_number": "213",
        "hymn_title": "’Tis_to_Thee_we_owe_allegiance",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn213.pdf"
      },
      {
        "hymn_number": "214",
        "hymn_title": "Sing_the_theme_of_Jesus’_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn214.pdf"
      },
      {
        "hymn_number": "215",
        "hymn_title": "Now_to_the_Lord,_Who_makes_us_know",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn215.pdf"
      },
      {
        "hymn_number": "216",
        "hymn_title": "O_for_a_thousand_tongues_to_sing",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn216.pdf"
      },
      {
        "hymn_number": "217",
        "hymn_title": "We_sing_the_praise_of_Him_Who_died",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn217.pdf"
      },
      {
        "hymn_number": "218",
        "hymn_title": "Let_Zion_in_her_songs_record",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn218.pdf"
      },
      {
        "hymn_number": "219",
        "hymn_title": "I_will_sing_the_wondrous_story",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn219.pdf"
      }
    ]
  },
  {
    "category": "THE LORD JESUS CHRIST − Deity and Incarnation",
    "hymns": [
      {
        "hymn_number": "220",
        "hymn_title": "Hark!_the_glad_sound,_the_Saviour_comes",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn220.pdf"
      },
      {
        "hymn_number": "221",
        "hymn_title": "Earth_was_waiting,_spent_and_restless",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn221.pdf"
      },
      {
        "hymn_number": "222",
        "hymn_title": "Angels_from_the_realms_of_glory",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn222.pdf"
      },
      {
        "hymn_number": "223",
        "hymn_title": "Let_us_all,_with_grateful_praises",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn223.pdf"
      },
      {
        "hymn_number": "224",
        "hymn_title": "Once_in_royal_David’s_city",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn224.pdf"
      },
      {
        "hymn_number": "225",
        "hymn_title": "The_race_that_long_in_darkness_pined",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn225.pdf"
      },
      {
        "hymn_number": "226",
        "hymn_title": "Christians,_awake!_salute_the_happy_morn",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn226.pdf"
      },
      {
        "hymn_number": "227",
        "hymn_title": "O_come,_all_ye_faithful",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn227.pdf"
      },
      {
        "hymn_number": "228",
        "hymn_title": "Ere_the_blue_heavens_were_stretched_abroad",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn228.pdf"
      },
      {
        "hymn_number": "229",
        "hymn_title": "Hark!_the_herald_angels_sing",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn229.pdf"
      },
      {
        "hymn_number": "230",
        "hymn_title": "Thou_Who_wast_rich_beyond_all_splendour",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn230.pdf"
      },
      {
        "hymn_number": "231",
        "hymn_title": "As_with_gladness_men_of_old",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn231.pdf"
      },
      {
        "hymn_number": "232",
        "hymn_title": "Bright_and_joyful_is_the_morn",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn232.pdf"
      },
      {
        "hymn_number": "233",
        "hymn_title": "All_my_heart_this_night_rejoices",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn233.pdf"
      },
      {
        "hymn_number": "234",
        "hymn_title": "Now_let_us_join_with_hearts_and_tongues",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn234.pdf"
      },
      {
        "hymn_number": "235",
        "hymn_title": "Let_earth_and_Heaven_combine",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn235.pdf"
      },
      {
        "hymn_number": "236",
        "hymn_title": "‘To_you_this_night_is_born_a_Child’",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn236.pdf"
      },
      {
        "hymn_number": "237",
        "hymn_title": "While_shepherds_watched_their_flocks_by_night",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn237.pdf"
      },
      {
        "hymn_number": "238",
        "hymn_title": "Mighty_God,_while_angels_bless_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn238.pdf"
      },
      {
        "hymn_number": "239",
        "hymn_title": "All_glory_to_God_in_the_sky",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn239.pdf"
      }
    ]
  },
  {
    "category": "THE LORD JESUS CHRIST − His Life on Earth",
    "hymns": [
      {
        "hymn_number": "240",
        "hymn_title": "We_saw_Thee_not_when_Thou_didst_come",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn240.pdf"
      },
      {
        "hymn_number": "241",
        "hymn_title": "When_the_Saviour_dwelt_below",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn241.pdf"
      },
      {
        "hymn_number": "242",
        "hymn_title": "My_dear_Redeemer_and_my_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn242.pdf"
      }
    ]
  },
  {
    "category": "THE LORD JESUS CHRIST − His Sufferings and Death",
    "hymns": [
      {
        "hymn_number": "243",
        "hymn_title": "When_I_survey_the_wondrous_cross",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn243.pdf"
      },
      {
        "hymn_number": "244",
        "hymn_title": "How_willing_was_Jesus_to_die",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn244.pdf"
      },
      {
        "hymn_number": "245",
        "hymn_title": "More_marred_than_any_man’s",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn245.pdf"
      },
      {
        "hymn_number": "246",
        "hymn_title": "‘Man_of_Sorrows!’_what_a_name",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn246.pdf"
      },
      {
        "hymn_number": "247",
        "hymn_title": "On_the_wings_of_faith_uprising",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn247.pdf"
      },
      {
        "hymn_number": "248",
        "hymn_title": "There_is_a_fountain_filled_with_blood",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn248.pdf"
      },
      {
        "hymn_number": "249",
        "hymn_title": "Many_woes_had_He_endured",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn249.pdf"
      },
      {
        "hymn_number": "250",
        "hymn_title": "Alas!_and_did_my_Saviour_bleed?",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn250.pdf"
      },
      {
        "hymn_number": "251",
        "hymn_title": "The_Son_of_God,_in_mighty_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn251.pdf"
      },
      {
        "hymn_number": "252",
        "hymn_title": "Hark!_the_voice_of_love_and_mercy",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn252.pdf"
      },
      {
        "hymn_number": "253",
        "hymn_title": "Extended_on_a_cursèd_tree",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn253.pdf"
      },
      {
        "hymn_number": "254",
        "hymn_title": "My_song_is_love_unknown",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn254.pdf"
      },
      {
        "hymn_number": "255",
        "hymn_title": "In_Jesus’_name,_with_one_accord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn255.pdf"
      },
      {
        "hymn_number": "256",
        "hymn_title": "Behold_the_amazing_sight!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn256.pdf"
      },
      {
        "hymn_number": "257",
        "hymn_title": "Awake,_my_soul,_and_rise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn257.pdf"
      },
      {
        "hymn_number": "258",
        "hymn_title": "O_perfect_life_of_love!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn258.pdf"
      },
      {
        "hymn_number": "259",
        "hymn_title": "We_wonder_at_the_works_of_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn259.pdf"
      },
      {
        "hymn_number": "260",
        "hymn_title": "Give_me_a_sight,_O_Saviour",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn260.pdf"
      },
      {
        "hymn_number": "261",
        "hymn_title": "Well_we_speak_of_Jesus’_blood",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn261.pdf"
      },
      {
        "hymn_number": "262",
        "hymn_title": "O_sacred_head!_once_wounded",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn262.pdf"
      },
      {
        "hymn_number": "263",
        "hymn_title": "Plunged_in_a_gulf_of_dark_despair",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn263.pdf"
      },
      {
        "hymn_number": "264",
        "hymn_title": "There_is_a_green_hill_far_away",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn264.pdf"
      },
      {
        "hymn_number": "265",
        "hymn_title": "Nature_with_open_volume_stands",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn265.pdf"
      },
      {
        "hymn_number": "266",
        "hymn_title": "Sweet_the_moments,_rich_in_blessing",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn266.pdf"
      },
      {
        "hymn_number": "267",
        "hymn_title": "To_Calvary,_Lord,_in_spirit_now",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn267.pdf"
      }
    ]
  },
  {
    "category": "THE LORD JESUS CHRIST − His Resurrection and Ascension",
    "hymns": [
      {
        "hymn_number": "268",
        "hymn_title": "‘Christ_the_Lord_is_risen_today!’",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn268.pdf"
      },
      {
        "hymn_number": "269",
        "hymn_title": "O_humble_souls_who_seek_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn269.pdf"
      },
      {
        "hymn_number": "270",
        "hymn_title": "God_is_gone_up_on_high",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn270.pdf"
      },
      {
        "hymn_number": "271",
        "hymn_title": "Christ_Jesus_lay_in_death’s_strong_bands",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn271.pdf"
      },
      {
        "hymn_number": "272",
        "hymn_title": "The_golden_gates_are_lifted_up",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn272.pdf"
      },
      {
        "hymn_number": "273",
        "hymn_title": "Our_great_Redeemer_rose",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn273.pdf"
      },
      {
        "hymn_number": "274",
        "hymn_title": "Hail_the_day_that_sees_Him_rise,",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn274.pdf"
      },
      {
        "hymn_number": "275",
        "hymn_title": "O_praise_the_risen_Prince_of_Light",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn275.pdf"
      },
      {
        "hymn_number": "276",
        "hymn_title": "Heavenly_choirs_are_sounding",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn276.pdf"
      },
      {
        "hymn_number": "277",
        "hymn_title": "The_happy_morn_is_come",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn277.pdf"
      },
      {
        "hymn_number": "278",
        "hymn_title": "Jesus_lives!_thy_terrors_now",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn278.pdf"
      }
    ]
  },
  {
    "category": "THE LORD JESUS CHRIST − Jesus Reigning in Heaven",
    "hymns": [
      {
        "hymn_number": "279",
        "hymn_title": "Look,_ye_saints,_the_sight_is_glorious",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn279.pdf"
      },
      {
        "hymn_number": "280",
        "hymn_title": "O_the_delights,_the_heavenly_joys",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn280.pdf"
      },
      {
        "hymn_number": "281",
        "hymn_title": "Rejoice!_the_Lord_is_King",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn281.pdf"
      },
      {
        "hymn_number": "282",
        "hymn_title": "Now_let_our_cheerful_eyes_survey",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn282.pdf"
      },
      {
        "hymn_number": "283",
        "hymn_title": "The_head_that_once_was_crowned_with_thorns",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn283.pdf"
      },
      {
        "hymn_number": "284",
        "hymn_title": "Lamb_of_God,_Who_now_art_seated",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn284.pdf"
      },
      {
        "hymn_number": "285",
        "hymn_title": "Hail!_Thou_once_despisèd_Jesus",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn285.pdf"
      },
      {
        "hymn_number": "286",
        "hymn_title": "Come,_every_thankful_heart",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn286.pdf"
      },
      {
        "hymn_number": "287",
        "hymn_title": "Before_the_throne_of_God_above",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn287.pdf"
      },
      {
        "hymn_number": "288",
        "hymn_title": "Crown_Him_with_many_crowns",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn288.pdf"
      },
      {
        "hymn_number": "289",
        "hymn_title": "Come,_let_us_sing_the_song_of_songs",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn289.pdf"
      },
      {
        "hymn_number": "290",
        "hymn_title": "Ye_servants_of_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn290.pdf"
      },
      {
        "hymn_number": "291",
        "hymn_title": "Rejoice,_the_Saviour_reigns",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn291.pdf"
      },
      {
        "hymn_number": "292",
        "hymn_title": "He_Who_on_earth_as_man_was_known",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn292.pdf"
      },
      {
        "hymn_number": "293",
        "hymn_title": "Where_high_the_heavenly_temple_stands",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn293.pdf"
      },
      {
        "hymn_number": "294",
        "hymn_title": "With_joy_we_meditate_the_grace",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn294.pdf"
      }
    ]
  },
  {
    "category": "THE LORD JESUS CHRIST − His Second Advent and the Final Judgement",
    "hymns": [
      {
        "hymn_number": "295",
        "hymn_title": "Lo!_He_cometh!_countless_trumpets",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn295.pdf"
      },
      {
        "hymn_number": "296",
        "hymn_title": "Come,_Lord,_and_tarry_not",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn296.pdf"
      },
      {
        "hymn_number": "297",
        "hymn_title": "Lift_your_heads,_ye_friends_of_Jesus",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn297.pdf"
      },
      {
        "hymn_number": "298",
        "hymn_title": "Lo!_what_a_glorious_sight_appears",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn298.pdf"
      },
      {
        "hymn_number": "299",
        "hymn_title": "Thou_art_coming,_O_my_Saviour",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn299.pdf"
      },
      {
        "hymn_number": "300",
        "hymn_title": "The_Lord_shall_come!_the_earth_shall_quake",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn300.pdf"
      },
      {
        "hymn_number": "301",
        "hymn_title": "I_am_waiting_for_the_dawning",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn301.pdf"
      },
      {
        "hymn_number": "302",
        "hymn_title": "See_the_ransomed_millions_stand",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn302.pdf"
      },
      {
        "hymn_number": "303",
        "hymn_title": "Ten_thousand_times_ten_thousand",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn303.pdf"
      },
      {
        "hymn_number": "304",
        "hymn_title": "Day_of_judgement,_day_of_wonders",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn304.pdf"
      },
      {
        "hymn_number": "305",
        "hymn_title": "Lo!_He_comes_with_clouds_descending",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn305.pdf"
      },
      {
        "hymn_number": "306",
        "hymn_title": "Thou_Judge_of_quick_and_dead",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn306.pdf"
      },
      {
        "hymn_number": "307",
        "hymn_title": "Great_God,_what_do_I_see_and_hear!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn307.pdf"
      },
      {
        "hymn_number": "308",
        "hymn_title": "When_Thou,_my_righteous_Judge,_shalt_come",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn308.pdf"
      }
    ]
  },
  {
    "category": "THE HOLY SPIRIT",
    "hymns": [
      {
        "hymn_number": "309",
        "hymn_title": "Away_with_our_fears",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn309.pdf"
      },
      {
        "hymn_number": "310",
        "hymn_title": "Holy_Spirit!_pity_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn310.pdf"
      },
      {
        "hymn_number": "311",
        "hymn_title": "Lord_God_the_Holy_Ghost",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn311.pdf"
      },
      {
        "hymn_number": "312",
        "hymn_title": "Stay,_Thou_insulted_Spirit,_stay",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn312.pdf"
      },
      {
        "hymn_number": "313",
        "hymn_title": "Holy_Spirit,_from_on_high",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn313.pdf"
      },
      {
        "hymn_number": "314",
        "hymn_title": "O_Breath_of_God,_breathe_on_us_now",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn314.pdf"
      },
      {
        "hymn_number": "315",
        "hymn_title": "Come,_Holy_Ghost,_all-quickening_fire!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn315.pdf"
      },
      {
        "hymn_number": "316",
        "hymn_title": "Come_to_our_poor_nature’s_night",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn316.pdf"
      },
      {
        "hymn_number": "317",
        "hymn_title": "Spirit_divine,_attend_our_prayers",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn317.pdf"
      },
      {
        "hymn_number": "318",
        "hymn_title": "Come,_Holy_Spirit,_come",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn318.pdf"
      },
      {
        "hymn_number": "319",
        "hymn_title": "Come,_Holy_Spirit,_heavenly_Dove",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn319.pdf"
      },
      {
        "hymn_number": "320",
        "hymn_title": "Eternal_Spirit!_how_we_bless",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn320.pdf"
      },
      {
        "hymn_number": "321",
        "hymn_title": "Dear_Lord,_and_shall_Thy_Spirit_rest",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn321.pdf"
      },
      {
        "hymn_number": "322",
        "hymn_title": "Spirit_of_faith,_come_down",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn322.pdf"
      },
      {
        "hymn_number": "323",
        "hymn_title": "Creator_Spirit!_by_Whose_aid",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn323.pdf"
      },
      {
        "hymn_number": "324",
        "hymn_title": "Enthroned_on_high,_almighty_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn324.pdf"
      },
      {
        "hymn_number": "325",
        "hymn_title": "Come,_Holy_Ghost,_our_hearts_inspire",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn325.pdf"
      },
      {
        "hymn_number": "326",
        "hymn_title": "Come,_gracious_Spirit,_heavenly_Dove",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn326.pdf"
      },
      {
        "hymn_number": "327",
        "hymn_title": "O_Spirit_of_the_living_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn327.pdf"
      },
      {
        "hymn_number": "328",
        "hymn_title": "When_shall_I_hear_the_inward_voice",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn328.pdf"
      }
    ]
  },
  {
    "category": "THE HOLY SCRIPTURES",
    "hymns": [
      {
        "hymn_number": "329",
        "hymn_title": "Father_of_mercies,_in_Thy_Word",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn329.pdf"
      },
      {
        "hymn_number": "330",
        "hymn_title": "O_happy_is_the_man_who_hears",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn330.pdf"
      },
      {
        "hymn_number": "331",
        "hymn_title": "Lamp_of_our_feet,_whereby_we_trace",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn331.pdf"
      },
      {
        "hymn_number": "332",
        "hymn_title": "God,_in_the_Gospel_of_His_Son",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn332.pdf"
      },
      {
        "hymn_number": "333",
        "hymn_title": "Come,_Saviour_Christ,_our_only_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn333.pdf"
      },
      {
        "hymn_number": "334",
        "hymn_title": "The_Spirit_breathes_upon_the_Word",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn334.pdf"
      },
      {
        "hymn_number": "335",
        "hymn_title": "Break_Thou_the_Bread_of_Life",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn335.pdf"
      },
      {
        "hymn_number": "336",
        "hymn_title": "Inspirer_of_the_ancient_seers",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn336.pdf"
      },
      {
        "hymn_number": "337",
        "hymn_title": "The_volume_of_my_Father’s_grace",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn337.pdf"
      },
      {
        "hymn_number": "338",
        "hymn_title": "How_precious_is_the_book_divine",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn338.pdf"
      }
    ]
  },
  {
    "category": "THE GOSPEL CALL − Evangelism and Missions",
    "hymns": [
      {
        "hymn_number": "339",
        "hymn_title": "Now_may_the_Gospel’s_conquering_power",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn339.pdf"
      },
      {
        "hymn_number": "340",
        "hymn_title": "All_thanks_be_to_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn340.pdf"
      },
      {
        "hymn_number": "341",
        "hymn_title": "O_Christ,_our_true_and_only_Light",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn341.pdf"
      },
      {
        "hymn_number": "342",
        "hymn_title": "How_long_hast_Thou_bestowed_Thy_care",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn342.pdf"
      },
      {
        "hymn_number": "343",
        "hymn_title": "Revive_Thy_work,_O_Lord!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn343.pdf"
      },
      {
        "hymn_number": "344",
        "hymn_title": "Lord_of_the_reapers,_hear_our_lowly_pleading",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn344.pdf"
      },
      {
        "hymn_number": "345",
        "hymn_title": "The_Saviour_calls;_let_every_ear",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn345.pdf"
      },
      {
        "hymn_number": "346",
        "hymn_title": "Lord_of_the_harvest,_hear",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn346.pdf"
      },
      {
        "hymn_number": "347",
        "hymn_title": "Sow_in_the_morn_your_seed",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn347.pdf"
      },
      {
        "hymn_number": "348",
        "hymn_title": "Thy_presence,_gracious_God,_afford",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn348.pdf"
      },
      {
        "hymn_number": "349",
        "hymn_title": "Beside_the_Gospel_pool,",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn349.pdf"
      },
      {
        "hymn_number": "350",
        "hymn_title": "Here_at_the_Gospel_pool,_the_poor",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn350.pdf"
      },
      {
        "hymn_number": "351",
        "hymn_title": "Behold_the_mountain_of_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn351.pdf"
      },
      {
        "hymn_number": "352",
        "hymn_title": "Father_of_mercies,_bow_Thine_ear",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn352.pdf"
      },
      {
        "hymn_number": "353",
        "hymn_title": "Bless_Thy_servants,_Lord,_uphold_them",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn353.pdf"
      },
      {
        "hymn_number": "354",
        "hymn_title": "Sound,_sound_the_Truth_abroad",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn354.pdf"
      }
    ]
  },
  {
    "category": "THE GOSPEL CALL − The Pleadings of Grace",
    "hymns": [
      {
        "hymn_number": "355",
        "hymn_title": "Come,_ye_sinners,_poor_and_needy",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn355.pdf"
      },
      {
        "hymn_number": "356",
        "hymn_title": "Let_every_mortal_ear_attend",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn356.pdf"
      },
      {
        "hymn_number": "357",
        "hymn_title": "Come,_all_souls_by_sin_afflicted",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn357.pdf"
      },
      {
        "hymn_number": "358",
        "hymn_title": "‘Come_unto_Me,_ye_weary’",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn358.pdf"
      },
      {
        "hymn_number": "359",
        "hymn_title": "Seek_ye_first,_not_earthly_pleasure",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn359.pdf"
      },
      {
        "hymn_number": "360",
        "hymn_title": "Come_to_the_Saviour_now!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn360.pdf"
      }
    ]
  },
  {
    "category": "THE GOSPEL CALL − The Way of Grace Stated",
    "hymns": [
      {
        "hymn_number": "361",
        "hymn_title": "‘All_ye_that_pass_by’",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn361.pdf"
      },
      {
        "hymn_number": "362",
        "hymn_title": "How_sad_our_state_by_nature_is!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn362.pdf"
      },
      {
        "hymn_number": "363",
        "hymn_title": "Surely_Christ_our_griefs_has_borne",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn363.pdf"
      },
      {
        "hymn_number": "364",
        "hymn_title": "When_wounded_sore,_the_stricken_soul",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn364.pdf"
      },
      {
        "hymn_number": "365",
        "hymn_title": "‘Sinners_Jesus_will_receive’",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn365.pdf"
      },
      {
        "hymn_number": "366",
        "hymn_title": "Jesus,_Thy_message_speaks_within",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn366.pdf"
      },
      {
        "hymn_number": "367",
        "hymn_title": "Happy_the_man_who_finds_the_grace",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn367.pdf"
      },
      {
        "hymn_number": "368",
        "hymn_title": "The_sinner_that_truly_believes",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn368.pdf"
      },
      {
        "hymn_number": "369",
        "hymn_title": "Eternal_Light!_Eternal_Light!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn369.pdf"
      },
      {
        "hymn_number": "370",
        "hymn_title": "O_precious_words_that_Jesus_said!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn370.pdf"
      },
      {
        "hymn_number": "371",
        "hymn_title": "Our_heavenly_Father_calls",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn371.pdf"
      }
    ]
  },
  {
    "category": "THE GOSPEL CALL − Repentance and Faith",
    "hymns": [
      {
        "hymn_number": "372",
        "hymn_title": "Jesus,_lover_of_my_soul",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn372.pdf"
      },
      {
        "hymn_number": "373",
        "hymn_title": "Rock_of_Ages,_cleft_for_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn373.pdf"
      },
      {
        "hymn_number": "374",
        "hymn_title": "Approach,_my_soul,_the_mercy-seat",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn374.pdf"
      },
      {
        "hymn_number": "375",
        "hymn_title": "Heal_us,_Emmanuel!_we_are_here",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn375.pdf"
      },
      {
        "hymn_number": "376",
        "hymn_title": "Depth_of_mercy,_can_there_be",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn376.pdf"
      },
      {
        "hymn_number": "377",
        "hymn_title": "I_need_Thee_every_hour",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn377.pdf"
      },
      {
        "hymn_number": "378",
        "hymn_title": "With_broken_heart_and_contrite_sigh",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn378.pdf"
      },
      {
        "hymn_number": "379",
        "hymn_title": "Lord,_I_confess_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn379.pdf"
      },
      {
        "hymn_number": "380",
        "hymn_title": "O_Thou_Who_hast_redeemed_of_old",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn380.pdf"
      },
      {
        "hymn_number": "381",
        "hymn_title": "Come,_my_soul,_your_plea_prepare",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn381.pdf"
      },
      {
        "hymn_number": "382",
        "hymn_title": "O_the_bitter_shame_and_sorrow",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn382.pdf"
      },
      {
        "hymn_number": "383",
        "hymn_title": "God_made_me_for_Himself,_to_serve_Him_here",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn383.pdf"
      },
      {
        "hymn_number": "384",
        "hymn_title": "To_whom,_Lord,_shall_we_go",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn384.pdf"
      },
      {
        "hymn_number": "385",
        "hymn_title": "Out_of_my_bondage,_sorrow,_and_night",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn385.pdf"
      },
      {
        "hymn_number": "386",
        "hymn_title": "Jesus,_my_All,_to_Heaven_is_gone",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn386.pdf"
      },
      {
        "hymn_number": "387",
        "hymn_title": "Beneath_the_cross_of_Jesus",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn387.pdf"
      },
      {
        "hymn_number": "388",
        "hymn_title": "Thou_God_of_glorious_majesty",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn388.pdf"
      },
      {
        "hymn_number": "389",
        "hymn_title": "Just_as_I_am—without_one_plea",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn389.pdf"
      },
      {
        "hymn_number": "390",
        "hymn_title": "Lord,_I_was_blind,_I_could_not_see",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn390.pdf"
      },
      {
        "hymn_number": "391",
        "hymn_title": "Not_what_these_hands_have_done",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn391.pdf"
      },
      {
        "hymn_number": "392",
        "hymn_title": "With_glorious_clouds_encompassed_round",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn392.pdf"
      },
      {
        "hymn_number": "393",
        "hymn_title": "I_am_trusting_Thee,_Lord_Jesus",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn393.pdf"
      },
      {
        "hymn_number": "394",
        "hymn_title": "Come,_let_us_to_the_Lord_our_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn394.pdf"
      },
      {
        "hymn_number": "395",
        "hymn_title": "Loosed_from_my_God,_and_far_removed",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn395.pdf"
      },
      {
        "hymn_number": "396",
        "hymn_title": "Jesus,_I_will_trust_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn396.pdf"
      },
      {
        "hymn_number": "397",
        "hymn_title": "O_my_Saviour,_lifted",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn397.pdf"
      },
      {
        "hymn_number": "398",
        "hymn_title": "O_teach_me_what_it_meaneth",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn398.pdf"
      },
      {
        "hymn_number": "399",
        "hymn_title": "Jesus,_the_sinner’s_Friend,_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn399.pdf"
      },
      {
        "hymn_number": "400",
        "hymn_title": "Weary_of_earth,_and_laden_with_my_sin",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn400.pdf"
      },
      {
        "hymn_number": "401",
        "hymn_title": "My_faith_looks_up_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn401.pdf"
      },
      {
        "hymn_number": "402",
        "hymn_title": "I_thought_that_I_was_strong,_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn402.pdf"
      },
      {
        "hymn_number": "403",
        "hymn_title": "O_Jesus,_full_of_truth_and_grace",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn403.pdf"
      },
      {
        "hymn_number": "404",
        "hymn_title": "I_bring_my_sins_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn404.pdf"
      },
      {
        "hymn_number": "405",
        "hymn_title": "Hear,_gracious_God,_a_sinner’s_cry!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn405.pdf"
      },
      {
        "hymn_number": "406",
        "hymn_title": "Great_God,_when_I_approach_Thy_throne",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn406.pdf"
      },
      {
        "hymn_number": "407",
        "hymn_title": "Jesus!_Redeemer,_Saviour,_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn407.pdf"
      },
      {
        "hymn_number": "408",
        "hymn_title": "I_hear_Thy_welcome_voice",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn408.pdf"
      },
      {
        "hymn_number": "409",
        "hymn_title": "Not_all_the_blood_of_beasts",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn409.pdf"
      },
      {
        "hymn_number": "410",
        "hymn_title": "Jesus,_if_Thou_art_still_today",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn410.pdf"
      },
      {
        "hymn_number": "411",
        "hymn_title": "O_for_a_glance_of_heavenly_day",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn411.pdf"
      },
      {
        "hymn_number": "412",
        "hymn_title": "Come,_O_Thou_all-victorious_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn412.pdf"
      },
      {
        "hymn_number": "413",
        "hymn_title": "Infinite_grief!_amazing_woe!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn413.pdf"
      },
      {
        "hymn_number": "414",
        "hymn_title": "O_Saviour,_I_have_nought_to_plead",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn414.pdf"
      },
      {
        "hymn_number": "415",
        "hymn_title": "Thou_great_mysterious_God_unknown",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn415.pdf"
      },
      {
        "hymn_number": "416",
        "hymn_title": "Physician_of_my_sin-sick_soul",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn416.pdf"
      },
      {
        "hymn_number": "417",
        "hymn_title": "O_Lord,_from_Whom_there’s_nought_concealed",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn417.pdf"
      },
      {
        "hymn_number": "418",
        "hymn_title": "Come,_O_Thou_Traveller_unknown",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn418.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN − Gratitude for Saving Grace and Electing Love",
    "hymns": [
      {
        "hymn_number": "419",
        "hymn_title": "Come_and_rejoice_with_me!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn419.pdf"
      },
      {
        "hymn_number": "420",
        "hymn_title": "And_can_it_be_that_I_should_gain",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn420.pdf"
      },
      {
        "hymn_number": "421",
        "hymn_title": "I_will_sing_of_my_Redeemer",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn421.pdf"
      },
      {
        "hymn_number": "422",
        "hymn_title": "O_Lord,_enlarge_our_scanty_thought",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn422.pdf"
      },
      {
        "hymn_number": "423",
        "hymn_title": "Amazing_grace!_how_sweet_the_sound",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn423.pdf"
      },
      {
        "hymn_number": "424",
        "hymn_title": "In_lovingkindness_Jesus_came",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn424.pdf"
      },
      {
        "hymn_number": "425_1",
        "hymn_title": "Come,_we_that_love_the_Lord_(Version_1)",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn425_1.pdf"
      },
      {
        "hymn_number": "425_2",
        "hymn_title": "Come,_we_that_love_the_Lord_(Version_2)",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn425_2.pdf"
      },
      {
        "hymn_number": "426",
        "hymn_title": "O_Lord,_I_am_Thine",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn426.pdf"
      },
      {
        "hymn_number": "427",
        "hymn_title": "I_sought_the_Lord,_and_afterward_I_knew",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn427.pdf"
      },
      {
        "hymn_number": "428",
        "hymn_title": "Grace!_’tis_a_charming_sound",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn428.pdf"
      },
      {
        "hymn_number": "429",
        "hymn_title": "Forgiving_Lord,_how_kind",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn429.pdf"
      },
      {
        "hymn_number": "430",
        "hymn_title": "’Twas_with_an_everlasting_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn430.pdf"
      },
      {
        "hymn_number": "431",
        "hymn_title": "Jesus,_the_sinner’s_Friend!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn431.pdf"
      },
      {
        "hymn_number": "432",
        "hymn_title": "I_heard_the_voice_of_Jesus_say",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn432.pdf"
      },
      {
        "hymn_number": "433",
        "hymn_title": "’Tis_not_that_I_did_choose_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn433.pdf"
      },
      {
        "hymn_number": "434",
        "hymn_title": "In_evil_long_I_took_delight",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn434.pdf"
      },
      {
        "hymn_number": "435",
        "hymn_title": "Lord,_we_confess_our_numerous_faults",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn435.pdf"
      },
      {
        "hymn_number": "436",
        "hymn_title": "Jesus,_commissioned_from_above",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn436.pdf"
      },
      {
        "hymn_number": "437",
        "hymn_title": "O_happy_day,_that_fixed_my_choice",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn437.pdf"
      },
      {
        "hymn_number": "438",
        "hymn_title": "I_was_a_wandering_sheep",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn438.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN − The World Renounced",
    "hymns": [
      {
        "hymn_number": "439",
        "hymn_title": "Thou_only_Sovereign_of_my_heart",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn439.pdf"
      },
      {
        "hymn_number": "440",
        "hymn_title": "How_vast_the_treasure_we_possess!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn440.pdf"
      },
      {
        "hymn_number": "441",
        "hymn_title": "Let_worldly_minds_this_world_pursue",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn441.pdf"
      },
      {
        "hymn_number": "442",
        "hymn_title": "I_thirst,_but_not_as_once_I_did",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn442.pdf"
      },
      {
        "hymn_number": "443",
        "hymn_title": "Let_shallow_things_of_earth_depart",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn443.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN − Desires for Holiness",
    "hymns": [
      {
        "hymn_number": "444",
        "hymn_title": "Jesus,_Thine_all-victorious_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn444.pdf"
      },
      {
        "hymn_number": "445",
        "hymn_title": "We_have_not_known_Thee_as_we_ought",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn445.pdf"
      },
      {
        "hymn_number": "446",
        "hymn_title": "So_let_our_lips_and_lives_express",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn446.pdf"
      },
      {
        "hymn_number": "447",
        "hymn_title": "Jesus,_my_strength,_my_hope",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn447.pdf"
      },
      {
        "hymn_number": "448",
        "hymn_title": "We_praise_and_bless_Thee,_gracious_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn448.pdf"
      },
      {
        "hymn_number": "449",
        "hymn_title": "More_gratitude_give_me;_more_trust_in_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn449.pdf"
      },
      {
        "hymn_number": "450",
        "hymn_title": "O_for_a_heart_to_praise_my_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn450.pdf"
      },
      {
        "hymn_number": "451",
        "hymn_title": "I_asked_the_Lord_that_I_might_grow",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn451.pdf"
      },
      {
        "hymn_number": "452",
        "hymn_title": "Love_divine,_all_loves_excelling",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn452.pdf"
      },
      {
        "hymn_number": "453",
        "hymn_title": "Lord,_when_our_hearts_perceive_Thy_worth",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn453.pdf"
      },
      {
        "hymn_number": "454",
        "hymn_title": "Centre_of_our_hopes_Thou_art",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn454.pdf"
      },
      {
        "hymn_number": "455",
        "hymn_title": "O_may_my_heart_by_grace_renewed",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn455.pdf"
      },
      {
        "hymn_number": "456",
        "hymn_title": "I_want_a_principle_within",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn456.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN − Dedication and Zeal",
    "hymns": [
      {
        "hymn_number": "457",
        "hymn_title": "Jesus,_all-atoning_Lamb",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn457.pdf"
      },
      {
        "hymn_number": "458",
        "hymn_title": "My_gracious_Lord,_I_own_Thy_right",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn458.pdf"
      },
      {
        "hymn_number": "459",
        "hymn_title": "Thy_life_was_given_for_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn459.pdf"
      },
      {
        "hymn_number": "460",
        "hymn_title": "O_Jesus,_I_have_promised",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn460.pdf"
      },
      {
        "hymn_number": "461",
        "hymn_title": "Lord,_in_the_fulness_of_my_might",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn461.pdf"
      },
      {
        "hymn_number": "462",
        "hymn_title": "Give_me_the_faith_which_can_remove",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn462.pdf"
      },
      {
        "hymn_number": "463",
        "hymn_title": "Lord,_speak_to_me,_that_I_may_speak",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn463.pdf"
      },
      {
        "hymn_number": "464",
        "hymn_title": "Not,_Lord,_Thine_ancient_works_alone",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn464.pdf"
      },
      {
        "hymn_number": "465",
        "hymn_title": "Jesus,_our_best_belovèd_Friend",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn465.pdf"
      },
      {
        "hymn_number": "466",
        "hymn_title": "Go,_labour_on,_spend,_and_be_spent",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn466.pdf"
      },
      {
        "hymn_number": "467",
        "hymn_title": "O_Thou_Who_camest_from_above",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn467.pdf"
      },
      {
        "hymn_number": "468",
        "hymn_title": "Take_my_life,_and_let_it_be",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn468.pdf"
      },
      {
        "hymn_number": "469",
        "hymn_title": "Now,_Saviour,_now_Thy_love_impart",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn469.pdf"
      },
      {
        "hymn_number": "470",
        "hymn_title": "Jesus,_Master,_Whose_I_am",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn470.pdf"
      },
      {
        "hymn_number": "471",
        "hymn_title": "Saviour!_Thy_dying_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn471.pdf"
      },
      {
        "hymn_number": "472",
        "hymn_title": "Fill_Thou_my_life,_O_Lord_my_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn472.pdf"
      },
      {
        "hymn_number": "473",
        "hymn_title": "Behold_the_servant_of_the_Lord!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn473.pdf"
      },
      {
        "hymn_number": "474",
        "hymn_title": "In_full_and_glad_surrender",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn474.pdf"
      },
      {
        "hymn_number": "475",
        "hymn_title": "Jesus,_I_my_cross_have_taken",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn475.pdf"
      },
      {
        "hymn_number": "476",
        "hymn_title": "O_God,_what_offering_shall_I_give",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn476.pdf"
      },
      {
        "hymn_number": "477",
        "hymn_title": "Zeal_is_that_pure_and_heavenly_flame",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn477.pdf"
      },
      {
        "hymn_number": "478",
        "hymn_title": "Father,_Son,_and_Holy_Ghost",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn478.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN − Courage and Trust in God",
    "hymns": [
      {
        "hymn_number": "479",
        "hymn_title": "Soldiers_of_Christ,_arise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn479.pdf"
      },
      {
        "hymn_number": "480_1",
        "hymn_title": "A_mighty_fortress_is_our_God_(Version_1)",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn480_1.pdf"
      },
      {
        "hymn_number": "480_2",
        "hymn_title": "A_safe_stronghold_our_God_is_still_(Version_2)",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn480_2.pdf"
      },
      {
        "hymn_number": "481",
        "hymn_title": "Are_we_the_soldiers_of_the_Cross",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn481.pdf"
      },
      {
        "hymn_number": "482",
        "hymn_title": "Who_is_on_the_Lord’s_side?",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn482.pdf"
      },
      {
        "hymn_number": "483",
        "hymn_title": "We_come_unto_our_fathers’_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn483.pdf"
      },
      {
        "hymn_number": "484",
        "hymn_title": "Light_of_the_world,_Thy_beams_I_bless",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn484.pdf"
      },
      {
        "hymn_number": "485",
        "hymn_title": "‘Forward!’_be_our_watchword",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn485.pdf"
      },
      {
        "hymn_number": "486",
        "hymn_title": "I’m_not_ashamed_to_own_my_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn486.pdf"
      },
      {
        "hymn_number": "487",
        "hymn_title": "Stand_up!_stand_up_for_Jesus!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn487.pdf"
      },
      {
        "hymn_number": "488",
        "hymn_title": "Come,_let_us_anew",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn488.pdf"
      },
      {
        "hymn_number": "489",
        "hymn_title": "Now_I_have_found_the_ground_wherein",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn489.pdf"
      },
      {
        "hymn_number": "490",
        "hymn_title": "Awake,_our_souls;_away,_our_fears",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn490.pdf"
      },
      {
        "hymn_number": "491",
        "hymn_title": "My_soul,_triumphant_in_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn491.pdf"
      },
      {
        "hymn_number": "492",
        "hymn_title": "Omnipotent_Lord,_my_Saviour_and_King",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn492.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN − Prayer in Affliction and Temptation",
    "hymns": [
      {
        "hymn_number": "493",
        "hymn_title": "God_of_my_life,_to_Thee_I_call",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn493.pdf"
      },
      {
        "hymn_number": "494",
        "hymn_title": "Encompassed_with_clouds_of_distress",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn494.pdf"
      },
      {
        "hymn_number": "495",
        "hymn_title": "Still_nigh_me,_O_my_Saviour,_stand",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn495.pdf"
      },
      {
        "hymn_number": "496",
        "hymn_title": "Lord,_I_cannot_let_Thee_go",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn496.pdf"
      },
      {
        "hymn_number": "497",
        "hymn_title": "Clouds_and_darkness_round_about_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn497.pdf"
      },
      {
        "hymn_number": "498",
        "hymn_title": "Heavenly_Father!_to_Whose_eye",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn498.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN − Afflictions − Resting on the Promises",
    "hymns": [
      {
        "hymn_number": "499",
        "hymn_title": "Why_should_I_fear_the_darkest_hour",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn499.pdf"
      },
      {
        "hymn_number": "500",
        "hymn_title": "Let_me_but_hear_my_Saviour_say",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn500.pdf"
      },
      {
        "hymn_number": "501",
        "hymn_title": "Thou_hidden_source_of_calm_repose",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn501.pdf"
      },
      {
        "hymn_number": "502",
        "hymn_title": "When_fears_arise_and_trials_oppress",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn502.pdf"
      },
      {
        "hymn_number": "503",
        "hymn_title": "Begone,_unbelief",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn503.pdf"
      },
      {
        "hymn_number": "504",
        "hymn_title": "In_the_floods_of_tribulation",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn504.pdf"
      },
      {
        "hymn_number": "505",
        "hymn_title": "’Tis_my_happiness_below",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn505.pdf"
      },
      {
        "hymn_number": "506",
        "hymn_title": "My_hope_is_built_on_nothing_less",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn506.pdf"
      },
      {
        "hymn_number": "507",
        "hymn_title": "Be_still,_my_heart!_all_anxious_cares",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn507.pdf"
      },
      {
        "hymn_number": "508",
        "hymn_title": "O_why_do_mournful_thoughts_arise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn508.pdf"
      },
      {
        "hymn_number": "509",
        "hymn_title": "How_firm_a_foundation,_ye_saints_of_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn509.pdf"
      },
      {
        "hymn_number": "510",
        "hymn_title": "How_frail_and_fallible_am_I!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn510.pdf"
      },
      {
        "hymn_number": "511",
        "hymn_title": "Though_troubles_assail",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn511.pdf"
      },
      {
        "hymn_number": "512",
        "hymn_title": "Head_of_the_Church_triumphant",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn512.pdf"
      },
      {
        "hymn_number": "513",
        "hymn_title": "Sometimes_a_light_surprises",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn513.pdf"
      },
      {
        "hymn_number": "514",
        "hymn_title": "Why_should_I_sorrow_more?",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn514.pdf"
      },
      {
        "hymn_number": "515",
        "hymn_title": "Incarnate_God!_the_soul_that_knows",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn515.pdf"
      },
      {
        "hymn_number": "516",
        "hymn_title": "Let_not_God’s_praises_grow",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn516.pdf"
      },
      {
        "hymn_number": "517",
        "hymn_title": "Away,_distrustful_care!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn517.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN − Seeking to Perseverese",
    "hymns": [
      {
        "hymn_number": "518",
        "hymn_title": "O_Lamb_of_God,_still_keep_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn518.pdf"
      },
      {
        "hymn_number": "519",
        "hymn_title": "God_of_love,_that_hearest_prayer",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn519.pdf"
      },
      {
        "hymn_number": "520",
        "hymn_title": "O_that_I_knew_the_secret_place",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn520.pdf"
      },
      {
        "hymn_number": "521",
        "hymn_title": "O_for_a_closer_walk_with_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn521.pdf"
      },
      {
        "hymn_number": "522",
        "hymn_title": "When_any_turn_from_Zion’s_way",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn522.pdf"
      },
      {
        "hymn_number": "523",
        "hymn_title": "Keep_us,_Lord,_O_keep_us_ever",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn523.pdf"
      },
      {
        "hymn_number": "524",
        "hymn_title": "Jesus,_seek_Thy_wandering_sheep",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn524.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN − Peaceful Trust",
    "hymns": [
      {
        "hymn_number": "525",
        "hymn_title": "I_hear_the_words_of_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn525.pdf"
      },
      {
        "hymn_number": "526",
        "hymn_title": "Peace,_perfect_peace,_in_this_dark_world_of_sin?",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn526.pdf"
      },
      {
        "hymn_number": "527",
        "hymn_title": "For_ever_here_my_rest_shall_be",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn527.pdf"
      },
      {
        "hymn_number": "528",
        "hymn_title": "O_Lord,_I_would_delight_in_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn528.pdf"
      },
      {
        "hymn_number": "529",
        "hymn_title": "When_peace,_like_a_river,_attendeth_my_way",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn529.pdf"
      },
      {
        "hymn_number": "530",
        "hymn_title": "My_long_rebellious_heart,_O_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn530.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN − Patience and Resignation to God’s Will",
    "hymns": [
      {
        "hymn_number": "531",
        "hymn_title": "Lord,_my_times_are_in_Thy_hand",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn531.pdf"
      },
      {
        "hymn_number": "532",
        "hymn_title": "My_God_and_Father,_while_I_stray",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn532.pdf"
      },
      {
        "hymn_number": "533",
        "hymn_title": "All_the_way_my_Saviour_leads_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn533.pdf"
      },
      {
        "hymn_number": "534",
        "hymn_title": "In_heavenly_love_abiding",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn534.pdf"
      },
      {
        "hymn_number": "535",
        "hymn_title": "O_God_of_Bethel,_by_Whose_hand",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn535.pdf"
      },
      {
        "hymn_number": "536",
        "hymn_title": "Thy_way,_not_mine,_O_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn536.pdf"
      },
      {
        "hymn_number": "537",
        "hymn_title": "Commit_now_all_your_griefs",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn537.pdf"
      },
      {
        "hymn_number": "538",
        "hymn_title": "My_heart_is_resting,_O_my_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn538.pdf"
      },
      {
        "hymn_number": "539",
        "hymn_title": "And_must_I_part_with_all_I_have",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn539.pdf"
      },
      {
        "hymn_number": "540",
        "hymn_title": "Be_still,_my_soul",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn540.pdf"
      },
      {
        "hymn_number": "541",
        "hymn_title": "My_Father,_it_is_good_for_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn541.pdf"
      },
      {
        "hymn_number": "542",
        "hymn_title": "Leave_God_to_order_all_thy_ways",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn542.pdf"
      },
      {
        "hymn_number": "543",
        "hymn_title": "Go_not_far_from_me,_O_my_Strength",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn543.pdf"
      },
      {
        "hymn_number": "544",
        "hymn_title": "Be_with_me,_Lord,_where’er_I_go",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn544.pdf"
      },
      {
        "hymn_number": "545",
        "hymn_title": "Master,_speak!_Thy_servant_heareth",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn545.pdf"
      },
      {
        "hymn_number": "546",
        "hymn_title": "Hushed_was_the_evening_hymn",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn546.pdf"
      },
      {
        "hymn_number": "547",
        "hymn_title": "Teach_me_Thy_way,_O_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn547.pdf"
      },
      {
        "hymn_number": "548",
        "hymn_title": "Father,_I_know_that_all_my_life",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn548.pdf"
      },
      {
        "hymn_number": "549",
        "hymn_title": "Now,_the_sowing_and_the_weeping",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn549.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN − Humility",
    "hymns": [
      {
        "hymn_number": "550",
        "hymn_title": "Blest_are_the_humble_souls_that_see",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn550.pdf"
      },
      {
        "hymn_number": "551",
        "hymn_title": "O_Jesus_Christ,_grow_Thou_in_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn551.pdf"
      },
      {
        "hymn_number": "552",
        "hymn_title": "Jesus!_exalted_far_on_high",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn552.pdf"
      }
    ]
  },
  {
    "category": "CHRISTIAN PRIVILEGES − Adoption",
    "hymns": [
      {
        "hymn_number": "553",
        "hymn_title": "Behold_the_amazing_gift_of_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn553.pdf"
      },
      {
        "hymn_number": "554",
        "hymn_title": "Behold,_what_wondrous_grace",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn554.pdf"
      },
      {
        "hymn_number": "555",
        "hymn_title": "Arise,_my_soul,_arise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn555.pdf"
      },
      {
        "hymn_number": "556",
        "hymn_title": "Honour_and_happiness_unite",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn556.pdf"
      },
      {
        "hymn_number": "557",
        "hymn_title": "Blessèd_are_the_sons_of_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn557.pdf"
      }
    ]
  },
  {
    "category": "CHRISTIAN PRIVILEGES − Unchanging Love",
    "hymns": [
      {
        "hymn_number": "558",
        "hymn_title": "How_blest_is_life_if_lived_for_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn558.pdf"
      },
      {
        "hymn_number": "559",
        "hymn_title": "Loved_with_everlasting_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn559.pdf"
      },
      {
        "hymn_number": "560",
        "hymn_title": "Thy_ceaseless,_unexhausted_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn560.pdf"
      },
      {
        "hymn_number": "561",
        "hymn_title": "O_the_deep,_deep_love_of_Jesus!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn561.pdf"
      },
      {
        "hymn_number": "562",
        "hymn_title": "Hark,_my_soul!_it_is_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn562.pdf"
      },
      {
        "hymn_number": "563",
        "hymn_title": "Come,_Thou_Fount_of_every_blessing",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn563.pdf"
      },
      {
        "hymn_number": "564",
        "hymn_title": "There_is_a_name_I_love_to_hear",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn564.pdf"
      }
    ]
  },
  {
    "category": "CHRISTIAN PRIVILEGES − Covenant Security",
    "hymns": [
      {
        "hymn_number": "565",
        "hymn_title": "Rejoice,_believer,_in_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn565.pdf"
      },
      {
        "hymn_number": "566",
        "hymn_title": "A_sovereign_protector_I_have",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn566.pdf"
      },
      {
        "hymn_number": "567",
        "hymn_title": "With_David’s_Lord,_and_ours",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn567.pdf"
      },
      {
        "hymn_number": "568",
        "hymn_title": "O_Thou,_the_contrite_sinner’s_Friend",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn568.pdf"
      },
      {
        "hymn_number": "569",
        "hymn_title": "I_know_not_why_God’s_wondrous_grace",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn569.pdf"
      },
      {
        "hymn_number": "570",
        "hymn_title": "Sovereign_grace_o’er_sin_abounding",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn570.pdf"
      }
    ]
  },
  {
    "category": "CHRISTIAN PRIVILEGES − Final Preservation",
    "hymns": [
      {
        "hymn_number": "571",
        "hymn_title": "Who_shall_the_Lord’s_elect_condemn?",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn571.pdf"
      },
      {
        "hymn_number": "572",
        "hymn_title": "Where_God_begins_His_gracious_work",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn572.pdf"
      },
      {
        "hymn_number": "573",
        "hymn_title": "O_Lord,_close_to_Thee_we_would_cleave",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn573.pdf"
      },
      {
        "hymn_number": "574",
        "hymn_title": "A_debtor_to_mercy_alone",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn574.pdf"
      },
      {
        "hymn_number": "575",
        "hymn_title": "Jesus,_Thy_blood_and_righteousness",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn575.pdf"
      },
      {
        "hymn_number": "576",
        "hymn_title": "Who_shall_condemn_to_endless_flames",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn576.pdf"
      },
      {
        "hymn_number": "577",
        "hymn_title": "From_whence_this_fear_and_unbelief?",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn577.pdf"
      }
    ]
  },
  {
    "category": "CHRISTIAN PRIVILEGES − Communion with Jesus",
    "hymns": [
      {
        "hymn_number": "578",
        "hymn_title": "Object_of_my_first_desire",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn578.pdf"
      },
      {
        "hymn_number": "579",
        "hymn_title": "Jesus_my_Lord,_my_God,_my_All",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn579.pdf"
      },
      {
        "hymn_number": "580",
        "hymn_title": "I_could_not_do_without_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn580.pdf"
      },
      {
        "hymn_number": "581",
        "hymn_title": "My_best-belovèd_keeps_His_throne",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn581.pdf"
      },
      {
        "hymn_number": "582",
        "hymn_title": "Thou_hidden_Love_of_God,_Whose_height",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn582.pdf"
      },
      {
        "hymn_number": "583",
        "hymn_title": "O_Jesus,_Friend_unfailing",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn583.pdf"
      },
      {
        "hymn_number": "584",
        "hymn_title": "Come,_dearest_Lord,_descend_and_dwell",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn584.pdf"
      },
      {
        "hymn_number": "585",
        "hymn_title": "It_passes_knowledge,_that_dear_love_of_Thine",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn585.pdf"
      },
      {
        "hymn_number": "586",
        "hymn_title": "O_holy_Saviour,_Friend_unseen",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn586.pdf"
      },
      {
        "hymn_number": "587",
        "hymn_title": "My_Jesus,_I_love_Thee,_I_know_Thou_art_mine",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn587.pdf"
      },
      {
        "hymn_number": "588",
        "hymn_title": "Who_is_this_loved_one_in_distress",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn588.pdf"
      },
      {
        "hymn_number": "589",
        "hymn_title": "Emptied_of_earth_I_long_to_be",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn589.pdf"
      },
      {
        "hymn_number": "590",
        "hymn_title": "I_know_that_my_Redeemer_lives",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn590.pdf"
      },
      {
        "hymn_number": "591",
        "hymn_title": "O_Love_divine,_how_sweet_Thou_art!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn591.pdf"
      },
      {
        "hymn_number": "592",
        "hymn_title": "My_Lord,_my_life,_my_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn592.pdf"
      },
      {
        "hymn_number": "593",
        "hymn_title": "Jesus,_Thy_boundless_love_to_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn593.pdf"
      },
      {
        "hymn_number": "594",
        "hymn_title": "O_mean_may_seem_this_house_of_clay",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn594.pdf"
      },
      {
        "hymn_number": "595",
        "hymn_title": "I_lift_my_heart_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn595.pdf"
      },
      {
        "hymn_number": "596",
        "hymn_title": "The_good_I_have_is_from_Christ’s_stores_supplied",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn596.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN’S FUTURE − Death",
    "hymns": [
      {
        "hymn_number": "597",
        "hymn_title": "Often_as_death_with_solemn_toll",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn597.pdf"
      },
      {
        "hymn_number": "598",
        "hymn_title": "There_is_an_hour_when_I_must_part",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn598.pdf"
      },
      {
        "hymn_number": "599",
        "hymn_title": "Abide_with_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn599.pdf"
      },
      {
        "hymn_number": "600",
        "hymn_title": "Behold,_the_gloomy_vale",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn600.pdf"
      },
      {
        "hymn_number": "601",
        "hymn_title": "Hark!_a_voice_divides_the_sky",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn601.pdf"
      },
      {
        "hymn_number": "602",
        "hymn_title": "One_sweetly_solemn_thought",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn602.pdf"
      },
      {
        "hymn_number": "603",
        "hymn_title": "That_awesome_day_will_surely_come",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn603.pdf"
      },
      {
        "hymn_number": "604",
        "hymn_title": "Guide_me,_O_Thou_great_Jehovah",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn604.pdf"
      },
      {
        "hymn_number": "605",
        "hymn_title": "Give_me_the_wings_of_faith_to_rise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn605.pdf"
      },
      {
        "hymn_number": "606",
        "hymn_title": "The_time_is_short_ere_all_that_live",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn606.pdf"
      },
      {
        "hymn_number": "607",
        "hymn_title": "God_of_my_life,_through_all_my_days",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn607.pdf"
      },
      {
        "hymn_number": "608",
        "hymn_title": "When_this_passing_world_is_done",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn608.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN’S FUTURE − Burial",
    "hymns": [
      {
        "hymn_number": "609",
        "hymn_title": "Why_do_we_mourn_departing_friends",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn609.pdf"
      },
      {
        "hymn_number": "610_1",
        "hymn_title": "Now_the_Christian’s_course_is_run_(Version_1)",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn610_1.pdf"
      },
      {
        "hymn_number": "610_2",
        "hymn_title": "Now_the_Christian’s_course_is_run_(Version_2)",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn610_2.pdf"
      },
      {
        "hymn_number": "611",
        "hymn_title": "Stand_up!_stand_up_for_Jesus!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn611.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN’S FUTURE − Resurrection",
    "hymns": [
      {
        "hymn_number": "612",
        "hymn_title": "Blest_be_the_everlasting_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn612.pdf"
      },
      {
        "hymn_number": "613",
        "hymn_title": "We_sing_His_love_Who_once_was_slain",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn613.pdf"
      },
      {
        "hymn_number": "614",
        "hymn_title": "I_know_that_my_Redeemer_lives",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn614.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN’S FUTURE − Aspirations for Heaven",
    "hymns": [
      {
        "hymn_number": "615",
        "hymn_title": "My_soul_amid_this_stormy_world",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn615.pdf"
      },
      {
        "hymn_number": "616",
        "hymn_title": "For_ever_with_the_Lord!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn616.pdf"
      },
      {
        "hymn_number": "617",
        "hymn_title": "There_is_a_house_not_made_with_hands",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn617.pdf"
      },
      {
        "hymn_number": "618",
        "hymn_title": "My_rest_is_in_Heaven,_my_rest_is_not_here",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn618.pdf"
      },
      {
        "hymn_number": "619",
        "hymn_title": "Let_me_be_with_Thee_where_Thou_art",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn619.pdf"
      },
      {
        "hymn_number": "620",
        "hymn_title": "Descend_from_Heaven,_Immortal_Dove",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn620.pdf"
      },
      {
        "hymn_number": "621",
        "hymn_title": "The_sands_of_time_are_sinking",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn621.pdf"
      },
      {
        "hymn_number": "622",
        "hymn_title": "O_for_the_robes_of_whiteness!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn622.pdf"
      },
      {
        "hymn_number": "623",
        "hymn_title": "Now_let_our_souls_on_wings_sublime",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn623.pdf"
      },
      {
        "hymn_number": "624",
        "hymn_title": "Leader_of_faithful_souls,_and_Guide",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn624.pdf"
      },
      {
        "hymn_number": "625",
        "hymn_title": "O_how_I_long_to_reach_my_home",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn625.pdf"
      },
      {
        "hymn_number": "626",
        "hymn_title": "Far_from_these_narrow_scenes_of_night",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn626.pdf"
      }
    ]
  },
  {
    "category": "THE CHRISTIAN’S FUTURE − Heaven",
    "hymns": [
      {
        "hymn_number": "627",
        "hymn_title": "O_what_has_Jesus_bought_for_me!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn627.pdf"
      },
      {
        "hymn_number": "628",
        "hymn_title": "There_is_a_land_of_pure_delight",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn628.pdf"
      },
      {
        "hymn_number": "629",
        "hymn_title": "Jerusalem_on_high",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn629.pdf"
      },
      {
        "hymn_number": "630",
        "hymn_title": "Sweet_place,_sweet_place_alone",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn630.pdf"
      },
      {
        "hymn_number": "631",
        "hymn_title": "On_Jordan’s_stormy_banks_I_stand",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn631.pdf"
      },
      {
        "hymn_number": "632",
        "hymn_title": "Lo,_round_the_throne,_a_glorious_band",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn632.pdf"
      },
      {
        "hymn_number": "633",
        "hymn_title": "Away_with_our_sorrow_and_fear!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn633.pdf"
      },
      {
        "hymn_number": "634",
        "hymn_title": "O_Paradise_eternal!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn634.pdf"
      },
      {
        "hymn_number": "635",
        "hymn_title": "Who_are_these_in_bright_array",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn635.pdf"
      },
      {
        "hymn_number": "636",
        "hymn_title": "How_bright_these_glorious_spirits_shine!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn636.pdf"
      },
      {
        "hymn_number": "637",
        "hymn_title": "Brief_life_is_here_our_portion",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn637.pdf"
      },
      {
        "hymn_number": "638",
        "hymn_title": "Jerusalem_the_golden",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn638.pdf"
      },
      {
        "hymn_number": "639",
        "hymn_title": "How_soon!_my_God,_my_joys_shall_rise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn639.pdf"
      },
      {
        "hymn_number": "640",
        "hymn_title": "Jerusalem,_my_happy_home",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn640.pdf"
      },
      {
        "hymn_number": "641",
        "hymn_title": "Who_are_these_arrayed_in_white",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn641.pdf"
      }
    ]
  },
  {
    "category": "THE CHURCH − and Christian Fellowship",
    "hymns": [
      {
        "hymn_number": "642",
        "hymn_title": "Triumphant_Zion,_lift_your_head",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn642.pdf"
      },
      {
        "hymn_number": "643",
        "hymn_title": "Lord,_from_Whom_all_blessings_flow",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn643.pdf"
      },
      {
        "hymn_number": "644",
        "hymn_title": "Blest_be_the_tie_that_binds",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn644.pdf"
      },
      {
        "hymn_number": "645",
        "hymn_title": "We_love_Thy_kingdom,_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn645.pdf"
      },
      {
        "hymn_number": "646",
        "hymn_title": "Our_friendship_sanctify_and_guide",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn646.pdf"
      },
      {
        "hymn_number": "647",
        "hymn_title": "Jesus,_with_Thy_church_abide",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn647.pdf"
      },
      {
        "hymn_number": "648",
        "hymn_title": "How_sweet,_how_heavenly_is_the_sight",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn648.pdf"
      },
      {
        "hymn_number": "649",
        "hymn_title": "Thou_God_of_Truth_and_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn649.pdf"
      },
      {
        "hymn_number": "650",
        "hymn_title": "Zion_stands_by_hills_surrounded",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn650.pdf"
      },
      {
        "hymn_number": "651",
        "hymn_title": "Jesus,_Lord,_we_look_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn651.pdf"
      },
      {
        "hymn_number": "652",
        "hymn_title": "How_great_and_glorious_is_the_place",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn652.pdf"
      },
      {
        "hymn_number": "653",
        "hymn_title": "Partners_of_a_glorious_hope",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn653.pdf"
      }
    ]
  },
  {
    "category": "THE CHURCH − Ordinances − Baptism",
    "hymns": [
      {
        "hymn_number": "654",
        "hymn_title": "New-born_souls_who_taste_salvation",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn654.pdf"
      },
      {
        "hymn_number": "655",
        "hymn_title": "Witness,_all_men_and_angels_now",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn655.pdf"
      },
      {
        "hymn_number": "656",
        "hymn_title": "Come,_Holy_Spirit,_Dove_divine",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn656.pdf"
      }
    ]
  },
  {
    "category": "THE CHURCH − Ordinances − The Lord’s Supper",
    "hymns": [
      {
        "hymn_number": "657",
        "hymn_title": "Jesus,_we_thus_obey",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn657.pdf"
      },
      {
        "hymn_number": "658",
        "hymn_title": "Here,_O_my_Lord,_I_see_Thee_face_to_face",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn658.pdf"
      },
      {
        "hymn_number": "659",
        "hymn_title": "According_to_Thy_gracious_Word",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn659.pdf"
      },
      {
        "hymn_number": "660",
        "hymn_title": "Lord,_in_this_blest_and_hallowed_hour",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn660.pdf"
      },
      {
        "hymn_number": "661",
        "hymn_title": "He_lovèd_me,_and_gave_Himself_for_me",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn661.pdf"
      },
      {
        "hymn_number": "662",
        "hymn_title": "How_sweet_and_awesome_is_the_place",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn662.pdf"
      },
      {
        "hymn_number": "663",
        "hymn_title": "Amidst_us_our_Belovèd_stands",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn663.pdf"
      },
      {
        "hymn_number": "664",
        "hymn_title": "Jesus_invites_His_saints",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn664.pdf"
      },
      {
        "hymn_number": "665",
        "hymn_title": "By_Christ_redeemed,_in_Christ_restored",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn665.pdf"
      },
      {
        "hymn_number": "666",
        "hymn_title": "Sweet_feast_of_love_divine!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn666.pdf"
      },
      {
        "hymn_number": "667",
        "hymn_title": "Jesus,_Thou_everlasting_King",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn667.pdf"
      },
      {
        "hymn_number": "668",
        "hymn_title": "Sit_down_beneath_His_shadow",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn668.pdf"
      },
      {
        "hymn_number": "669",
        "hymn_title": "Jesus_our_Lord_invites_us_here",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn669.pdf"
      }
    ]
  },
  {
    "category": "PUBLIC WORSHIP AND THE LORD’S DAY",
    "hymns": [
      {
        "hymn_number": "670",
        "hymn_title": "Thou_glorious_Sun_of_Righteousness",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn670.pdf"
      },
      {
        "hymn_number": "671",
        "hymn_title": "Come,_let_us_with_our_Lord_arise",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn671.pdf"
      },
      {
        "hymn_number": "672",
        "hymn_title": "Blest_morning,_whose_first_dawning_rays",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn672.pdf"
      },
      {
        "hymn_number": "673",
        "hymn_title": "This_day,_at_Thy_creating_word",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn673.pdf"
      },
      {
        "hymn_number": "674",
        "hymn_title": "Awake,_my_soul,_to_God_draw_near",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn674.pdf"
      },
      {
        "hymn_number": "675",
        "hymn_title": "Welcome,_sweet_day_of_rest",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn675.pdf"
      },
      {
        "hymn_number": "676",
        "hymn_title": "Safely_through_another_week",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn676.pdf"
      },
      {
        "hymn_number": "677",
        "hymn_title": "Preserved_by_power_divine",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn677.pdf"
      },
      {
        "hymn_number": "678",
        "hymn_title": "O_how_blest_the_hour,_Lord_Jesus",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn678.pdf"
      },
      {
        "hymn_number": "679",
        "hymn_title": "To_Thy_temple_I_repair",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn679.pdf"
      },
      {
        "hymn_number": "680",
        "hymn_title": "Jesus,_where’er_Thy_people_meet",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn680.pdf"
      },
      {
        "hymn_number": "681",
        "hymn_title": "My_God,_is_any_hour_so_sweet",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn681.pdf"
      },
      {
        "hymn_number": "682",
        "hymn_title": "Speak_to_us,_Lord,_Thyself_reveal",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn682.pdf"
      },
      {
        "hymn_number": "683",
        "hymn_title": "Stand_up_and_bless_the_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn683.pdf"
      },
      {
        "hymn_number": "684",
        "hymn_title": "Lo!_God_is_here!_let_us_adore",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn684.pdf"
      },
      {
        "hymn_number": "685",
        "hymn_title": "O_praise_our_God_today",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn685.pdf"
      },
      {
        "hymn_number": "686",
        "hymn_title": "In_Thy_name,_O_Lord,_assembling",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn686.pdf"
      },
      {
        "hymn_number": "687",
        "hymn_title": "Jesus,_we_look_to_Thee",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn687.pdf"
      },
      {
        "hymn_number": "688",
        "hymn_title": "Light_up_this_house_with_glory,_Lord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn688.pdf"
      },
      {
        "hymn_number": "689",
        "hymn_title": "We_love_the_place,_O_God",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn689.pdf"
      },
      {
        "hymn_number": "690",
        "hymn_title": "O_Thou,_the_hope_of_Israel’s_host",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn690.pdf"
      }
    ]
  },
  {
    "category": "TIMES, SEASONS AND SPECIFIC OCCASIONS − Meetings for Prayer",
    "hymns": [
      {
        "hymn_number": "691",
        "hymn_title": "Great_King_of_Zion,_now",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn691.pdf"
      },
      {
        "hymn_number": "692",
        "hymn_title": "From_every_stormy_wind_that_blows",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn692.pdf"
      },
      {
        "hymn_number": "693",
        "hymn_title": "Behold_the_throne_of_grace!",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn693.pdf"
      },
      {
        "hymn_number": "694",
        "hymn_title": "Where_two_or_three,_with_sweet_accord",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn694.pdf"
      },
      {
        "hymn_number": "695",
        "hymn_title": "Lord,_teach_us_how_to_pray_aright",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn695.pdf"
      },
      {
        "hymn_number": "696",
        "hymn_title": "O_God,_Who_didst_Thy_will_unfold",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn696.pdf"
      },
      {
        "hymn_number": "697",
        "hymn_title": "Great_Shepherd_of_Thy_people,_hear",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn697.pdf"
      },
      {
        "hymn_number": "698",
        "hymn_title": "What_various_hindrances_we_meet",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn698.pdf"
      },
      {
        "hymn_number": "699",
        "hymn_title": "Our_heavenly_Father,_hear",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn699.pdf"
      },
      {
        "hymn_number": "700",
        "hymn_title": "What_a_Friend_we_have_in_Jesus",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn700.pdf"
      },
      {
        "hymn_number": "701",
        "hymn_title": "Jesus,_Thou_sovereign_Lord_of_all",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn701.pdf"
      },
      {
        "hymn_number": "702",
        "hymn_title": "Prayer_is_the_soul’s_sincere_desire",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn702.pdf"
      },
      {
        "hymn_number": "703",
        "hymn_title": "Sweetly_our_praise_awakes",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn703.pdf"
      },
      {
        "hymn_number": "704",
        "hymn_title": "Head_of_the_Church_and_Lord_of_all",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn704.pdf"
      }
    ]
  },
  {
    "category": "TIMES, SEASONS AND SPECIFIC OCCASIONS − Prayer for Children",
    "hymns": [
      {
        "hymn_number": "705",
        "hymn_title": "Lord,_for_our_children_we_would_plead",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn705.pdf"
      },
      {
        "hymn_number": "706",
        "hymn_title": "God_of_mercy,_hear_our_prayer",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn706.pdf"
      },
      {
        "hymn_number": "707",
        "hymn_title": "These_children,_Lord,_in_faith_and_prayer",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn707.pdf"
      }
    ]
  },
  {
    "category": "TIMES, SEASONS AND SPECIFIC OCCASIONS − Thankfulness for Harvest",
    "hymns": [
      {
        "hymn_number": "708",
        "hymn_title": "Praise,_O_praise_our_God_and_King",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn708.pdf"
      },
      {
        "hymn_number": "709",
        "hymn_title": "Come,_ye_thankful_people,_come",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn709.pdf"
      },
      {
        "hymn_number": "710",
        "hymn_title": "Praise,_O_praise_the_Lord_of_harvest",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn710.pdf"
      }
    ]
  },
  {
    "category": "TIMES, SEASONS AND SPECIFIC OCCASIONS − Opening and Closing Year",
    "hymns": [
      {
        "hymn_number": "711",
        "hymn_title": "Great_God,_we_sing_that_mighty_hand",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn711.pdf"
      },
      {
        "hymn_number": "712",
        "hymn_title": "Another_year_is_dawning",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn712.pdf"
      },
      {
        "hymn_number": "713",
        "hymn_title": "Come,_let_us_anew",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn713.pdf"
      },
      {
        "hymn_number": "714",
        "hymn_title": "For_Thy_mercy_and_Thy_grace",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn714.pdf"
      },
      {
        "hymn_number": "715",
        "hymn_title": "Standing_at_the_portal",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn715.pdf"
      },
      {
        "hymn_number": "716",
        "hymn_title": "At_Thy_feet,_our_God_and_Father",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn716.pdf"
      },
      {
        "hymn_number": "717",
        "hymn_title": "The_New_Year,_Lord,_we_welcome_make",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn717.pdf"
      },
      {
        "hymn_number": "718",
        "hymn_title": "My_helper_God!_I_bless_His_name",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn718.pdf"
      },
      {
        "hymn_number": "719",
        "hymn_title": "Now_through_another_year",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn719.pdf"
      }
    ]
  },
  {
    "category": "TIMES, SEASONS AND SPECIFIC OCCASIONS − Christian Marriage",
    "hymns": [
      {
        "hymn_number": "720",
        "hymn_title": "O_perfect_Love,_all_human_thought_transcending",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn720.pdf"
      },
      {
        "hymn_number": "721",
        "hymn_title": "Lord,_Who_at_Cana_didst_appear",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn721.pdf"
      },
      {
        "hymn_number": "722",
        "hymn_title": "O_God,_Who_didst_from_Adam’s_side",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn722.pdf"
      },
      {
        "hymn_number": "723",
        "hymn_title": "O_happy_home,_where_Thou_art_loved_the_dearest",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn723.pdf"
      }
    ]
  },
  {
    "category": "TIMES, SEASONS AND SPECIFIC OCCASIONS − Evening Prayer",
    "hymns": [
      {
        "hymn_number": "724",
        "hymn_title": "Ere_I_sleep,_for_every_favour",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn724.pdf"
      },
      {
        "hymn_number": "725",
        "hymn_title": "At_even,_ere_the_sun_was_set",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn725.pdf"
      },
      {
        "hymn_number": "726",
        "hymn_title": "All_praise_to_Thee,_my_God,_this_night",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn726.pdf"
      },
      {
        "hymn_number": "727",
        "hymn_title": "Another_Sabbath_ended",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn727.pdf"
      },
      {
        "hymn_number": "728",
        "hymn_title": "Through_the_day_Thy_love_has_spared_us",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn728.pdf"
      }
    ]
  },
  {
    "category": "TIMES, SEASONS AND SPECIFIC OCCASIONS − Dismission and Parting",
    "hymns": [
      {
        "hymn_number": "729",
        "hymn_title": "Lord,_dismiss_us_with_Thy_blessing",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn729.pdf"
      },
      {
        "hymn_number": "730",
        "hymn_title": "And_though_our_bodies_part",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn730.pdf"
      },
      {
        "hymn_number": "731",
        "hymn_title": "For_a_season_called_to_part",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn731.pdf"
      },
      {
        "hymn_number": "732",
        "hymn_title": "Once_more,_before_we_part",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn732.pdf"
      },
      {
        "hymn_number": "733",
        "hymn_title": "May_the_grace_of_Christ_our_Saviour",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn733.pdf"
      },
      {
        "hymn_number": "734",
        "hymn_title": "Grant_us,_Lord,_some_gracious_token",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn734.pdf"
      },
      {
        "hymn_number": "735",
        "hymn_title": "Blest_be_the_dear_uniting_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn735.pdf"
      },
      {
        "hymn_number": "736",
        "hymn_title": "Often_the_public_means_of_grace",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn736.pdf"
      },
      {
        "hymn_number": "737",
        "hymn_title": "Now_may_the_God_of_peace_and_love",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn737.pdf"
      },
      {
        "hymn_number": "738",
        "hymn_title": "Now_may_He,_Who_from_the_dead",
        "hymn_link": "http://hymns.countedfaithful.org/hymnpdfs/hymn738.pdf"
      }
    ]
  }
];

const PsalmsAndHymnsComponent: React.FC = () => {
  return (
    <div>
      {psalmsAndHymnsData.map((category, index) => (
        <div key={index}>
          <h2>{category.category}</h2>
          <ul>
            {category.hymns.map((hymn, hymnIndex) => (
              <li key={hymnIndex}>
                <a href={hymn.hymn_link} target="_blank" rel="noopener noreferrer">
                  {hymn.hymn_title}
                </a> - {hymn.hymn_number}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default PsalmsAndHymnsComponent;
  