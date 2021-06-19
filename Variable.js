// Name       : Chaerin Park
// Assignment : final_project - make_a_game
// Course     : CS099
// Spring 2021


//SFX
let click_SFX;
let right_SFX;
let wrong_SFX;

//piano sound
let pianoC;
let pianoCs;
let pianoD;
let pianoDs;
let pianoE;
let pianoF;
let pianoFs;
let pianoG;
let pianoGs;
let pianoA;
let pianoAs;
let pianoB;

//celesta sound
let celestaC;
let celestaCs;
let celestaD;
let celestaDs;
let celestaE;
let celestaF;
let celestaFs;
let celestaG;
let celestaGs;
let celestaA;
let celestaAs;
let celestaB;

//accordion sound
let accordionC;
let accordionCs;
let accordionD;
let accordionDs;
let accordionE;
let accordionF;
let accordionFs;
let accordionG;
let accordionGs;
let accordionA;
let accordionAs;
let accordionB;

//image
let chara;
let chara_1;
let happy;
let clear;
let sad;
let awkward;

//pages
const Main = 0;
const SelectLevel = 1;
const HowToPlay = 2;
const credit = 3;
const Lv1 = 4;
const Lv2 = 5;
const Lv3 = 6;
const Lv4 = 7;
const Shop = 8;
let CurrentPage = Main;

//variables of functions
const explanation_box_width = 500;
const explanation_box_height = 600;

const Main_button_width = 440;
const Main_button_height = 80;
const GoToMain_button = 50;
const Level_button_width = 300;
const Level_button_height = 100;
const shop_button_width = 250;
const shop_button_height = 70;

const white_key_width = 140;
const white_key_height = 370;
const black_key_width = 90;
const black_key_height = 225;
const black_key_interval = 50;

//alphabets of key
let What_Key_B = ["S", "D", "", "G", "H", "J"]
let What_Key_W = ["Z", "X", "C", "V", "B", "N", "M"];

//create new class
let player;
let character;

//for set sound to each level
let current_instrument;