import { Sadhana } from './sadhana.model';
import { TaskSequence } from './task.sequence.model';

const ASANA: TaskSequence = {
  title: 'Ászanák',
  tasks: [
    {
      title: 'Szupta Urdvahasztászana',
      description: `Savászanában érzetfigyelés, majd karemelés, nyújtózás a Szupta Urdvahasztászana helyzetbe.\n\nFigyeld a derekad talajra nyomására, lábfejeket húzd pipába és a sarokból nyújtsd a lábakat. Emeld ki a mellkasod, de vidd le a hátadat a talajra. Tenyerek egymás felé néznek. 10 légzésig tartani, közben folyamatosan korrigálni a tartást.`,
      repetition: '10 légzésig',
      imgSrc: 'szupta_urdvahasztaszana.jpg'
    },{
      title: 'Szupta Pavanamuktászana (fekvő széloldó póz)',
      description: `Fekvő alaphelyzetből hajlítsd a jobb térdet, húzd a combot a mellkashoz kilégzésre. Az ujjakat a lábszáron kulcsold össze. Közelítsd a homlokod a térdedhez. A bal láb maradjon nyújtva. Belégzés miközben a lábat visszaengeded. Végezd el ellentétes lábbal is a gyakorlatot.`,
      repetition: '5-5x',
      imgSrc: 'szupta_pavanamuktaszana.jpg'
    },{
      title: 'Szupta Udarakarshanászana (fekvő helyzetű hasnyújtás)',
      description: `Alaphelyzet. A térdeket hajlítva helyezd a talpakat a talajra. A gyakorlat alatt a térded és a lábfejed tartsd összezárva. Az ujjakat kulcsold össze a tarkód alatt. Kilégzésre engedd le a térdeket jobbra, közelítsd a talajhoz, egyidejűleg fordítsd a fejed balra. Véghelyzetben tartsd kint a levegőt. A fejed és a lábad vidd középhelyzetre belégzésre. Végezd el ellentétes irányba is a gyakorlatot. `,
      repetition: '5-5x',
      imgSrc: 'szupta_udarakarsanaszana.jpg'
    },{
      title: 'Naukászana (csónak póz)',
      description: `Alaphelyzet. Belégzésre egyszerre emeld a lábakat, karokat, törzset és a fejet a talajról. A vállak és a lábak legfeljebb 15 cm-re emelkedjenek fel. Tartsd ki a véghelyzetet. Lélegezz ki és egyszerre lazítsd el az egész testet. `,
      repetition: '5x',
      imgSrc: 'naukaszana.jpg'
    },{
      title: 'Csakki csalanászana (malomkörzés)',
      description: `Kilégzés alatt oldalt félkörben előre, belégzés alatt a másik oldalon visszafelé körzünk. Figyelj a köldöktájék (Manipura) érzeteire. Ez a gyakorlat energiablokk oldó, a manipura csakra blokkját oldja és egyben fokozza a vitalitást.`,
      repetition: '5-5x',
      imgSrc: 'csakki_csalanaszana.jpg'
    },{
      title: 'Pascsimóttánászana (hátsó nyújtó póz)',
      description: `Próbáld erőltetés mentesen végezni, ha reggel még nehezen megy, akkor használj hevedert, vagy tedd a fejed a székre és talább 20 légzésig maradj benne. Ez elcsendesíti az elmét, csökkenti a tüzet. Figyelj a nyugdot légzésre és vidd a figyelmedet egyre jobban befelé a légzésről egyéb belső érzetekre. `,
      repetition: '20 légzésig',
      imgSrc: 'pascsimottanaszana.jpg'
    },{
      title: 'Maricsjászana',
      description: `Ülő csavarás, nyújtott lábas ülő helyzetből indulsz, majd egyik lábadat behajlítod és a másik láb térde mellé teszed a lábfejet, megfogod a térdet ellenkező kézzel és kilégzés alatt fordulsz hátra. Figyelj a gerinc nyújtására minden belégzés alatt, majd minden kilégzés alatt kicsit még próbálj csavarodni. Ne erőltesd. `,
      repetition: '10-10 légzésig',
      imgSrc: 'maricsjaszana.jpg'
    },{
      title: 'xKhatu Pranam',
      repetition: '1-1 kör mindkét oldalra'
    },{
      title: 'Adho Mukha Svanászana (kutyapóz)',
      description: `10 légzésig tartani, majd előre lépsz az egyik lábbal és felállsz álló helyzetbe. Vidd a súlypontot a lábak felé, sarkakat nyújtsd a talaj felé, amivel fokozod a lábak nyújtását.`,
      repetition: '10 légzésig',
      imgSrc: 'adho_mukha_svanaszana.jpg'
    },{
      title: 'Tirjaka Tadászana (hajladozó pálmafa póz)',
      description: `Kilégzés alatt oldalra, majd belégzésre vissza középre, majd kilégzés alatt a másik oldalra és belégzésre vissza.`,
      repetition: '5x',
      imgSrc: 'tirjaka_tadaszana.jpg'
    },{
      title: 'Utkatászana (széktartás)',
      description: `A lábak teljesen össze vannak zárva, csípőt billentsd, farokcsontot húzd magad alá, majd nyújtsd a hátadat, karokat felfelé. A térdek finom összenyomásával tudod tartani könnyebben a pózt. Sarkadat könyvre teheted.`,
      repetition: '5-10 légzésig',
      imgSrc: 'utkataszana.jpg'
    },{
      title: 'Trikónászana (háromszög póz)',
      description: `Figyelemösszpontosítás a talp és talaj közötti érintkezésen a hátsó lábnál (külső talpél, sarok). Hátsó lábat falhoz is nyomhatod.`,
      repetition: '2x dinamikusan, majd 10 légzésig mindkét oldalra',
      imgSrc: 'trikonaszana.jpg'
    },{
      title: 'Virabhadrászana (Hősi póz 2.)',
      description: `Figyelemösszpontosítás a talp és talaj közötti érintkezésen a hátsó lábnál (külső talpél, sarok). Hátsó lábat falhoz is nyomhatod.`,
      repetition: '2x dinamikusan, majd 10 légzésig mindkét oldalra',
      imgSrc: 'virabhadraszana.jpg'
    },{
      title: 'Bhudzsangászana (kobra póz)',
      description: `Kezek a mellkas mellett. Csak addig emelkedj, hogy az alhas a talajon maradjon.`,
      repetition: '3x dinamikusan, majd 10 légzésig mindkét oldalra',
      imgSrc: 'bhudzsangaszana.jpg'
    },{
      title: 'Viparíta Karaní Ászana (félgyertya)',
      repetition: '2-5 percig',
      imgSrc: 'viparita_karani_aszana.jpg'
    },{
      title: 'Savászana, relaxáció',
      repetition: '5 percig',
      imgSrc: 'savaszana.jpg'
    }
  ]
};

