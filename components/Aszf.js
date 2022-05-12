import { useState } from "react";

const Aszf = ({ isActive, setIsActive }) => {
  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Általános Szállítási Feltételek</p>
          <button
            onClick={() => setIsActive("")}
            className="delete"
            aria-label="close"
          ></button>
        </header>
        <section className="modal-card-body">
          <div></div>
          <br clear="all" />
          <div>
            <p align="center">
              <strong>ÁLTALÁNOS SZERZŐDÉSI FELTÉTELEK</strong>
            </p>
            <h1>
              <u>1.) Általános feltételek:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Jelen Általános Szerződési Feltételek (a továbbiakban: ÁSZF) a
              szállítási szerződés elválaszthatatlan részét képezi, melytől
              felek kizárólag írásban, a cégszerűen aláírt szerződésben
              térhetnek el. Amennyiben ellentmondás mutatkozik a jelen ÁSZF és a
              Megrendelő megrendelése között, jelen ÁSZF-ben foglaltak az
              irányadóak.
            </p>
            <p>
              Az ÁSZF hatálya kiterjed a Megrendelővel kötött összes további
              áru/szolgáltatás szállítására vonatkozó szerződésre is.
            </p>
            <h1>
              <u>2.) Megrendelés és elfogadása:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Megrendelő megrendelését emailen, faxon, vagy egyedi szerződés
              megküldése útján teheti meg. Megrendelő az adott megrendelést
              (telefon) 1-2 munkanapon belül írásban (email, fax) megerősíteni
              tartozik.
            </p>
            <p>Az emailen, vagy faxon tett megrendeléseket a Szállító 1-</p>
            <p>
              8 munkanapon belül levélben (email, fax) megerősíti,
              visszaigazolja. Szállítónak a kézhezvételtől számított 2
              munkanapon belül jogában áll a megrendelést visszautasítani.
              Amennyiben Szállító nem utasítja vissza, úgy az elfogadottnak
              tekintendő.
            </p>
            <h1>
              <u>3.) Árak:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Az árak adó és egyéb államilag megállapított fizetési
              kötelezettség nélkül értendők. Az ügylettel kapcsolatos minden
              ilyen költséget Megrendelő fizet, kivéve, ha Szállító olyan,
              mentességet bizonyító okiratot csatol, melyet a megfelelő hatóság
              elfogad. Az árak nem tartalmazzák, így Megrendelőt terhelik azok a
              költségek, melyek speciális csomagolással összefüggő, vagy
              különleges szállítási és raktározási körülményeket biztosító
              költség, kivéve, ha Szállító eredeti ajánlatában, írásban
              felajánlotta és az ajánlati árba beleértette.
            </p>
            <h1>
              <u>4.) Módosítás:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Minden olyan változás, mely a készülékre, berendezésre hatással
              van, vagy másképpen befolyásolja a szerződött tevékenységet, csak
              Felek kölcsönös, írásos egyetértésével érvényesíthető, úgymint
              vételár, szállítási időszak, fizetési feltétel, vagy egyéb.
            </p>
            <p>
              Szállító a Megrendelő bárminemű részletes írásbeli megrendelés
              módosítását csak az általa írásban történt visszaigazolást
              követően veszi figyelembe.
            </p>
            <h1>
              <u>5.) Tulajdonjog átruházás és kárveszélyviselés:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              A készülék tulajdonjoga a vételár teljes kifizetését követően
              száll át Megrendelőre. A tulajdonjog megszerzéséig Megrendelő a
              szállítás tárgyát, mint a
            </p>
            <br clear="all" />
            <p>
              Szállító tulajdonát köteles raktározni és biztosítani (annak
              teljes csereértékén), valamint tartozik elszámolni a Szállítónak
              minden egyes ügyletről, beleértve a biztosítási eljárást is.
              Szállító fenntartja a jogát a szállítás tárgyát visszaigényelni
              nem fizetés esetén.
            </p>
            <p>
              A kárveszélyviselés a szerződéskötés idején hatályos INCOTERMS
              szabályai szerint alakul, amennyiben az ügylet külkereskedelmi
              jellegű.
            </p>
            <p>
              Egyéb esetekben a kárveszély a birtokba adással száll át a
              Megrendelőre.
            </p>
            <p>
              Amennyiben a szerződésben nincs utalás a birtokba adásra, azt úgy
              kell tekinteni, hogy a szerződés tárgyának átvétele a gyártó
              üzemben történt.
            </p>
            <h1>
              <u>6.) Szállítás:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Szállító szállítási ajánlatában szereplő adatok a rendelés
              időpontjában Szállító rendelkezésére álló információkra épülő
              becsült adatok. A szállítási határidő felek megállapodásán alapul
              és a Megrendelőtől származó összes szükséges információ birtokában
              kerül rögzítésre. Szállító fenntartja a jogot rész-szállításra.
            </p>
            <p>
              Amennyiben a Megrendelő tevékenységére vezethető vissza a
              késedelmes szállítás, illetve a Megrendelő bármilyen okból
              elmulasztja a szerződés tárgyát átvenni az esedékességkor, a
              Megrendelőnek ennek ellenére a tervezett szállítási ütem szerinti
              fizetési kötelezettsége keletkezik, mintha a szállítás megtörtént
              volna, vagy késedelmi kamatfizetési kötelezettsége keletkezik,
              mely a jegybanki alapkamat kétszerese. A késedelmi kamat alapja a
              teljes vételár, illetve annak egy része, szállítástól függően,
              kezdő időpontja pedig a tervezett szállítási ütemtől a teljes
              kifizetésig.
            </p>
            <h1>
              <u>7.) A Megrendelő felelőssége:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Megrendelő felelős az áru épségben való megérkezésének
              ellenőrzéséért és megfelelő raktározásáért.
            </p>
            <h1>
              <u>8.) Megvizsgálás, kipróbálás és elfogadás:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              A telepítés színhelyén a próbaüzemet a Megrendelő kérésére a
              Szállító hajtja végre szakembereivel (ellenkező esetben a
              Megrendelő hajtja verge a saját felelőségére) a Megrendelő aktív
              részvételével. A próbaüzem annak igazolására szolgál, hogy a
              leszállított termék teljes, a megrendelő rendszereibe beleillik,
              fizikai sérülés mentes és kész a használatra. A próbaüzemet a
              rendszer megérkezésétől szállított 30 napon belül kell
              végrehajtani. A gyártás színhelyén történt sikeres próbaüzem a
              szerződés tárgyának teljes és végleges
            </p>
            <p>
              elfogadását jelenti. Amennyiben a próbaüzem a rendeltetési helyre
              történő megérkezését követő 30 napot meghaladóan Megrendelőnek
              felróhatóan késik, ez úgy tekintendő, hogy a Megrendelő véglegesen
              elfogadta a terméket.
            </p>
          </div>
          <br clear="all" />
          <div>
            <h1 align="left">
              <u>9.) Bizalmas információk</u>
              <u>14.) Irányadó jog:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
          </div>
          <br clear="all" />
          <div>
            <p>
              Minden információt és anyagot, melyek Megrendelő rendelkezésére
              lettek adva ("bizalmas információk"), Megrendelő bizalmasan kezel.
              Megrendelő nem fed fel bizalmas információt harmadik fél előtt,
              vagy nem használja azt újra a Megrendelőnek szállítottól eltérő,
              más Készülékkel kapcsolatosan Szállító előzetes írásbeli
              egyetértése nélkül.
            </p>
            <p>
              Megrendelő kötelezettségei e pontban a szerződés bármilyen ok
              miatti megszűnését követően is fennmaradnak, de nem alkalmazható
              bármely olyan információra, amely érvényesen és megfelelő módon
              köztudatba került.
            </p>
            <h1>
              <u>10.) A felelősség korlátozása</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Szállító kötelezettsége bármilyen reklamációban, mely szerződésen,
              vétkes magatartáson (ideértve a hanyagságot is), jótálláson
              (kivéve a tulajdonjogi jótállást), szigorú felelősségi alakzaton
              vagy bármi máson alapul, bármilyen veszteségre vagy kárra, mely a
              készülék/termék teljesítményéből vagy annak Megrendelő általi
              működtetéséből ered, nem haladhatja meg a szerződéses ár 40%-át, a
              korlátozás a Szállító termék felelősségbiztosításán és annak
              összegén alapszik.
            </p>
            <h1>
              <u>11.) Következményes károk</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Szállító semmilyen körülmények között nem tehető felelőssé
              bármilyen természetű vagy típusú különleges, közvetett,
              véletlenszerű vagy következményes károkért, tartalmazva, de nem
              korlátozva a használatból, adatokból, haszonból és bevételből,
              termelésből vagy tőkevesztésből származó veszteséget.
            </p>
            <h1>
              <u>12.) Mentesség</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Megrendelő vállalja, hogy mentesíti és megóvja Szállítót minden
              elszenvedett veszteségtől, költségtől vagy kártól, ideértve a jogi
              eljárás költségét, mely Megrendelő hanyagságának, vagy más
              hibájának, vagy szerződésszegésének következményeként Szállítónál
              jelentkezett, vagy amelyet a Szállító jogainak vagy Megrendelő
              kötelezettségeinek kikényszerítésével okozott, vagy amely abból
              ered, hogy a Megrendelő a Készüléket vagy annak egy részét
              rendeltetéstől eltérő módon vagy célra használta, ideértve a mások
              által szállított termékekkel kapcslatos módosításokat és
              használatot.
            </p>
            <h1>
              <u>13.) Választott bírósági eljárás:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Szerződő felek megegyeznek abban, hogy jogvitáikat békés úton
              rendezik, ennek eredménytelensége esetén a Magyar Kereskedelmi és
              Iparkamara mellett működő állandó Választottbíróság kizárólagos
              hatáskörét és illetékességét kötik ki, annak eljárási szabályai
              szerint eljárva.
            </p>
            <br clear="all" />
            <p>
              A felek szerződéseire a magyar anyagi és eljárási jog szabályai az
              irányadóak.
            </p>
            <h1>
              <u>15.) Fizetési feltételek:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Szállító elfogad egy első osztályú bank által kibocsátott, látra
              szóló, visszavonhatatlan, igazolt akkreditívet. A fizetés a
              Szállító tenderében, ajánlatában, illetve árajánlatában
              meghatározott fizetési ütemezés szerint esedékes. Ettől eltérő
              fizetési feltételek a szerződésben meghatározhatók.
            </p>
            <p>
              Késedelmes fizetés - Amennyiben a Megrendelő a fent meghatározott
              időpontban esedékes teljes vételárat nem fizeti ki, anélkül, hogy
              a teljesség igényével meghatároznánk a Szállító jogait és
              jogorvoslati lehetőségeit, a Szállító felfüggesztheti a szállítást
              és ezzel egyidőben késedelmi kamatot követelhet (mindkettőt egy
              esetleges bírósági ítéletet megelőzően és azt követően is). A
              késedelmi kamat a ki nem fizetett összegre vonatkoztatva a
              jegybanki alapkamat kétszeres összege, a vételár teljes
              kifizetéséig.
            </p>
            <h1>
              <u>16.) Vis major:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Sem a Megrendelő, sem a Szállító nem tehető felelőssé bármely
              olyan hibáért, vagy késedelemért, mely vis majornak tekintendő és
              így nem áll a felek kontrollja alatt, tartalmazva, de nem
              korlátozva az alábbiakra: kormány intézkedés, kormányrendelet,
              vagy határozat, háború (akár kinyilatkoztatott, akár nem), katonai
              és polgári zavargások, természeti csapások (áradás, földrendés,
              szélvész, járvány, tűzvész), embargó, sabotage, tengeri
              katasztrófa, sztrájk és munkavállalói viták. Amennyiben valamelyik
              szerződő fél azonnal írásban értesíti a másik felet valamely fenti
              esemény bekövetkeztéről, szolgáltatva az észszerű és szükséges
              bizonyítékokat, a szerződés teljesítésének és végrehajtásának
              határideje meghosszabbodik az esemény, vagy események
              időtartamával. Amennyiben a Megrendelő három hónapot meghaladó
              időre akadályoztatva van a szerződéses kötelezettsége
              teljesítésben, bármelyik félnek lehetősége van a másik félhez
              intézett írásbeli nyilatkozattal a szerződést megszüntetni.
              Amennyiben a szerződés fenti módon szűnik meg, a Megrendelő
              tartozik teljes és végleges kártalanítás címén a szerződésben
              foglalt vételár hátralévő, még kiegyenlítetlen részét megfizetni
              olyan arányban, amilyen százalékban a Szállító a megszünés napjáig
              a szerződést teljesítette.
            </p>
            <h1>
              <u>17.) Jótállás:</u>
            </h1>
            <p align="left">
              <strong></strong>
            </p>
            <p>
              Amennyiben a Szállító írásban másként nem rendelkezik, a Szállító
              az általa gyártott/forgalmazott készülékre annak kivitelezésére
              egy éves jótállást vállal a szállítástól kezdődően, feltéve, hogy
              a Szállító által rendelkezésre bocsátott használati utasítás
              szerint történik a használat. Amennyiben a készülék valamely
              tartozéka, vagy
            </p>
          </div>
          <br clear="all" />
          <p align="left">
            alkalrésze kijavításra, vagy kicserélésre kerül a jótállási idő
            alatt, úgy a kijavított, vagy kicserélt
          </p>
          <p align="left">
            tartozékra, vagy alkatrészre az eredeti jótállási időből még
            hátralévő rész képezi a jótállási időtartamot.
          </p>
          <p align="left">
            Ez a jótállás nem alkalmazható az alábbiakból eredő hibákra:
          </p>
          <p align="left">a) szándékos károkozás és hanyagság;</p>
          <p align="left">b) természetes elhasználódás;</p>
          <p>
            c) a beiktatás és/vagy fenntartás a Megrendelő, vagy harmadik fél
            részéről;
          </p>
          <p>d) rendeltetés ellenes használat, vagy fokozott igénybevétel;</p>
          <p>
            e) a Szállító írásbeli hozzájárulása nélkül a Megrendelő, vagy
            harmadik fél részéről a terméken végzett módosítás, vagy átalakítás;
          </p>
          <p>
            f) a Szállító által megadott iránymutatás szerinti környezeti
            feltételek fenntartását Megrendelő elmulasztotta, ideértve, de nem
            korlátozva a megfelelő villamosenergia, hőmérséklet és páratartalom
            ellenőrzést;
          </p>
          <p>
            g) harmadik fél által megrendelésre gyártott készüléknek az ABB
            készülékbe történő beszerelése és a Megrendelő részére történő
            viszonteladása céljából, kivéve, ha a harmadik fél (gyártó) jótáll
            az általa készített termékért, valamint a termék kompatibilitásáért;
          </p>
          <p>
            h) azok az okok, amelyek a Szállító észszerű kontrollján kívüli
            esnek.
          </p>
          <h1 align="left">
            <u>18.) Elállás:</u>
          </h1>
          <p align="left">
            <strong></strong>
          </p>
          <p>
            Amennyiben a készülék/termék még nem került leszállításra, a
            Megrendelő a Szállítóhoz intézett egyoldalú írásos nyilatkozattal
            elállhat a szerződéstől, feltéve, hogy az alábbi fizetési
            kötelezettségnek eleget tesz:
          </p>
          <p>
            a.) 0 - 15 nap a Megrendelés elfogadását követően, a szerződésben
            foglalt vételár 10%-a;
          </p>
          <p>
            b.) 16-30 nap a Megrendelés elfogadását követően, a szerződésben
            foglalt vételár 25%-a;
          </p>
          <p>
            c.) A Megrendelés elfogadását követő 30 napon túl az alábbiak közül
            a magasabb összeg:
          </p>
          <p>* a vételár 25%-a, vagy</p>
          <p>
            * a vételár azon százaléka, mely a termékre fordított munka
            mennyiségével arányban áll. Szállítónak az elállás esetére vonatkozó
            fizetési kötelezettséget tartalmazó meghatározása végleges és
            bizonyító erejű.
          </p>
          <h1 align="left">
            <u>19.) Megszűntetés:</u>
          </h1>
          <p align="left">
            <strong></strong>
          </p>
          <p align="left">Ezt a pontot kell alkalmazni, amennyiben</p>
          <p>a) Megrendelő a szerződés bármely feltételét megszegi;</p>
          <p>
            b) Megrendelő megszünteti, vagy felfüggeszti üzleti tevékenységét;
          </p>
          <p>
            c) Megrendelő képtelenné válik szerződéses kötelezettségeinek
            teljesítésére, mivel azok lejártak, vagy csődeljárás, illetve
            bírósági végrehajtási eljárás van megrendelő ellen folyamatban, vagy
            fizetésképtelenség esete áll fenn, illetve
          </p>
          <br clear="all" />
          <p>
            csődgondnokot, vagy bírósági végrehajtót rendeltek ki, vagy ezek
            kijelölése van folyamatban, vagy a hitelezők kielégítése céljából a
            Megrendelő részéről bármilyen intézkedés szükségessé válik;
          </p>
          <p>
            d) Megrendelő pénzügyi helyzetéből arra lehet következtetni, hogy
            képtelen lesz a készülék árát időben kifizetni és képtelen
            felajánlani bármilyen szükséges biztosítékot arra vonatkozóan, hogy
            a készülék időben kifizetésre kerül.
          </p>
          <p>
            Amennyiben e pont alkalmazásra kerül, anélkül, hogy a Szállító
            jogait, vagy jogorvoslati lehetőségét a teljesség igényével
            meghatároznánk, a Szállító felmondhatja a szerződést, vagy
            felfüggesztheti a további szállításokat a Megrendelő felé jelentkező
            mindennemű kötelezettség nélkül és amennyiben a készüléket
            leszállították, de még nem fizették ki, az azonnal esedékessé válik
            minden korábbi ellentétes értelmű megállapodás ellenére.
          </p>
          <p>
            A szerződés bármilyen okból történő megszüntetése nem érinti a
            megszüntetésig teljesített szolgáltatásokat.
          </p>
          <h1>
            <u>20.) Jogról való lemondás:</u>
          </h1>
          <p>
            A szerződésből eredő jogok gyakorlása során bármelyik fél
            mulasztása, vagy késedelme nem tekinthető jogról való lemondásnak,
            valamint a szerződésből eredő egyes jogok gyakorlása, vagy jogok
            részbeni gyakorlása nem zárja ki a további, vagy más módon történő
            joggyakorlást, vagy bármilyen más lehetséges jogok gyakorlását.
          </p>
          <h1>
            <u>21.) Elválaszthatóság:</u>
          </h1>
          <p>
            Amennyiben a szerződés egy része, illetve bizonyos pontjai
            érvénytelenek, illetve kikényszeríthetetlenek, a szerződés többi
            része, illetve pontjai változatlanul érvényben maradnak, amennyiben
            megfelelnek az adott, vagy más típusú szerződés követelményeinek és
            a szerződés fenntartását a Felek nem ellenzik.
          </p>
          <h1>
            <u>22.) Engedményezés:</u>
          </h1>
          <p>
            Ez a szerződés a Szállító és Megrendelő jogutódait is köti és
            közöttük hatályban marad. A jogok és kötelezettségek azonban
            személyesen kötik a feleket, így a jogok és kötelezettségek,
            valamint a szerződés egészének átruházásához a másik fél előzetes
            írásbeli hozzájárulása szükséges.
          </p>
          <h1>
            <u>23.) Értesítés:</u>
          </h1>
          <p>
            Minden kötelező és egyéb értesítést írásban kell megküldeni a másik
            fél székhelyére, vagy a másik fél által megadott címre, e
            szerződésre hivatkozva.
          </p>
          <h1>
            <u>23.) Alvállalkozó igénybevétele</u>
          </h1>
          <p>
            A H-ITB Alvállalkozóját minden esetben megismerteti a Fővállalkozói
            szerződés tartalmának azon részével, amely az Alvállalkozót érinti.
            Alvállalkozó tudomásul veszi, hogy felelőssége a H-ITB-vel, mint
            Fővállalkozóval szemben ugyanolyan mértékű, mint a Fővállalkozói
            szerződésben meghatározottak szerint H-ITB felelőssége az ügyfél
            felé.
          </p>
          <p>
            Megrendelő ismertetést ad az adott munkahely biztonságtechnikai,
            tűzvédelmi, munkavédelmi sajátosságairól a munkaterület átadásakor.
            Speciális, csak az adott helyen alkalmazott biztonságtechnikai
            előírásokról, tudnivalókról oktatást tart. Ezen feltételek
            teljesülése esetén, a munkaterület átvétele után a
            biztonságtechnikai, tűzvédelmi, munkahelyvédelmi szabályok
            betartásáért és betartatásáért az Alvállalkozó felelős.
          </p>
        </section>
        <footer className="modal-card-foot">
          <button onClick={() => setIsActive("")} className="button is-success">
            Elfogadom
          </button>
          <button onClick={() => setIsActive("")} className="button">
            Kilépés
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Aszf;
