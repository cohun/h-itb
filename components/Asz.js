import { useState } from "react";

const Aszf = ({ isActive, setIsActive }) => {
  return (
    <div className={`modal ${isActive}`}>
      <div className="modal-background"></div>
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Adatkezelési Szabályzat</p>
          <button
            onClick={() => setIsActive("")}
            className="delete"
            aria-label="close"
          ></button>
        </header>
        <section className="modal-card-body">
          <div>
            <h1>
              <u>Általános rendelkezések</u>
            </h1>
            <p>
              H-ITB Kft. (székhelye: 1119 Budapest, Kelenvölgyi htsr. 5,
              adószám: 12505533243),
            </p>
            <p>
              mint Adatkezelő az általa nyújtott szolgáltatásaihoz kapcsolódóan
              a felhasználó természetes személyek (ügyfél) valamennyi
              adatkezelése során a jelen Adatvédelmi és Adatkezelési Szabályzat
              és Tájékoztató (AVAKASZT) alapján jár el. Az Ügyfél a szolgáltatás
              igénybevétele előtt a honlapunkról letölthetően, vagy kinyomtatott
              formában Adatkezelő telephelyén megismerheti, és Adatkezelő
              bármilyen szolgáltatásának igénybevételével egyidejűleg magára
              nézve kötelezőnek fogadja el a jelen AVAKASZT rendelkezéseit.
            </p>
            <h1>
              <u>A szabályzat célja</u>
            </h1>
            <p>
              Az AVAKASZT célja, hogy meghatározza az Adatkezelő által kezelt
              személyes adatok körét, az adatkezelés módját, valamint biztosítsa
              az adatvédelem és adatkezelés alkotmányos elveinek, az
              adatbiztonság követelményeinek érvényesülését annak érdekében,
              hogy a felhasználó természetes személyek magánszférájának a
              tiszteletben tartása megvalósuljon az érintettek személyes
              adatainak feldolgozása, illetőleg kezelése során.
            </p>
            <h1>1. Értelmező rendelkezések</h1>
            <p>
              1.1. Adatkezelő: az a természetes vagy jogi személy, illetve jogi
              személyiséggel nem rendelkező szervezet, a ki vagy amely önállóan
              vagy másokkal együtt az adat kezelésének célját meghatározza, az
              adatkezelésre (beleértve a felhasznált eszközt) vonatkozó
              döntéseket meghozza és végrehajtja, vagy az adatfeldolgozóval
              végrehajtatja.
            </p>
            <p>
              1.2. Adatkezelés: az alkalmazott eljárástól függetlenül az adaton
              végzett bármely művelet vagy a műveletek összessége, így különösen
              gyűjtése, felvétele, rögzítése, rendszerezése, tárolása,
              megváltoztatása, felhasználása, lekérdezése, továbbítása,
              nyilvánosságra hozatala, összehangolása vagy összekapcsolása,
              zárolása, törlése és megsemmisítése, valamint az adat további
              felhasználásának megakadályozása, fénykép-, hang- vagy képfelvétel
              készítése, valamint a személy azonosítására alkalmas fizikai
              jellemzők (pl. ujj- vagy tenyérnyomat, DNS-minta, íriszkép)
              rögzítése.
            </p>
            <p>
              1.3. Személyes adat: az érintettel kapcsolatba hozható adat -
              különösen az érintett neve, azonosító jele, valamint egy vagy több
              fizikai, fiziológiai, mentális, gazdasági, kulturális vagy
              szociális azonosságára jellemző ismeret -, valamint az adatból
              levonható, az érintettre vonatkozó következtetés.
            </p>
            <p>
              1.4. Hozzájárulás: az érintett akaratának önkéntes és határozott
              kinyilvánítása, amely megfelelő tájékoztatáson alapul, és amellyel
              félreérthetetlen beleegyezését adja a rá vonatkozó személyes adat-
              teljes körű vagy egyes műveletekre kiterjedő – kezeléséhez.
            </p>
            <p>
              1.5. Adatfeldolgozás: az adatkezelési műveletekhez kapcsolódó
              technikai feladatok elvégzése,
            </p>
            <p>
              függetlenül a műveletek végrehajtásához alkalmazott módszertől és
              eszköztől, valamint az alkalmazás helyétől, feltéve hogy a
              technikai feladatot az adaton végzik.
            </p>
            <p>
              1.6. Adatfeldolgozó: az a természetes vagy jogi személy, illetve
              jogi személyiséggel nem rendelkező szervezet, aki vagy amely
              szerződés alapján - beleértve a jogszabály rendelkezése alapján
              kötött szerződést is - adatok feldolgozását végzi.
            </p>
            <p>
              1.7. Érintett: bármely meghatározott, személyes adat alapján
              azonosított vagy - közvetlenül vagy közvetve - azonosítható
              természetes személy.
            </p>
            <h1>2. Az adatkezelő megnevezése</h1>
            <p>Szervezet neve: H-ITB Ipari és Kereskedelmi Kft.</p>
            <p>Székhelye: 1119 Budapest, Kelenvölgyi htsr. 5.</p>
            <p>Szervezet adószáma: 12505533243</p>
            <h1>
              3. Az adatok megismerésére jogosult természetes és jogi személyek,
              az adatfeldolgozó:
            </h1>
            <p>
              Az adatokat az Adatkezelő szervezeti felépítésében meghatározott
              azon személyek jogosultak megismerni, akik Ügyfél kiszolgálás
              során ezen adatok birtokában tudják csak Ügyfél rendelkezéseit
              végrehajtani vagy törvényi kötelezettséget hajtanak végre.
              Adatkezelő az adatokat nem teszi közzé, harmadik személyek számára
              nem adja ki.
            </p>
            <h1>4. A kezelt személyes adatok köre</h1>
            <p>
              <strong></strong>
            </p>
            <p>
              A jelen AVAKASZT kizárólag a természetes személyek adatainak a
              kezelésére terjed ki, tekintettel arra, hogy személyes adatok
              kizárólag természetes személyek vonatkozásában értelmezhetők.
            </p>
            <p>
              Adatkezelő bizonyos szolgáltatásaihoz az Ügyfélnek<em> </em>meg
              kell adnia a következő <em>személyes adatait:</em>
            </p>
            <p align="left">- Ügyfél neve és címe</p>
            <p align="left">- E-mail címe,</p>
            <p align="left">- Telefon/Fax száma</p>
            <p align="left">- adandóan beosztása</p>
            <p>
              Ügyfél adatai a szolgáltatások teljesítése érdekében tárolásra
              kerülnek, azokat azonban adatkezelő továbbadni sem
              reklámfelhasználás, sem egyéb célra - az Ügyfél kifejezett
              hozzájárulása hiányában
            </p>
            <p>- nem jogosult.</p>
            <p>Az Ügyfél mindenkor jogosult az adatkezelést letiltani.</p>
            <h1>5. Az adatkezelés jogalapja, módja és célja</h1>
            <p>
              <strong></strong>
            </p>
            <p>
              Az adatkezelés jogalapja az Ügyfél önkéntes hozzájárulása. A{" "}
              <em>hozzájárulást az Ügyfél </em>a jelen adatvédelmi szabályzat
              előzetes megismerését követően történő kifejezett elfogadásával és
              a kérdéses adatok önkéntes megadásával adja meg.
            </p>
            <p>
              5.1. Az Ügyfél által megadott név, cím, telefonszám adatkezelő
              általi felhasználási célja a következő: a folyamat során
              kapcsolattartási célokat szolgál.
            </p>
            <p>
              5.2. Az Ügyfél adatait kizárólag számítástechnikai eszközzel
              végrehajtott adatfeldolgozással kezeljük.
            </p>
            <p>
              5.3. Az adatkezelő a megadott személyes adatokat az e pontokban
              írt céloktól eltérő célokra nem használhatja fel. Személyes adatok
              harmadik személynek vagy hatóságok számára történő kiadása
            </p>
            <p>
              5.4. hacsak törvény ettől eltérően nem rendelkezik kötelező erővel
              - a felhasználó előzetes, kifejezett hozzájárulása esetén
              lehetséges kizárólag.
            </p>
            <p>
              5.5. Adatkezelő a neki megadott személyes adatokat nem ellenőrzi.
              A megadott adatok megfelelőségéért kizárólag az azt megadó személy
              felel. Bármely Ügyfél e-mail címének megadásakor egyben
              felelősséget vállal azért, hogy a megadott e-mail címről kizárólag
              ő vesz igénybe szolgáltatást. E felelősségvállalásra tekintettel
              egy megadott e-mail címen történt belépésekkel összefüggő
              mindennemű felelősség kizárólag azt a felhasználót terheli, aki az
              e-mail címet regisztrálta.
            </p>
            <h1>6. Az adatkezelés időtartama</h1>
            <p>
              <strong></strong>
            </p>
            <p>
              6.1. A kötelezően megadott adatok kezelése az önkéntes megadással
              kezdődik és annak törléséig tart.
            </p>
            <p>
              6.2. Fenti rendelkezések nem érintik a jogszabályban (pl.
              számviteli jogszabályokban) meghatározott megőrzési
              kötelezettségek teljesítését.
            </p>
            <h1>7. Az adatokat megismerni jogosult személyek köre</h1>
            <p>
              <strong></strong>
            </p>
            <p>
              7.1. Az adatokat elsődlegesen Adatkezelő, illetve Adatkezelő belső
              munkatársai jogosultak megismerni, azonban azokat nem teszik
              közzé, harmadik személyek részére nem adják át.
            </p>
            <p>
              7.2. Az alapul fekvő informatikai rendszer üzemeltetése, a
              megrendelések teljesítése, az elszámolás rendezése körében
              Adatkezelő adatfeldolgozót (pl. rendszerüzemeltető, könyvelő)
              vehet igénybe. Adatkezelő az ilyen külső szereplők adatkezelési
              gyakorlatáért nem felelős.
            </p>
            <p>
              7.3. A fentieken túl az Ügyfélre vonatkozó személyes adatok
              továbbítására kizárólag törvényben kötelezően meghatározott
              esetben, illetve az Ügyfél hozzájárulása alapján kerülhet sor.
            </p>
            <h1>8. Az ügyfél jogai</h1>
            <p>
              <strong></strong>
            </p>
            <p>
              8.1. Az Ügyfél bármikor jogosult tájékoztatást kérni a Adatkezelő
              által kezelt, rá vonatkozó személyes adatokról, továbbá bármikor
              módosíthatja azokat. Ügyfél jogosult továbbá adatai törlésének
              kérésére az e pontban megadott elérhetőségek útján.
            </p>
            <p>
              8.2. Szolgáltató az Ügyfél kérésére tájékoztatást ad a rá
              vonatkozó, általa kezelt adatokról, az adatkezelés céljáról,
              jogalapjáról, időtartamáról, továbbá arról, hogy kik és milyen
              célból kapják vagy kapták meg adatait. Szolgáltató a kérelem
              benyújtásától számított 30 napon belül írásban adja
            </p>
            <p>meg a kért tájékoztatást.</p>
            <p>
              Az Ügyfél bármikor jogosult a helytelenül rögzített adatainak
              helyesbítését, vagy azok törlését kérni. Egyes adatait az Ügyfél a
              Honlapon maga helyesbítheti; egyéb esetekben Szolgáltató a kérelem
              beérkezésétől számított 3 munkanapon belül törli az adatokat, ez
              esetben azok nem lesznek újra helyreállíthatók. A törlés nem
              vonatkozik a jogszabály (pl. számviteli szabályozás) alapján
              szükséges adatkezelésekre, azokat Szolgáltató a szükséges
              időtartamig megőrzi.
            </p>
            <p>
              8.3. Az ügyfél bíróság előtt érvényesítheti jogait, kérheti
              továbbá az adatvédelmi biztos segítségét is.
            </p>
            <p>Ügyfél, jogsértés esetén jogorvoslatért fordulhat:</p>
            <p>
              az Adatvédelmi Biztos Hivatalához (1051 Budapest, Nádor u. 22.) A
              Nemzeti Adatvédelmi és Információszabadság Hatósághoz
            </p>
            <p>
              8.4. Amennyiben az Ügyfél szolgáltatás igénybevételéhez a
              regisztráció során harmadik fél adatait adta meg, vagy a Weboldal
              használata során bármilyen módon kárt okozott, a Szolgáltató
              jogosult az Ügyféllel szembeni kártérítés érvényesítésére. A
              Szolgáltató ilyen esetben minden tőle telhető segítséget megad az
              eljáró hatóságoknak a jogsértő személy személyazonosságának
              megállapítása céljából.
            </p>
            <h1>9. Egyéb rendelkezések</h1>
            <p>
              <strong></strong>
            </p>
            <p>
              9.1. Szolgáltató rendszere a felhasználók aktivitásáról adatokat
              gyűjthet, melyek nem kapcsolhatóak össze a felhasználók által a
              regisztrációkor megadott egyéb adatokkal, sem más honlapok vagy
              szolgáltatások igénybevételekor keletkező adatokkal.
            </p>
            <p>
              9.2. Minden olyan esetben, ha a szolgáltatott adatokat a
              Szolgáltató az eredeti adatfelvétel céljától eltérő célra kívánja
              felhasználni, erről a felhasználót tájékoztatja, és ehhez
              előzetes, kifejezett hozzájárulását megszerzi, illetőleg
              lehetőséget biztosít számára, hogy a felhasználást megtiltsa.
            </p>
            <p>
              9.3. Szolgáltató kötelezi magát, hogy gondoskodik az adatok
              biztonságáról, megteszi továbbá azokat a technikai intézkedéseket,
              amelyek biztosítják, hogy a felvett, tárolt, illetve kezelt adatok
              védettek legyenek, illetőleg mindent megtesz annak érdekében, hogy
              megakadályozza azok megsemmisülését, jogosulatlan felhasználását
              és jogosulatlan megváltoztatását. Kötelezi magát arra is, hogy
              minden olyan harmadik felet, akiknek az adatokat esetlegesen
              továbbítja vagy átadja, ugyancsak felhívja ez irányú
              kötelezettségeinek teljesítésére.
            </p>
            <p>
              9.4. Szolgáltató fenntartja a jogot, hogy jelen Szabályzatot az
              Ügyfelek előzetes értesítése mellett egyoldalúan módosítsa. A
              módosítás hatályba lépését követően az Ügyfél a szolgáltatás
              használatával ráutaló magatartással elfogadja a módosított
              Szabályzatban foglaltakat.
            </p>
            <p>ADATKEZEŐ NYILATKOZATA</p>
            <p>
              Az Adatkezelő magára nézve kötelezőnek ismeri el jelen AVAKASZT
              tartalmát, és kötelezettséget vállal arra, hogy szolgáltatásával
              kapcsolatos adatkezelése megfelel a jelen AVAKASZT-ban
              megfogalmazott előírásoknak.
            </p>
          </div>
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
