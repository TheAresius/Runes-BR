// general stats values
ATK = [1730, 554]
DEF = [1225, 392]
HP = [930, 298]
Taint = [13.8, 4.42]
sATK = [1540, 493]
sDEF = [1030, 329.6]
CritR = [6.5, 2.1]
CritD = [50, 16]
HP_rec = [31.7, 10.2]
MP_rec = [11, 3.6]
Counter = [9, 2.9]
CritResist = [13, 4.2]
HellSpear = [0, 200]
GP = [0, 4]

// stats list for rune formats
var circle_list = [ATK[0]]
var triangle_list =[ATK[0], DEF[0], HP[0], sATK[0], sDEF[0]]
var rhombus_list = [ATK[0], DEF[0], HP[0], HP_rec[0], MP_rec[0], Taint[0]]
var pentagon_list = [ATK[0], DEF[0], HP[0], CritR[0], CritD[0], Taint[0]]
var hexagon_list = [Counter[0], CritResist[0], Taint[0]]
var first_list = [circle_list, triangle_list, rhombus_list, pentagon_list, hexagon_list]
var second_list = [ATK[1], DEF[1], HP[1], sATK[1], sDEF[1], CritR[1], CritD[1], Counter[1], HP_rec[1], MP_rec[1], GP[1], HellSpear[1], CritResist[1], Taint[1]]

var string_circle = ['Ataque']
var string_triangle = ['Ataque', 'Defesa', 'HP', 'Ataque Especial', 'Defesa Especial']
var string_rhombus = ['Ataque', 'Defesa', 'HP', 'Recuperar HP', 'Recuperar MP', 'Resistência a Contaminação']
var string_pentagon = ['Ataque', 'Defesa', 'HP', 'Crítico', 'Dano Crítico', 'Resistência a Contaminação']
var string_hexagon = ['Defesa de Counter', 'Resistência a Dano Crítico', 'Resistência a Contaminação']
var string_all = [string_circle, string_triangle, string_rhombus, string_pentagon, string_hexagon]
var string_properties = ['Ataque', 'Defesa', 'HP', 'Ataque Especial', 'Defesa Especial', 'Crítico', 'Dano Crítico', 'Defesa de Counter', 'Recuperar HP', 'Recuperar MP', 'Ganho de GP', 'Lança Infernal', 'Resistência a Dano Crítico', 'Resistência a Contaminação']

// multipliers for tier and rarity
// [T1, T2, T3, T4, T5]
var normal = [0.15, 0.26, 0.37, 0.48, 0.59]
var rare =   [0.21, 0.32, 0.43, 0.54, 0.65]
var epic =   [0.27, 0.38, 0.49, 0.60, 0.71]
var legend = [0.33, 0.44, 0.55, 0.66, 0.77]
var tier_rarity_mult = [normal, rare, epic, legend]

var second_mult = [0.33, 0.44, 0.55, 0.66, 0.77]
var first_enhancement = [1.000, 1.026, 1.052, 1.078, 1.104, 1.130, 1.156, 1.182, 1.208, 1.234, 1.300]
var second_enhancement = [1.000, 1.150, 1.300]

// number of dark stones for enhanement
// [+0 -> +1, +1 -> +2 , ..., +9 -> +10]
var rune_stones = [
    [10, 11, 31, 61, 100, 149, 208, 277, 355, 444], // T1
    [19, 22, 60, 118, 194, 290, 404, 538, 690, 862], // T2
    [37, 43, 118, 229, 377, 563, 785, 1045, 1342, 1676], // T3
    [72, 84, 228, 445, 733, 1094, 1527, 2032, 2609, 3258], // T4
    [141, 164, 444, 865, 1425, 2126, 2968, 3949, 5071, 6333] // T5
]
