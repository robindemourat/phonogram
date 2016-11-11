/**
 * Phonogram French Poetic Unit Tests
 * ===================================
 */
import {poetic} from '../../src/french';

export default {
  fn: poetic,
  cases: [
    ['abasourdie', 'abazurdi'],
    ['abbaye', 'abɛi'],
    ['abeille', 'abɛj'],
    ['Abidjan', 'abidʒã'],
    ['accent', 'aksã'],
    ['accentuer', 'aksãtye'],
    ['Agen', 'aʒẽ'],
    ['aigüe', 'ɛgy'],
    ['aiguës', 'ɛgy'],
    ['ail', 'aj'],
    ['ainsi', 'ẽsi'],
    ['alcool', 'alkɔl'],
    ['alcoolisé', 'alkɔlize'],
    ['Aleppes', 'alɛp'],
    ['Alix', 'aliks'],
    ['almanach', 'almana'],
    ['altesse', 'altɛs'],
    ['accable', 'akabl'],
    ['accélérer', 'akselere'],
    ['accentuation', 'aksãtyasjõ'],
    ['âme', 'am'],
    ['ambiance', 'ãbjãs'],
    ['amer', 'amɛr'],
    ['amphétamine', 'ãfetamin'],
    ['amphore', 'ãfɔr'],
    ['an', 'ã'],
    ['annuité', 'anɥite'],
    ['antagoniste', 'ãtagonist'],
    ['antisocial', 'ãtisosjal'],
    ['août', 'ut'],
    ['aplomb', 'aplõ'],
    ['apostat', 'aposta'],
    ['asphyxier', 'asfiksje'],
    ['arabesque', 'arabɛsk'],
    ['architecture', 'arʃitɛktyr'],
    ['arhe', 'ar'],
    ['arriveront', 'arivørõ'],
    ['Arnoult', 'arnu'],
    ['aux', 'o'],
    ['Auxerres', 'osɛr'],
    ['aulx', 'o'],
    ['auxilliaire', 'oksiljɛr'],
    ['ayant', 'ɛjã'],
    ['ayatollah', 'ajatɔla'],
    ['ayez', 'ɛje'],
    ['azimut', 'azimyt'],

    ['Bach', 'bak'],
    ['badaud', 'bado'],
    ['badauds', 'bado'],
    ['baie', 'bɛ'],
    ['baignoire', 'bɛnwar'],
    ['bâillement', 'bajømã'],
    ['barbecue', 'barbøkju'],
    ['Baudelaire', 'bodølɛr'],
    ['beauvillaine', 'bovilɛn'],
    ['bel', 'bɛl'],
    ['belle', 'bɛl'],
    ['belles', 'bɛl'],
    ['beau', 'bo'],
    ['Bengal', 'bẽgal'],
    ['Benjamin', 'bẽʒamẽ'],
    ['Benoît', 'bønwa'],
    ['Benzène', 'bẽzɛn'],
    ['beur', 'bʌr'],
    ['beurre', 'bʌr'],
    ['beurré', 'børe'],
    ['bibelot', 'bibelo'],
    ['bitte', 'bit'],
    ['blanc', 'blã'],
    ['bleu', 'blø'],
    ['boa', 'boa'],
    ['bœuf', 'bʌf'],
    ['bogoss', 'bogɔs'],
    ['bonbon', 'bõbõ'],
    ['bonheur', 'bonʌr'],
    ['boulgour', 'bulgur'],
    ['bretzel', 'bretsɛl'],
    ['brioche', 'brjɔʃ'],
    ['broc', 'bro'],
    ['Bruxelles', 'brysɛl'],
    ['bue', 'by'],
    ['buisson', 'bɥisõ'],
    ['but', 'byt'],

    ['cacao', 'kakao'],
    ['cacochyme', 'kakoʃim'],
    ['caecum', 'sekʌm'],
    ['cæcal', 'sekal'],
    ['calmement', 'kalmømã'],
    ['camembert', 'kamãbɛr'],
    ['canevas', 'kanøva'],
    ['Carentan', 'karãtã'],
    ['cartes', 'kart'],
    ['cases', 'kaz'],
    ['ce', 'sø'],
    ['ceci', 'søsi'],
    ['cerf', 'sɛr'],
    ['ceriseraies', 'sørizørɛ'],
    ['chahut', 'ʃay'],
    ['chaire', 'ʃɛr'],
    ['chaldéen', 'kaldeẽ'],
    ['champ', 'ʃã'],
    ['champs', 'ʃã'],
    ['changeant', 'ʃãʒã'],
    ['charmille', 'ʃarmij'],
    ['chateau', 'ʃato'],
    ['chateaux', 'ʃato'],
    ['chemin', 'ʃømẽ'],
    ['chevreuil', 'ʃøvrʌj'],
    ['chien', 'ʃjẽ'],
    ['chient', 'ʃi'],
    ['chiropracteur', 'kiropraktʌr'],
    ['chiroubles', 'ʃirubl'],
    ['chnoque', 'ʃnɔk'],
    ['chorizo', 'ʃorizo'],
    ['chrysanthème', 'krizãtɛm'],
    ['chtonien', 'ktonjẽ'],
    ['chut', 'ʃyt'],
    ['citroën', 'sitroɛn'],
    ['claymore', 'klɛmɔr'],
    ['clef', 'kle'],
    ['client', 'kliã'],
    ['clientélisme', 'kliãtelism'],
    ['cloque', 'klɔk'],
    ['coelacanthe', 'kølakãt'],
    ['cœlacanthe', 'kølakãt'],
    ['coin', 'kwẽ'],
    ['coing', 'kwẽ'],
    ['coings', 'kwẽ'],
    ['coït', 'koit'],
    ['coit', 'kwa'],
    ['col', 'kɔl'],
    ['cool', 'kul'],
    ['compte', 'kõt'],
    ['confidentiel', 'kõfidãsjɛl'],
    ['confidentielle', 'kõfidãsjɛl'],
    ['cognitif', 'konitif'],
    ['comtesse', 'kõtɛs'],
    ['conne', 'kɔn'],
    ['constitution', 'kõstitysjõ'],
    ['contestation', 'kõtɛstasjõ'],
    ['contretemps', 'kõtrøtã'],
    ['coucou', 'kuku'],
    ['couille', 'kuj'],
    ['couscous', 'kuskus'],
    ['craie', 'krɛ'],
    ['crapaud', 'krapo'],
    ['croc', 'kro'],
    ['cruel', 'kryɛl'],
    ['cul', 'ky'],

    ['daim', 'dẽ'],
    ['darmstadt', 'darmstat'],
    ['demi', 'dømi'],
    ['démocratie', 'demokrasi'],
    ['dengue', 'dẽg'],
    ['dessein', 'desẽ'],
    ['deuil', 'dʌj'],
    ['dévorée', 'devore'],
    ['dieu', 'djø'],
    ['dix', 'dis'],
    ['doigt', 'dwa'],
    ['Doisneau', 'dwano'],
    ['dompter', 'dõpte'],
    ['Doubs', 'du'],
    ['du', 'dy'],
    ['dû', 'dy'],
    ['due', 'dy'],

    ['effet', 'efɛ'],
    ['effort', 'efɔr'],
    ['effraie', 'efrɛ'],
    ['égaye', 'egɛj'],
    ['élection', 'elɛksjõ'],
    ['elle', 'ɛl'],
    ['Emmanuel', 'ɛmanyɛl'],
    ['emmerder', 'ãmɛrde'],
    ['empâtement', 'ãpatømã'],
    ['en', 'ã'],
    ['ennui', 'ãnɥi'],
    ['ennuyer', 'ãnɥije'],
    ['éphore', 'efɔr'],
    ['essaim', 'esẽ'],
    ['essaime', 'esɛm'],
    ['ès', 'ɛs'],
    ['es', 'ɛ'],
    ['est', 'ɛ'],
    ['estomac', 'ɛstoma'],
    ['et', 'e'],
    ['eu', 'y'],
    ['eue', 'y'],
    ['euphorie', 'øfori'],
    ['eusse', 'ys'],
    ['eussiez', 'ysje'],
    ['Eustache', 'østaʃ'],
    ['eût', 'y'],
    ['eux', 'ø'],
    ['éventualité', 'evãtyalite'],
    ['excalibur', 'ɛkskalibyr'],
    ['exception', 'ɛksepsjõ'],
    ['excitation', 'ɛksitasjõ'],
    ['existence', 'ɛgzistãs'],
    ['exulter', 'ɛgzylte'],
    ['exutoire', 'ɛgzytwar'],

    ['factureriez', 'faktyrørje'],
    ['faïence', 'fajãs'],
    ['faisan', 'føzã'],
    ['faisons', 'føzõ'],
    ['faisiez', 'føzje'],
    ['faon', 'fã'],
    ['faute', 'fot'],
    ['femme', 'fam'],
    ['fenouil', 'fønuj'],
    ['fer', 'fɛr'],
    ['fête', 'fɛt'],
    ['feuille', 'fʌj'],
    ['feuilles', 'fʌj'],
    ['feuilleton', 'fʌjtõ'],
    ['fils', 'fis'],
    ['finaux', 'fino'],
    ['fleur', 'flʌr'],
    ['floc', 'flɔk'],
    ['flop', 'flɔp'],
    ['fluet', 'flyɛ'],
    ['fol', 'fɔl'],
    ['folie', 'foli'],
    ['folle', 'fɔl'],
    ['folles', 'fɔl'],
    ['forestier', 'forɛstje'],
    ['forêt', 'forɛ'],
    ['fouine', 'fwin'],
    ['fourmille', 'furmij'],
    ['fresne', 'frɛn'],
    ['froc', 'frɔk'],
    ['Fronteval', 'frõtøval'],
    ['fuyant', 'fɥijã'],

    ['gageure', 'gaʒyr'],
    ['galop', 'galo'],
    ['gaufres', 'gofr'],
    ['gazole', 'gazɔl'],
    ['genoux', 'ʒenu'],
    ['gérard', 'ʒerar'],
    ['gleyre', 'glɛr'],
    ['gout', 'gu'],
    ['goût', 'gu'],
    ['gnaquer', 'njake'],
    ['gnognotte', 'njonjɔt'],
    ['gnôle', 'njol'],
    ['gnon', 'njõ'],
    ['gnosticisme', 'gnostisism'],
    ['gnou', 'gnu'],
    ['gouache', 'gwaʃ'],
    ['gouine', 'gwin'],
    ['gourd', 'gur'],
    ['gourre', 'gur'],
    ['gourrer', 'gure'],
    ['Gracq', 'grak'],
    ['Grimault', 'grimo'],
    ['grue', 'gry'],
    ['guacamole', 'gwakamɔl'],
    ['guatémala', 'gwatemala'],
    ['guatémaltèque', 'gwatemaltɛk'],
    ['guam', 'gwam'],
    ['guillaume', 'gijom'],
    ['güise', 'gyiz'],
    ['gwyneth', 'gwinet'],
    ['gypaète', 'ʒipaɛt'],

    ['hasard', 'azar'],
    ['haschich', 'aʃiʃ'],
    ['hauteville', 'otøvil'],
    ['hêtre', 'ɛtr'],
    ['homosexuel', 'omosɛksyɛl'],
    ['horrible', 'oribl'],
    ['hun', 'ẽ'],

    ['idoine', 'idwan'],
    ['ignoble', 'injɔbl'],
    ['illégal', 'ilegal'],
    ['imbu', 'ẽby'],
    ['impatient', 'ẽpasjã'],
    ['incognito', 'ẽkonito'],
    ['inquiet', 'ẽkjɛ'],
    ['inquisition', 'ẽkizisjõ'],
    ['institut', 'ẽstity'],
    ['irakiennes', 'irakjɛn'],

    ['jaillir', 'ʒajir'],
    ['jaunisse', 'ʒonis'],
    ['javelot', 'ʒavelo'],
    ['je', 'ʒø'],
    ['Jean', 'ʒã'],
    ['jeanne', 'ʒan'],
    ['jeu', 'ʒø'],
    ['jeun', 'ʒẽ'],
    ['joliet', 'ʒoljɛ'],
    ['julie', 'ʒyli'],

    ['laitue', 'lɛty'],
    ['lapin', 'lapẽ'],
    ['lavabo', 'lavabo'],
    ['le', 'lø'],
    ['leur', 'lʌr'],
    ['leurre', 'lʌr'],
    ['litigieuse', 'litiʒjøz'],
    ['Livaro', 'livaro'],
    ['lobe', 'lɔb'],
    ['lunaire', 'lynɛr'],
    ['lut', 'ly'],
    ['lyncher', 'lẽʃe'],

    ['mangeant', 'mãʒã'],
    ['mangeoire', 'mãʒwar'],
    ['mangeoires', 'mãʒwar'],
    ['manger', 'mãʒe'],
    ['manteau', 'mãto'],
    ['mahous', 'maus'],
    ['maous', 'maus'],
    ['me', 'mø'],
    ['même', 'mɛm'],
    ['ménagerie', 'menaʒøri'],
    ['ment', 'mã'],
    ['mer', 'mɛr'],
    ['mercredi', 'mɛrkrødi'],
    ['mes', 'mɛ'],
    ['mesclun', 'mɛsklẽ'],
    ['mesnil', 'mɛnil'],
    ['messieurs', 'mesjø'],
    ['meurs', 'mʌr'],
    ['meurt', 'mʌr'],
    ['mezzanine', 'mɛdzanin'],
    ['mille', 'mil'],
    ['millepatte', 'milpat'],
    ['millet', 'mijɛ'],
    ['milliard', 'miljar'],
    ['milliers', 'milje'],
    ['million', 'miljõ'],
    ['minutie', 'minysi'],
    ['moelle', 'mwal'],
    ['moelleux', 'mwalø'],
    ['moignon', 'mwanjõ'],
    ['moitié', 'mwatje'],
    ['monsieur', 'møsjø'],
    ['monsieurs', 'møsjø'],
    ['montez', 'mõte'],
    ['montjoie', 'mõʒwa'],
    ['motte', 'mɔt'],
    ['moue', 'mu'],
    ['moult', 'mult'],
    ['Munster', 'mẽstɛr'],
    ['Münster', 'mẽstɛr'],

    ['nerf', 'nɛr'],
    ['net', 'nɛt'],
    ['nette', 'nɛt'],
    ['neuf', 'nʌf'],
    ['ney', 'nɛ'],
    ['Nietzsche', 'njetsʃ'],
    ['nimbée', 'nẽbe'],
    ['noir', 'nwar'],
    ['nonne', 'nɔn'],
    ['nonnette', 'nɔnɛt'],
    ['nos', 'no'],
    ['noue', 'nu'],
    ['noyau', 'nwajo'],
    ['noyauter', 'nwajote'],
    ['nuit', 'nɥi'],

    ['oc', 'ɔk'],
    ['occitane', 'oksitan'],
    ['occir', 'oksir'],
    ['ocre', 'ɔkr'],
    ['oeil', 'ʌj'],
    ['œil', 'ʌj'],
    ['oeuf', 'ʌf'],
    ['oignon', 'onjõ'],
    ['oint', 'wẽ'],
    ['oiseau', 'wazo'],
    ['ombres', 'õbr'],
    ['oncques', 'õk'],
    ['onion', 'onjõ'],
    ['oreille', 'orɛj'],
    ['ornithorynque', 'ornitorẽk'],
    ['ôter', 'ote'],
    ['où', 'u'],
    ['ouaf', 'waf'],
    ['Ouarzazate', 'warzazat'],
    ['oui', 'wi'],
    ['ouïe', 'ui'],
    ['ouïgour', 'uigur'],
    ['ouistiti', 'wistiti'],
    ['outil', 'uti'],
    ['Ouzbékistan', 'uzbekistã'],
    ['oyez', 'oje'],

    ['paimpolaise', 'pẽpolɛz'],
    ['pain', 'pẽ'],
    ['paon', 'pã'],
    ['papaye', 'papaj'],
    ['papier', 'papje'],
    ['parfum', 'parfẽ'],
    ['parpaing', 'parpẽ'],
    ['parterre', 'partɛr'],
    ['patiemment', 'pasjamã'],
    ['patience', 'pasjãs'],
    ['patient', 'pasjã'],
    ['patientèle', 'pasjãtɛl'],
    ['patronage', 'patronaʒ'],
    ['pause', 'poz'],
    ['pays', 'pɛi'],
    ['paysan', 'pɛizã'],
    ['pébroc', 'pebrɔk'],
    ['pelote', 'pølɔt'],
    ['perdrix', 'pɛrdri'],
    ['pestacle', 'pɛstakl'],
    ['pétaouchnok', 'petauʃnɔk'],
    ['pétrole', 'petrɔl'],
    ['pharisien', 'farizjẽ'],
    ['pharynx', 'farẽks'],
    ['photo', 'foto'],
    ['pied', 'pje'],
    ['pigeon', 'piʒõ'],
    ['pingouin', 'pẽgwẽ'],
    ['piqûre', 'pikyr'],
    ['plomb', 'plõ'],
    ['plombes', 'plõb'],
    ['plongeoir', 'plõʒwar'],
    ['plût', 'ply'],
    ['pneu', 'pnø'],
    ['poêle', 'pwal'],
    ['poids', 'pwa'],
    ['poing', 'pwẽ'],
    ['point', 'pwẽ'],
    ['poix', 'pwa'],
    ['pokémon', 'pɔkemõ'],
    ['pomme', 'pɔm'],
    ['pommes', 'pɔm'],
    ['pommeaux', 'pɔmo'],
    ['Pommeraye', 'pɔmørɛ'],
    ['pose', 'poz'],
    ['posément', 'pozemã'],
    ['poubelle', 'pubɛl'],
    ['poux', 'pu'],
    ['prend', 'prã'],
    ['prient', 'pri'],
    ['prix', 'pri'],
    ['problème', 'problɛm'],
    ['proc', 'prɔk'],
    ['promptement', 'prõptømã'],
    ['provençal', 'provãsal'],
    ['puissamment', 'pɥisamã'],

    ['quadrilatère', 'kwadrilatɛr'],
    ['qualité', 'kalite'],
    ['quantité', 'kãtite'],
    ['quartz', 'kwarts'],
    ['que', 'kø'],
    ['quidam', 'kidam'],
    ['quille', 'kij'],
    ['quoi', 'kwa'],

    ['rach', 'rak'],
    ['rappelle', 'rapɛl'],
    ['rappelez', 'rapøle'],
    ['rat', 'ra'],
    ['raye', 'rɛj'],
    ['rayon', 'rɛjõ'],
    ['rayoner', 'rɛjone'],
    ['reine', 'rɛn'],
    ['remerciements', 'rømɛrsimã'],
    ['renard', 'rønar'],
    ['renart', 'rønar'],
    ['rendre', 'rãdr'],
    ['renne', 'rɛn'],
    ['requartzifier', 'røkwartsifje'],
    ['resnober', 'røsnobe'],
    ['resurgir', 'røsyrʒir'],
    ['rets', 'rɛ'],
    ['rhume', 'rym'],
    ['roi', 'rwa'],
    ['rompt', 'rõ'],
    ['rond', 'rõ'],
    ['ronds', 'rõ'],
    ['rose', 'roz'],
    ['rote', 'rɔt'],
    ['roter', 'rote'],
    ['roy', 'rwa'],
    ['rue', 'ry'],
    ['rut', 'ryt'],

    ['salop', 'salo'],
    ['salut', 'saly'],
    ['sagement', 'saʒømã'],
    ['sang', 'sã'],
    ['Saoudite', 'saudit'],
    ['saoul', 'su'],
    ['saoûler', 'sule'],
    ['sashimi', 'saʃimi'],
    ['saut', 'so'],
    ['savon', 'savõ'],
    ['scenario', 'senarjo'],
    ['schnock', 'ʃnɔk'],
    ['schnoque', 'ʃnɔk'],
    ['sciemment', 'sjamã'],
    ['scotcher', 'skotʃe'],
    ['se', 'sø'],
    ['sel', 'sɛl'],
    ['semi', 'sømi'],
    ['semis', 'sømi'],
    ['sensation', 'sãsasjõ'],
    ['sensationnel', 'sãsasjɔnɛl'],
    ['sent', 'sã'],
    ['sentier', 'sãtje'],
    ['serein', 'sørẽ'],
    ['sereins', 'sørẽ'],
    ['serf', 'sɛr'],
    ['ses', 'sɛ'],
    ['shampooing', 'ʃãpwẽ'],
    ['shawarma', 'ʃawarma'],
    ['six', 'sis'],
    ['snob', 'snɔb'],
    ['splendide', 'splãdid'],
    ['sortie', 'sorti'],
    ['soubs', 'su'],
    ['souhaites', 'suɛt'],
    ['squale', 'skwal'],
    ['Staël', 'stɛl'],
    ['stochastique', 'stɔkastik'],
    ['sursaut', 'syrso'],
    ['sursauter', 'syrsote'],
    ['susurrer', 'sysyre'],
    ['synthèse', 'sẽtɛz'],
    ['synthétique', 'sẽtetik'],
    ['syrop', 'siro'],

    ['tabac', 'taba'],
    ['tapecul', 'tapky'],
    ['téraflops', 'teraflɔps'],
    ['terrain', 'tɛrẽ'],
    ['te', 'tø'],
    ['temps', 'tã'],
    ['tes', 'tɛ'],
    ['teub', 'tʌb'],
    ['teubé', 'tøbe'],
    ['thérapie', 'terapi'],
    ['thermostat', 'tɛrmosta'],
    ['Thibault', 'tibo'],
    ['tiare', 'tjar'],
    ['tien', 'tjẽ'],
    ['toc', 'tɔk'],
    ['top', 'tɔp'],
    ['toque', 'tɔk'],
    ['toquer', 'tɔke'],
    ['tous', 'tus'],
    ['toutou', 'tutu'],
    ['tranquille', 'trãkil'],
    ['trans', 'trãs'],
    ['trappes', 'trap'],
    ['tricératops', 'triseratɔps'],
    ['troène', 'troɛn'],
    ['tronc', 'trõ'],
    ['trône', 'tron'],
    ['trop', 'tro'],
    ['truelle', 'tryɛl'],
    ['tuile', 'tɥil'],
    ['tunnel', 'tynɛl'],
    ['turlutte', 'tyrlyt'],
    ['tuyau', 'tɥijo'],

    ['un', 'ẽ'],
    ['unitaire', 'ynitɛr'],
    ['uppercut', 'ypɛrkyt'],

    ['vademecum', 'vademekʌm'],
    ['vair', 'vɛr'],
    ['vent', 'vã'],
    ['verre', 'vɛr'],
    ['vers', 'vɛr'],
    ['vert', 'vɛr'],
    ['veule', 'vøl'],
    ['villa', 'vila'],
    ['villain', 'vilẽ'],
    ['villardière', 'vilardjɛr'],
    ['ville', 'vil'],
    ['vîmes', 'vim'],
    ['voilà', 'wala'],
    ['voir', 'war'],
    ['voiture', 'watyr'],
    ['vos', 'vo'],
    ['vous', 'vu'],
    ['vraie', 'vrɛ'],

    ['wagon', 'vagõ'],
    ['wapiti', 'wapiti'],
    ['wifi', 'wifi'],

    ['xylophone', 'gzilofɔn'],

    ['yannick', 'janik'],
    ['yaourt', 'jaurt'],
    ['yeux', 'jø'],

    ['zèbre', 'zɛbr'],
    ['zoo', 'zoo'],
    ['zoologie', 'zooloʒi'],
    ['zoulous', 'zulu'],
    ['zyeuter', 'zjøte']
  ]
};