const PRANAYAMA_PREPARATION: TaskSequence = {
  title: 'Pránajáma előkészítés',
  tasks: [
    {
      title: 'Szúrja namszkár krija',
      description: `1. Zárt állásban, karjaink kinyújtva és tenyereink oldalról a combunkat érintik. Belélegzéssel lőre fordítjuk a tenyereinket, kilégzéssel tenyereink ismét a combunkat érintik. \n\n2. Belélegzésünk első felében tenyereinket előre fordítjuk és a második fele alatt ívben Namaszkár mudrába összeillesztjük. Kilégzés első reszében leeresztjük karjainkat, tenyerek előre néznek, második felében ismét érintik a combunkat. \n\n3. Belégzésünk első harmadában tenyereinket előre fordítjuk és hasi légzőmozgással lélegzünk be, második harmadában Namaszkár mudra és mellkasi légzés, harmadik harmadnál karokat fejünk fölé emeljük és összeillesztjük a tenyereinket, kulcsonti légzéssel lélegzünk. \n\n4. A belégzés azonos az előző gyakorlattal. Kilégzésnél hátrahajlunk és egy harmadát a levegőnek kilélegezzük. A kilégzés második harmadában kitárjuk a karjainkat és a harmadik harmadban leeresztjük a karjainkat a kinduló helyzetbe.`,
      repetition: '4 kör minden fázisból '
    },{
      title: 'Uddijána bandha',
      description: `Áll egyenesen, terpeszd szét a lábad csípő szélességben. Hajolj előre, helyezd a kezeket a combokra vagy a térdekre. Lélegezz ki teljesen és tartsd kint a levegőt. \nHúzd szét a mellkasod mintha belélegeznél (vállakat kissé hátra), de ne engedj levegőt beáramolni a légutakba. Húzd össze a hangrést, így a hasad be fog húzódni és azt fogod érezni, hogy a has a felső részét behúzod a bordák felé. \nTartsd meg a teljes behúzást 5-20 másodpercig a kapacitásod szerint. Azután térj vissza.\nLazítsd el a hasad, lélegezz be és egyenesedj fel. \nMindig üres hassal gyakorold. `,
      repetition: '3x'
    },{
      title: 'Agniszára krija',
      description: `Alaphelyzet mint az Uddijána bandhánál. Anélkül, hogy belélegeznél nyomd ki a hasad, mintha egy léggömböt fújnál fel, tartsd meg 2 másodpercig, majd újra húzd be a hasad, tartsd meg 2 másodpercig. Ismételd ezt 10-15x, majd lélegezz be.`,
      repetition: '10-15 ismétlés 3x'
    },{
      title: 'Szimha mudra (Szimhászana)',
      description: `Ülj vadzsrászanában (sarokülésben). Emeld fel a ülőcsontokat kissé és keresztezd a lábfejeket bokában, hogy a jobb lábfej a bal fölé kerüljön, mint egy olló. Majd ülj vissza a sarkakra, és a kezeket az azonos térden nyugtasd szétterpesztett ujjakkal.\nLélegezz be.\nNyújtsd ki teljesen a nyelvedet szájon át hangosan kilélegezve, a tekinteted a homlokod közepére irányítsd, lapockákat húzd össze, a mellkasod nyisd.\nMiután teljesen kilélegeztél, húzd vissza a nyelvet, csukd be a szád és lazíts el minden feszültséget a testben, a korokban. `,
      repetition: '3-5x'
    },{
      title: 'Dzsíhva bandha (nyelvzár)',
      description: `A nyelv hegyét vidd a felső fogsorhoz és szívd fel a nyelv közepét a szájpadláshoz. Eközben a nyakizmok erősen megfeszülnek. \nCsettintéshez készülve a csettintő hang előtt megállítjuk a nyelvet a nyelvféket teljsen felhúzva. \nAmikor kezdőként gyakoroljuk, akkor nyugodtan csettinthetünk a nyelvünkkel. `,
      repetition: '5x'
    },{
      title: 'Brahma mudra',
      description: `Üllj kényelmes meditációs ülésben, kezeidet tedd tenyérrel felfelé a térdekre, vagy combokra. Lazítsd a vállaidat és a karjaidat. Fejed egyenes. Tudatosítsd a légzésedet. Egy percig végezz nyugodt, egyenletes, lassú ki- és belégzést.Csendesítsd el az elméd, vidd a figyelmed befelé.\nMegtartva a nyugodt, egyenletes, folyamatos légzésed, több légzés alatt fordítsd el balra a fejed, miközben a nyitott szemeddel is erősen balra nézel. Annyira fordítsd a fejed, amennyire csak tudod. Ugyanilyen tempóban és tudatosságban fordítsd vissza a fejed középhelyzetbe (szemek továbbra is balra néznek). \nUgyanezt ismételd meg jobbra, a szemeidet is jobboldalra irányítva. \nMajd középhelyzetbe visszatérve nézz az orrod hegyére (naszikagra dristhi) és emeld a fejedet hátra folyamatosan nyújtva tartva a nyakat. \nMajd a mozgás felső végpontján a szemeidet állítsd át a homlokközéppontra (brúmadja dristhi) és így hajtsd le a fejet folyamatosan nyújtva tartva a nyakat úgy, hogy az állat a mellkasi gödörhöz érjen. \nEkkor csukd be a szemed, lazítsd el és úgy hozd vissza a kiinduló helyzetbe. `,
      repetition: '3x'
    },{
      title: 'Kapálabháti krija (hiperventillációs légzés)',
      description: `Üljünk egy kényelmes meditációs ülésben, kéztartás lehet a csin vagy gjána mudra. Hunyjuk be a szemünket és lazítsuk el az egész testet. \nLélegezzünk be mélyen, tágítva a hasat, majd lélegezzünk ki a hasizmok erőteljes összehúzásával, gyors berántásával. Ekkor gyorsan kiáramlik a levegő. Olyan, mintha egy gyertyát akarnánk elfújni az orrunkon keresztül. \nNe erőltessük. A következő belégzés úgy történik, hogy passzívan hagyjuk a hasizmokat tágulni. \nAz utolsó gyors kilégzés után tartsuk kint a levegőt és végezzünk lélegzetvisszatartást. Amikor légszomj keletkezik, lélegezzünk be. \nFontos, hogy a légzés a hasból történjen, ne a mellkasból. `,
      repetition: '3x'
    }
  ]
};

const PRANAYAMA: TaskSequence = {
  title: 'Pránajáma',
  tasks: [
    {
      title: 'Uddzsáji pránajáma',
      description: `...`,
      repetition: '1:2 arányban 20x'
    },{
      title: 'Brahmarí pránajáma (zümmögő méh lélegzés)',
      description: `Kényelmes belégzés után hosszú jóleső kilégzés, amíg a levegőd tart az "M" hangot énelekve egy hangon. Megszoktatja veled a lágy finom kilégzést.`,
      repetition: '20x'
    }
  ]
};

export const SADHANA:Sadhana = {
  created: new Date('2021.02.19'),
  sequences: [ASANA, PRANAYAMA_PREPARATION, PRANAYAMA]
}
