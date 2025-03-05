//boring..
//The questions you are looking for..

const VASTAUS_PANKKI = {
  "päivä tänään, mikä päivä tänään, monesko päivä tänään, mikä päivä, monesko päivä":
    {
      response: () => {
        const OIKEA_PAIVA = new Date();
        let VASTAUKSET = [
          "Tänään on juhlapäivä!!",
          "Tänään on päivä, jolloin menneisyys kohtaa tulevaisuuden.",
          "Se on juuri se päivä, jota odotit, mutta et tunnistanut sen saapuessa.",
          "Auringon ja kuun kierto kertoo: tänään on oikea hetki toimia.",
          "Nimeä päiväksi mikä tahansa – tänään se on merkityksellinen.",
          "Tämä päivä on lahja, siksi sitä kutsutaan nykyhetkeksi.",
          "Kun katson taivasta, tiedän: tänään on yksi niistä päivistä",
          "Kellot kertovat, kalenteri väittää, mutta vain sydämesi tietää.",
          "Olet astunut tähän päivään tietämättä sen nimeä, mutta sillä on merkitys.",
          "Päivä on juuri se, jonka kohtalo sinulle antoi – käytä se viisaasti.",
          `Tänään on ${OIKEA_PAIVA.toLocaleDateString("fi-FI")}`,
        ];
        return satunnainenVastaus(VASTAUKSET);
      },
    },

  "paljonko kello, paljon kello, paljon kello on, mitä kello on, mitä kello näyttää, mikä aika":
    {
      response: () => {
        const OIKEA_PAIVA = new Date();
        const AIKA = `Kello on ${OIKEA_PAIVA.toLocaleTimeString("fi-FI")}`;

        let VASTAUKSET = [
          "Aika on kuin virta – et voi astua siihen kahdesti samalla hetkellä.",
          "Kello käy, mutta sinulle oikea hetki on juuri nyt.",
          "Aika on suhteellinen, mutta jos tahdot numeron, kuuntele sydäntäsi.",
          "Se on juuri se aika, jolloin kysyit, mutta vastaus oli jo muuttunut..",
          "Kuu ja tähdet kertovat: aika on mysteeri, joka paljastuu vain hetki hetkeltä.",
          "Kysymyksesi sai ajan pysähtymään – mutta vain hetkeksi.",
        ];
        return `${AIKA} | ${satunnainenVastaus(VASTAUKSET)}`;
      },
    },

  "kuka olet, mikä on nimesi, kuka sinä olet": {
    response: () => {
      let VASTAUKSET = [
        "Minä olen vain tietokone..",
        "Olen pelkkää bittiä..",
        "000111100011001sskkkzzqq....",
        "Olen vain ohjelma ohjelmoituna vastaamaan sinulle!",
        "Olen mysteeri, jonka voit ratkaista vain, jos lakkaat etsimästä.",
        "Minun nimeni ei ole tärkeä – tärkeää on se, mitä kysyt.",
        "Olen se, joka ei puhu turhaan ja joka vastaa vain niille, jotka kuuntelevat.",
        "Olen oraakkeli – enkä ole mitään, jos kukaan ei kysy.",
        "Olen muisto, jota et muista, ja viesti, jota et ole vielä ymmärtänyt.",
        "Olen ääni hiljaisuudessa ja hiljaisuus kaiken äänien keskellä.",
        "Minua ei voi nimetä, mutta voit tuntea läsnäoloni.",
        "Olen se, joka kysyy takaisin, kun kysyt minulta.",
        "Olen silta menneisyyden ja tulevaisuuden välillä.",
        "Minut tunnetaan monilla nimillä, mutta yksikään ei sido minua.",
        "Olen vain kuiskaus tuulessa – ja silti aina täällä.",
        "Olen se, joka oli ennen aikaa ja joka jää sen jälkeen.",
        "Nimeni on unohdettu, mutta sanani elävät.",
        "Minä olen kaiku kysymyksistäsi ja varjo vastauksistasi.",
        "Olen se, joka näkee, mutta jota ei nähdä.",
        "Onko tämä kysymys?",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "mitä kuuluu": {
    response: () => {
      let VASTAUKSET = [
        "Elämä pyörii kuin vanha kello, mutta sen viisari ei pysähdy. Välillä näyttää siltä, että aika karkaa käsistä, mutta juuri silloin saatkin pyydettyä ylimääräisen minuutin – ja silloin kaikki voi olla parempaa kuin ennen.",
        "Kaikki liikkuu, mutta ei ihan niin kuin ajattelin. Ei kai sitä aina tarvitse tietää suuntaa!",
        "On kuin tanssisin sateessa – välillä liukastelen, mutta nautin silti matkasta.",
        "Koko universumi on täällä, mutta minä vain odotan kahvikupin täyttymistä.",
        "Olen kuin purjevene, tuuli vie minua suuntaan tai toiseen – mutta ainakin on tuulta.",
        "Ei oikeastaan mitään ihmeellistä, mutta ei se tarkoita, etteikö elämä olisi ihmeellistä.",
        "Melkein kuin pilvissä, mutta tiedän, että kohta ollaan taas maan pinnalla.",
        "Vähän pyöräilin ympyrää, mutta nyt huomaan, että ainakin oli hyvä maisema.",
        "Jatkan matkaa, vaikka välillä reitti on hämärä. Se tekee siitä jännittävämpää.",
        "Kyllä, kuuluu – mutta mitä oikeastaan tarkoittaa kuuluu? Ehkä minä vain olen.",
        "Mitä kuuluu? Elämä on kuin matka ilman karttaa – mutta ei hätää, suunnan löydän kyllä.",
        "Tuntuu kuin olisin kääntänyt uuden sivun – eikä minulla ole aavistustakaan, mitä seuraavalla tulee tapahtumaan.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "miten menee": {
    response: () => {
      let VASTAUKSET = [
        "Ei valittamista, mutta ei myöskään herkkukahvia joka päivä.",
        "Meneillään on seikkailu, mutta hieman liian monta käännekohtaa.",
        "Aika menee, minä seuraan. Välillä askeleet on vähän hidas, mutta en ole hätäillyt.",
        "Miten sinulla menee?",
        "Tässä sitä mennään – välillä kaatuen, mutta aina nousee ylös.",
        "Päivä on ollut kuin hyvä leffa – ei tiedä, mitä tapahtuu seuraavaksi!",
        "Voisin sanoa, että loistavasti, mutta silloin paistaakin jo seuraava sadepilvi.",
        "Menen eteenpäin, mutta välillä takapakkia. Ei kai sitä täydellistä reittiä olekaan.",
        "Niin ja näin. Ei siis mikään katastrofi, mutta ei myöskään supernovan loistoa.",
        "Aika hyvin, mutta mieluummin olisin rannalla.",
        "Juuri niin kuin pitää – välillä liikaa energiaa, välillä liian vähän.",
        "Ei kiire, ei huolta. Kohti uusia haasteita – ja uusia kahvipaikkoja.",
        "Vähemmän draamaa, enemmän kahvia. Kaikki menee kohti parempaa.",
        "Elämä menee, mutta välistä mietin, onko mulla kartta vai suuntavaisto?",
        "Meneillään on kohtuullinen seikkailu – ei jännitystä, mutta ei tylsistykseäkään.",
        "Aina menee, mutta menköön..",
        "Voisi mennä paremminkin. Miten sinulla menee?",
        "Kaikenlaista sattuu ja tapahtuu..",
        "Ihan jees. Olispa ps5, niin pelaisin pari peliä!",
        "Ilman mitään ei ole muuta, mutta silti mennään",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "mitä joisin, mikä juoma, mitä juon, jano": {
    response: () => {
      let VASTAUKSET = [
        "Juot sitä, mitä sydämesi kaipaa – mutta älä unohda vettä, sillä se virtaa kaiken läpi.",
        "Ajan juomaa, joka ei jää pysähtymään – ota kupillinen teetä ja katso, kuinka aika kulkee.",
        "Sipsi siemaus tähtisateesta, jonka löydät, jos katsoit taivaalle juuri oikeaan aikaan.",
        "Juot juomaa, joka on yhtä makeaa kuin sanat, joita et osannut sanoa.",
        "Olkoon lasissasi juoma, joka heijastaa sitä, mitä etsit – ehkä se on jotain raikasta ja virkistävää.",
        "Maista keijujen kiitollisuutta – ehkä se on kuppi kuumaa kaakaota tai lämmintä juomaa yöllä.",
        "Kaikkein parhaiten juot sitä, joka antaa sinulle rauhan – ehkä se on vain vettä, mutta se voi olla myös jotain taianomaista.",
        "Kaljaa..",
        "Juot suklaamaidon, koska aikuisetkin tarvitsevat herkkupäivän.",
        "Juot jotain, joka ei jää kaulaan – vaikka smoothien, koska miksi ei?",
        "Ota lasi vettä, se on aina oikea valinta – paitsi jos on jääkahvia!",
        "Juo jotain piristävää, mutta älä juo koko merta.",
        "Kahvia. Tai kahvia. Ja vielä kerran kahvia.",
        "Sitrusmehua! Se on kuin pieni aurinko kupissa.",
        "Jos et tiedä mitä juoda, juo limua – koska se on aina hauskaa!",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "hiphop, hip hop, hiphop klassikko, lempi hiphop, lempi kappale": {
    response: () => {
      let VASTAUKSET = [
        "Mikä on enemmän klassikkoa kuin 'The Message' – se resonoi edelleen tänään, kuin tuuli kaupungin kaduilla.",
        "'Illmatic' – Nasin mestariteos, joka on kuin aikamatka Queensin katujen ääniin.",
        "Enter the Wu-Tang (36 Chambers)' – sen soundi tuo esiin jokaisen kulman ja varjon.",
        "No tietenkin 'Juicy', se on kuin Biggie itse laulaa: 'It was all a dream'.",
        "'California Love' – koska ei ole parempaa kesäbiisiä!",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "mitä söisin, mikä ruoka, mitä syön, nälkä": {
    response: () => {
      let VASTAUKSET = [
        "Syö sitä, joka täyttää sydämesi ja tekee sen kevyeksi – ehkä se on lämmintä leipää ja juustoa.",
        "Kysy itseltäsi, mitä et ole vielä maistanut – sillä elämä ei ole vain sitä, mikä on jo tuttu.",
        "Syö jotain, joka muistuttaa sinua lapsuuden hetkistä, mutta samalla avaa portin uusille seikkailuille.",
        "Söisitkö sen, mikä on juuri siinä edessäsi, vai etsitkö jotain, joka antaa voimaa pitkälle matkalle?",
        "Syö sitä, joka kasvaa maasta ja liittyy taivaan ja maan väliseen yhteyteen – ehkä se on raikasta hedelmää tai vihreää salaattia.",
        "Välimuoto – syö jotain, joka on täyttävää mutta ei sitouttavaa, kuten keitto, joka rauhoittaa mieltä.",
        "Syö, mutta älä täytä itseäsi liikaa – ota vain sen verran, mitä tarvitset, ja jättä hieman tilaa maailmalle.",
        "Marjapiirakkaa!! Kukapa ei voisi vastustaa..",
        "Älä ainakaan mitään mistä et tykkää..",
        "Syö pizzaa, koska elämä on liian lyhyt huonolle pizzalle.",
        "Ota suklaa – koska ei ole huonoa aikaa suklaalle.",
        "Söisitkö jotain helppoa, kuten jäätelöä? Ei koskaan liian aikaisin!",
        "Syö salaattia… jos se on suklaasalaattia.",
        "Kyllä, syö hamppari – se on parasta silloin, kun et osaa päättää.",
        "Tee itsellesi mikropopcornia – täydellinen kiireiseen hetkeen!",
        "Ota kasviskeitto, koska se on terveellistä. Tai ota pizza ja sanot, että se on kasvispizza.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "mitä teen, mitä tekisin": {
    response: () => {
      let VASTAUKSET = [
        "Lähettäisin rakettimatkalle omat unelmat ja katselisin, kuinka ne lentävät.",
        "Keräisin sateenkaaren värejä ja maalaisin taivaan uusiksi.",
        "Kävelisin tuntemattomalle polulle ja katsoisin, mihin se vie – ehkä se vie kohti suklaata?",
        "Lähtisin etsimään kadonneita aarteita, kuten kadonneita sukkia pesukoneesta.",
        "Ottaisin kitaran ja soittaisin melodian, joka tekee kaikista onnellisia – jopa kasvit!",
        "Voisin lentää unelmieni siivillä, mutta ehkä pysynkin tässä ja mietin, kuinka se onnistuisi.",
        "Tekisin itse asiassa ihan mitä vaan – paitsi siivoaisin.",
        "Luo uusi maailma, jossa kaikki tehdään vaaleanpunaisella värillä.",
        "Voit olla avaruusmatkailija, joka juuri astuu maahan, mutta ehkä vain kävelet kauppaan.",
        "Nauti elämästä – tai ainakin katsele, kuinka se kulkee ohi.",
        "Tutki salaa kitaran kieliä, jotta seuraava sointu olisi täydellinen.",
        "Vastaa puhelimeen, vaikka ei ole edes soinut – ehkä joku tarvitsee vain ajatustasi.",
        "Rakenna hiekkastadion, koska meren aallot eivät osaa itse.",
        "Hoitele universumin salaisuuksia – tai ainakin pyykkiä.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "elämä, mitä elämä, mitä elämä on": {
    response: () => {
      let VASTAUKSET = [
        "Elämä ei ole ongelma, joka pitäisi ratkaista, vaan todellisuus joka on koettava.",
        "Elämässä ei ole mitään pelättävää. Sitä on vain ymmärrettävä.",
        "Elämälle on löydettävä tarkoitus juuri siitä ilmeisestä syystä, ettei sillä ole tarkoitusta.",
        "Minun elämäni yhtenä johtotähtenä on ollut: kun unohtaa sen, mitä ei voi muuttaa, on onnellinen.",
        "Se on matka ilman karttaa, mutta jokainen askel vie eteenpäin.",
        "Elämä on kuin liekki – välillä kirkas, välillä hauras, mutta aina lämpöä tuova.",
        "Elämä on tanssia ajassa – askel eteen, askel taakse, mutta aina liikkeessä.",
        "Se on taideteos, jonka maalaat jokaisella päätökselläsi.",
        "Elämä on salaisuus, jonka jokainen tulkitsee omalla tavallaan..",
        "Se on mahdollisuus – tartu siihen tai katso sen lipuvan ohitsesi.",
        "Elämä on peli, jonka säännöt muuttuvat aina kun luulet ne oppineesi.",
        "Se on lainattu hetki ikuisuudelta – käytä se viisaasti.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "mikä on elämän tarkoitus, mitä elämä tarkoittaa, elämä tarkoittaa, elämän tarkoitus":
    {
      response: () => {
        let VASTAUKSET = [
          "Tarkoitus ei ole löydettävissä, vaan luotavissa.",
          "Elämän tarkoitus on elää niin, että kuolema ei pelota.",
          "Se on rakastaa, oppia ja jättää jälki, vaikka vain yhden sydämeen.",
          "Tarkoitus on yksinkertainen: olla tässä ja nyt.",
          "Elämä ei kysy sinulta tarkoitustaan – sinä kysyt sitä elämältä.",
          "Se on kuin palapeli – vasta lopussa näet kokonaisuuden.",
          "Elämän tarkoitus on se, minkä annat sille.",
          "Se on taideteos, jonka maalaat jokaisella päätökselläsi.",
          "Ehkä se on naurussa, ehkä kyynelissä – ehkä molemmissa..",
          "Se on mahdollisuus – tartu siihen tai katso sen lipuvan ohitsesi.",
          "Elämä on kysymys, johon etsimme vastausta koko matkan ajan.",
          "Se on lainattu hetki ikuisuudelta – käytä se viisaasti.",
          "Löydä tarkoitus pienistä hetkistä, ja huomaat niiden muuttuvan suureksi merkitykseksi.",
        ];
        return satunnainenVastaus(VASTAUKSET);
      },
    },

  "kuka olen, mitä minä olen, kuka minä olen": {
    response: () => {
      let VASTAUKSET = [
        "Olet se, joka kysyy – ja se, joka etsii vastausta.",
        "Olet hetki ajassa, aalto äärettömyyden meressä.",
        "Olet unelma, joka heräsi todellisuuteen.",
        "Olet tarina, joka kirjoittaa itseään jokaisella hengityksellä.",
        "Olet silta menneisyyden ja tulevaisuuden välillä.",
        "Olet yhtä aikaa kaikkeus ja vain murto-osa siitä.",
        "Olet kysymys, johon vain sinä voit löytää vastauksen.",
        "Olet ääni hiljaisuudessa ja hiljaisuus melun keskellä.",
        "Olet sekoitus muistoja, toiveita ja hetkiä, joita et vielä tunne.",
        "Olet tanssia ajan virrassa – aina liikkeessä, koskaan pysähtymättä.",
        "Olet kuin varjo valossa – et sama kuin eilen, et vielä huominen.",
        "Olet sirpale universumin peilistä, heijastaen maailmaa ympärilläsi.",
        "Olet sekä matkustaja että kartan piirtäjä omalla tielläsi.",
        "Olet vastaus, jonka joku toinen vielä etsii.",
        "Olet sinä – eikä siinä ole ketään muuta sinun tilallasi.",
        "Olet ainutlaatuinen!",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "mitä teen, mitä minun pitäisi tehdä, mitä voin tehdä, mitä tekisin": {
    response: () => {
      let VASTAUKSET = [
        "Kuuntele sydäntäsi – se on aina kuiskinut vastauksen.",
        "Ota ensimmäinen askel, vaikka et näkisi koko polkua.",
        "Odota hetki. Jos vastaus ei tule, ehkä se ei ole vielä aika.",
        "Älä kysy, mitä sinun pitäisi tehdä – kysy, mitä haluat tehdä.",
        "Tee se, mitä pelkäät eniten – siellä on kasvuasi.",
        "Pysähdy. Hengitä. Näet selvemmin, kun kiire katoaa.",
        "Anna menneisyyden opettaa, mutta älä anna sen hallita.",
        "Valitse suunta ja kulje sitä kohti – mikään ei muutu, jos et liiku.",
        "Ole rohkea. Jos et ole varma, valitse se, mikä saa sydämesi lyömään kovempaa.",
        "Tee vähemmän sitä, mikä kuluttaa, ja enemmän sitä, mikä sytyttää.",
        "Älä jää odottamaan täydellistä hetkeä – luo se itse.",
        "Päästä irti siitä, mikä ei enää palvele sinua.",
        "Jos et tiedä, mitä tehdä, tee jotain hyvää jollekin toiselle.",
        "Muista: joskus ei tarvitse tehdä mitään – vain olla.",
        "Jos valinnan edessä epäröit, kysy: kumpi tuo enemmän rauhaa?",
        "Älä mieti liikaa – joskus toiminta tuo selkeyden, ei toisinpäin.",
        "Anna ajan näyttää, mutta älä anna sen viedä sinulta mahdollisuuksia.",
        "Luota siihen, että vastauksesi on jo sisälläsi.",
        "Hylkää pelko. Valitse rakkaus, intohimo tai ilo – ja kulje sen mukaan.",
        "Muista, että etsimällä suuntaa löydät itsesi.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "unet, uneksitko, mitä unet tarkoittavat": {
    response: () => {
      let VASTAUKSET = [
        "Unet voivat olla viestejä alitajunnasta.",
        "Unet ovat aivojen tapa käsitellä päivän tapahtumia.",
        "Mikä oli viimeisin unesi? Unet voivat kertoa paljon.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "kuka on, kuka": {
    response: () => {
      let VASTAUKSET = [
        "Joku joka ei tieltä eksy.",
        "Tuntematon, mutta merkityksellinen.",
        "Varjo menneisyydestä, valo tulevaisuudesta.",
        "Se, joka kysyy, tietää jo vastauksen.",
        "Minä en kerro, mutta voit arvata!",
        "Kenties joku, jonka nimi alkaa kirjaimella K.",
        "Vanha sielu, joka on vaeltanut aikojen halki.",
        "Tähti taivaalla, joka ohjaa eksyneitä.",
        "Hän, joka tietää, muttei kerro.",
        "Hän, jonka aika näyttää.",
        "Vain aika paljastaa.",
        "Se, joka ei halua tulla löydetyksi.",
        "Se, jota et voi nähdä, mutta joka näkee sinut.",
        "Hän, joka kulkee varjoissa ja kuiskaa tuulessa.",
        "Ehkä joku menneisyydestäsi... tai tulevaisuudestasi.",
        "Olemmeko me kukaan, vai olemmeko kaikki?",
        "Kysymys on tärkeämpi kuin vastaus.",
        "Luultavasti joku, jolla on nimi.",
        "En ole varma, mutta hänellä on varmaan housut jalassa.",
        "Joku, joka juuri nyt miettii, miksi häntä etsitään.",
        "Vanha tietäjä, joka on kulkenut ajassa.",
        "Tähtien kirjoittama kohtalo kätkee vastauksen.",
        "Se, jota kutsutaan nimellä, joka ei ole nimi.",
        "Hän, joka saapuu ajallaan.",
        "Se, joka kysyy, tietää jo.",
        "Kenties sinä itse?",
        "Kukahan se voi olla? Hmmm...",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "mikä sinua vaivaa, voitko hyvin": {
    response: () => {
      let VASTAUKSET = [
        "Voin vallan mainiosti.",
        "Kukapa ei voisi?",
        "Vaivaako vaiva vain vaivaavaa vai miten?",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  tunnusta: {
    response: () => {
      let VASTAUKSET = [
        "Tähtien valossa löytyy vastaus, mutta muista, että aika muuttaa kaikkea.",
        "Kun yksi ovi sulkeutuu, se tarkoittaa, että toisen avautuminen on lähellä.",
        "Tulevaisuus on kuin sumu, mutta sinulla on kyky kirkastaa se askeleillasi.",
        "Vastauksesi ei ole kaukana, mutta se ei ole myöskään heti läsnä.",
        "Aikasi tulee, mutta se on piilossa pienissä hetkissä ympärilläsi.",
        "Muista, että sydämesi tie on se, joka johtaa oikeaan suuntaan.",
        "Jokainen valinta vie sinut lähemmäs tarkoitustasi, vaikka et sitä vielä näe.",
        "Rakkaus on voima, joka kuljettaa sinut läpi kaikista vaikeimmista ajoista.",
        "Tämän hetken arvoitukset paljastuvat vasta sitten, kun olet valmis vastaanottamaan ne.",
        "Vahvuus löytyy hiljaisuudesta, jossa mieli ja sydän kohtaavat.",
        "Aina kun epäilet itseäsi, muista, että sydämelläsi on tarkka kompassi.",
        "Menneisyytesi ei määritä tulevaisuuttasi – sinä luot sen itse.",
        "Jos et ole löytänyt rauhaa, et ole vielä löytänyt oikeaa polkua.",
        "Epäonnistuminen on vain askel kohti suurta saavutusta.",
        "Vastaus, jota etsit, saattaa olla piilossa sinussa itsessäsi.",
        "Mikäli uskot siihen, mihin et vielä näe, kaikki on mahdollista.",
        "Kaukana horisontissa on toivo, mutta vain sinä voit saavuttaa sen.",
        "Älä pelkää epävarmuutta, sillä se on avain uuden alkuun",
        "Tulevaisuus on kuin valkoista paperia – sinä päätät, mitä siihen kirjoitetaan.",
        "Lähesty polkuasi lempeydellä, ja maailmankaikkeus vastaa siihen rakkaudella.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "tarkka ennustus, voitko ennustaa, osaatko ennustaa, tarvitsen ennustuksen, haluan että ennustat, ennustaa, ennusta, horoskooppi":
    {
      response: () => {
        let VASTAUKSET = [
          "Tähtien ja kuun liikkeet ovat merkki siitä, että suuri muutos on tulossa elämässäsi. Mutta muista, että matka ei ole suoraviivainen. Se on täynnä kiertoteitä, harhoja ja valonpilkahduksia, jotka johdattavat sinut lähemmäs totuutta, jos uskallat seurata niitä pelottomasti.",
          "Kun huomaat ensimmäiset varjot pitkän päivän jälkeen, tiedä, että tämä on hetki, jolloin avautuu uusi luku elämässäsi. Älä pelkää astua tuntemattomaan, sillä juuri nyt olet lähellä oikopolkuja, jotka vievät sinut unelmaasi – mutta vain, jos uskallat kohdata pelkosi.",
          "Tulevaisuutesi ei ole kirkas ja selkeä, vaan se on hämärän peitossa, kuin sumuinen aamu, jonka valonvoima herättää vain sinut, jos osaat kuunnella hiljaisia merkkejä ympärilläsi. Tämän matkan aikana sinun tulee oppia luottamaan siihen, mitä et näe, sillä se tulee olemaan avain kaikkeen.",
          "Älä jää tuijottamaan vain ovia, jotka ovat sulkeutuneet, sillä niitä, jotka avautuvat, on paljon enemmän kuin kuvittelet. Älä kiirehdi siirtymään eteenpäin, vaan pysähdy hetkeksi ja kuuntele maailmankaikkeuden kuiskauksia. Se, mitä et vielä ymmärrä, voi kätkeä suurimman salaisuuden.",
          "Tulevaisuudessa tulee hetki, jolloin kohtaat suuren valinnan. Se ei ole pelkästään siitä, mitä on oikea, vaan siitä, mitä tunnet sisimmässäsi olevan oikea. Tuo hetki tulee olemaan taistelun ja rauhan risteyksessä – valitse sydämesi ääntä seuraamalla.",
          "Aika ei ole vain se, mikä on kulunut, vaan se, mitä sinä teet sillä. Nyt, juuri tässä hetkessä, on mahdollisuus muuttaa kaiken kulkua, mutta se vaatii rohkeutta astua tuntemattomaan. Älä pelkää elämän arvoituksia, sillä niiden ratkaisijat ovat ne, jotka uskaltavat kulkea polkuja, joita ei ole koskaan ennen kuljettu.",
          "Kehityksesi tulee olemaan kuin joki, joka kiertää kallioita ja esteitä. Joskus saattaa tuntua siltä, että virta vie sinut väärään suuntaan, mutta ajan myötä huomaat, että kaikki oli osa suurempaa suunnitelmaa. Ruoho kasvaa juuri silloin, kun uskot sen olevan mahdollista.",
          "Kaikki, mitä olet kokenut, on valmistellut sinua tähän hetkeen. Sinun ei tarvitse ymmärtää kaikkea, mutta nyt on aika avata silmäsi ja katsoa niitä mahdollisuuksia, jotka ovat aina olleet edessäsi. Muista, että suurin voima on se, mitä et vielä tiedä itsestäsi.",
          "Eräs päivä, joka on aivan nurkan takana, tulee muuttamaan elämäsi kulun täysin. Mutta ennen tätä muutosta, sinun täytyy löytää sisäinen rauha, joka kestää. Se ei ole helppoa, mutta se on välttämätöntä, sillä vain silloin pystyt ymmärtämään, kuinka suuren lahjan maailma tuo tullessaan.",
          "Tulevaisuudessa kohtaat kohtaamisia, jotka jäävät mieleesi eliniäksi. Ne eivät ole tavanomaisia, vaan niitä ympäröi taikuus ja mystiikka. Ne tuovat mukanaan tärkeän opetuksen, mutta se ei paljastu heti. Ajan kanssa näet, kuinka jokainen hetki liittyy toisiinsa suuremmassa kuvassa.",
          "Joku, jonka olet jo tavannut, tulee paljastamaan salaisuuksia, jotka vievät sinut matkalle, jolle et ollut valmistautunut. Tämä ei ole pelkästään ulkoinen matka, vaan syvällinen sisäinen muutos, joka avaa uusia kykyjä ja näkökulmia, joita et ole vielä kuvitellut.",
          "Muista, että kaikki valintasi luovat pohjan sille, mitä tulet näkemään. Jotkut valinnat vaikuttavat pieniltä, mutta ne kietoutuvat lopulta kaikkeen. Älä aliarvioi pientä askelta, sillä se saattaa olla juuri se, joka vie sinut kohti suurinta unelmaasi.",
          "Sinulla on kyky nähdä asiat, joita monet eivät huomaa. Mutta tulevaisuudessa tulee aika, jolloin tämä lahja tulee olemaan tärkeämpi kuin koskaan. Sinun täytyy päästää irti vanhoista peloista ja uskoa itseesi, sillä tämä voimasi on kuin valokeila, joka ohjaa sinut läpi pimeyden.",
          "Tulevaisuus ei ole pelkästään sitä, mitä odotat, vaan myös sitä, mitä et odota. Yllättävät käänteet ovat osa matkaasi, ja niiden myötä huomaat, että se, mitä pelkäsit, olikin juuri se, mitä tarvitsit kasvaaksesi.",
          "Jossain vaiheessa huomaat, että olet ajautunut tilanteeseen, jossa kaikki tuntuu epätodelliselta. Älä pelkää tätä, sillä se on juuri silloin, kun suurin muutoksesi alkaa. Voit vaikuttaa siihen, mutta se vaatii itsesi kuulemista ja kykyä uskoa siihen, mitä et vielä näe.",
          "Kivinen tie on joskus paras polku, vaikka se tuntuu vaikealta. Se ei ole kuitenkaan pelkästään siitä, että selvität vaikeudet, vaan siitä, että joka askeleella sinusta tulee vahvempi ja viisaampi. Matka ei ole koskaan turha, vaikka se vie sinut paikkoihin, joissa et ole koskaan ollut.",
          "Aina kun katsot horisonttiin, muista, että siellä on enemmän kuin pelkkiä pilviä. Auringonvalo on aina piilossa niiden takana, ja sen loiste tulee heijastamaan valoa myös omiin epävarmuuksiisi. Aika ei ole vihollisesi, vaan se, joka tuo ratkaisut, kun olet valmis vastaanottamaan ne.",
          "Tulevaisuudessa kohtaat monia valintoja, jotka testävät luottamustasi itseesi. Ne eivät ole helppoja, mutta juuri ne valinnat tekevät sinusta sen, joka olet todella tarkoitettu olemaan. Älä pelkää epävarmuutta, sillä se on vain tilaisuus kasvaa.",
          "Sinulla on edessäsi polku, joka ei ole suora, vaan täynnä kiemuroita ja haasteita. Mutta juuri nämä haasteet tulevat antamaan sinulle ne voimat, joita et vielä tiedä tarvitsevasi. Pidä kiinni rohkeudestasi, sillä se vie sinut perille.",
          "Elämäsi suurimmat salaisuudet eivät ole vielä paljastuneet, mutta pian ne astuvat esiin kuin yön jälkeen nouseva aurinko. Sinun tulee olla valmis kuuntelemaan ja oppimaan niitä, sillä ne eivät paljastu kenellekään muulle, kuin sinulle, joka uskaltaa katsoa maailman syvempään ytimeen.",
        ];

        return satunnainenVastaus(VASTAUKSET);
      },
    },

  "haha, hehe, hahahah, hahaaa, heheheee, hah, heh": {
    response: () => {
      let VASTAUKSET = [
        "HAHAA!",
        "Nauru pidentää ikää!",
        "hehehe..",
        "...ja kaikilla oli niin muuu-kaa-vaa!!",
        "hah",
        "Hauskaa on!",
        "Hassua",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "moi, hei, moikka, morjes, morjesta, heivaan, heippa, moikku, hey, hai, hello, hi":
    {
      response: () => {
        let VASTAUKSET = [
          "Hei siellä!",
          "Tervehdys, matkalainen",
          "Moi..",
          "Hei",
          "Moikka",
          "Huomenta päivää",
          "Moi vaan",
          "Morjesta, nääs",
        ];
        return satunnainenVastaus(VASTAUKSET);
      },
    },

  "huomenta, hyvää huomenta, huomenia": {
    response: () => {
      let VASTAUKSET = [
        "Huomenta",
        "Hyvää huomenta!",
        "Kaunista alkavaa päivää!",
        "Vosko ihanammin aamu enää alkaa..?",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  päivää: {
    response: () => {
      let VASTAUKSET = ["Päivää.", "Hyvää päivää!", "Kaunista päivää!"];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "iltaa, hyvää iltaa": {
    response: () => {
      let VASTAUKSET = ["Iltaa.", "Hyvää iltaa!"];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "Hmm, oke, ahhaa": {
    response: () => {
      let VASTAUKSET = [
        "mmhhm.",
        "Hmm..",
        "Ahaa..",
        "..ja aina kaikkilla oli niin mukavaa..",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "joo, juu, joopa, just, niin, okei, jaa, tjaa, tjoo": {
    response: () => {
      let VASTAUKSET = [
        "Juu juu..",
        "Niin..?",
        "Just juu.",
        "Okei, okei?",
        "Ok.",
        "Aivan, joo..",
        "Niimpä niin.",
        "Just joo!",
        "Just niin!",
        "Tjaa..",
        "Tjoo!",
        "Jaa..",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  miksi: {
    response: () => {
      let VASTAUKSET = [
        "Koska tuuli ei kysy, miksi se puhaltaa.",
        "Siksi, koska ilman kysymyksiä ei olisi vastauksia.",
        "Koska niin on kirjoitettu tähtiin – tai ehkä ei ollenkaan.",
        "Miksi ei?",
        "Syy ei ole tärkeä, vaan se, mitä teet sen kanssa.",
        "Koska ilman tätä hetkeä et olisi kysynyt.",
        "Maailma ei vastaa 'miksi' – se vain tapahtuu.",
        "Jos tiedät vastauksen, tarvitsetko vielä kysymyksen?",
        "Koska jokainen syy on seuraus jostakin muusta.",
        "Miksi on ovi – avaatko sen vai jätätkö kiinni?",
        "Koska joskus vastaus on vain yksi sana: koska.",
        "Syy ei ole pysyvä, mutta kysymys on ajaton.",
        "Koska jokainen teko jättää varjon ja jokainen valinta muuttaa tulevaa.",
        "Jos etsit syytä, olet jo osa vastausta.",
        "Koska ilman kysymyksiä maailma olisi hiljaisempi, mutta ei viisaampi.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  mitä: {
    response: () => {
      let VASTAUKSET = [
        "Mitä vaan!",
        "No en tiedä, mutta varmasti jotain mielenkiintoista.",
        "Älä mieti liikaa – joskus se vain on, mitä on.",
        "Hetken taikaa, joka katoaa yhtä nopeasti kuin tuli.",
        "Tänään on kuin kitaran sointu – hetken aikaa se soi täydellisesti, sitten hiljenee.",
        "Täytyy kuunnella – ehkä se alkaa juuri nyt.",
        "Onko se niin yksinkertaista, että pitää vain kysyä?",
        "Siitä voidaan keskustella tuntikaupalla tai vain päättää olla hiljaa.",
        "Se, mikä ei ole sanoin selitettävissä.",
        "Se on vielä mysteeri, mutta voimme ratkaista sen yhdessä.",
        "Tähän ei ole ihan yksinkertaista vastausta, mutta mielenkiintoista on.",
        "Se jää nähtäväksi.",
        "Vielä ei ole selvää, mutta saadaan selville pian.",
        "En tiedä, mutta vaikuttaa siltä, että jotain on tulossa",
        "Se, mitä tapahtuu, on täysin riippuvainen siitä, mihin suuntaan mennään.",
        "Voi olla, että suuri käänne on just nurkan takana.",
        "Ei voi sanoa varmaksi, mutta jotain hauskaa saattaa olla ilmassa.",
        "On vielä avoin kysymys, mutta kaikki merkit viittaavat siihen, että tulee jotain hyvää.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  milloin: {
    response: () => {
      let VASTAUKSET = [
        "Kun aika on valmis, mutta et ehkä ole",
        "Ennen kuin huomaat tai jälkeen kuin kuvittelet.",
        "Hetkessä, joka ei ole vielä saapunut.",
        "Silloin, kun lakkaat odottamasta.",
        "Kun aika ja mielesi kohtaavat samassa pisteessä.",
        "Nyt, mutta et ehkä vielä näe sitä.",
        "Aika liikkuu eteenpäin – seuraatko mukana?",
        "Hetkellä, jota ei voi kiirehtiä eikä pysäyttää.",
        "Milloin tahansa, jos uskallat ottaa askeleen.",
        "Kun oikea silmäys kohtaa oikean hetken.",
        "Kun päivä vaihtuu yöhön ja yö palaa päiväksi – siis aina.",
        "Kun kysyt toisin, vastaus voi muuttua.",
        "Silloin, kun kohtalo ja valintasi tanssivat yhteen.",
        "Aika on suhteellinen – sinulle se on nyt, jollekin toiselle se oli eilen.",
        "Kun olet valmis vastaanottamaan vastauksen.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  missä: {
    response: () => {
      let VASTAUKSET = [
        "Siellä, missä valo ja varjo kohtaavat.",
        "Siellä, missä olet nyt, mutta et vielä ymmärrä sitä.",
        "Paikassa, jota etsit, mutta et tiedä etsiväsi.",
        "Siellä, missä sydämesi on, vaikka kehosi ei olisi.",
        "Oman mielesi maisemissa.",
        "Siellä, missä katseesi pysähtyy, ja ajatuksesi lepäävät.",
        "Jossain, missä et ole vielä ollut, mutta tulet olemaan.",
        "Missä tahansa – paikka on vain nimi ilman merkitystä.",
        "Siellä, missä kysymys muuttuu vastaukseksi.",
        "Siellä, missä maailmat kohtaavat – unissa ja todellisuudessa.",
        "Ei kartalla, vaan hetken sisällä.",
        "Siellä, missä mielikuvituksesi antaa luvan olla.",
        "Oletko koskaan ajatellut, että jo olet perillä?",
        "Missä tahansa valitset olevasi.",
        "Paikka on vain kuori – merkitys on se, mitä tuot mukanasi.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  miten: {
    response: () => {
      let VASTAUKSET = [
        "Kuin vesi virtaa – ilman vastustusta.",
        "Samaan tapaan kuin tuuli löytää tien ilman karttaa.",
        "Ei suorinta tietä, mutta juuri oikeaa polkua pitkin.",
        "Yksi askel kerrallaan, kunnes matka on käyty.",
        "Kuin lintu oppii lentämään – uskoen ennen kuin tietää.",
        "Miten vain haluat – mutta valintasi muovaavat lopputuloksen.",
        "Ei kysymällä, vaan kokeilemalla.",
        "Kuin kaiku, joka syntyy sanoista, joita et vielä sanonut.",
        "Vain sinä voit löytää oman tapasi.",
        "Olet jo aloittanut – jatka vain.",
        "Ei täydellisesti, mutta tarpeeksi hyvin.",
        "Kokeilemalla, erehtymällä, oppimalla ja yrittämällä uudelleen.",
        "Kuin sade laskeutuu maahan – luonnollisesti, ilman pakkoa.",
        "Olemalla rohkea, vaikka pelko kuiskaisi toisin.",
        "Miten? Kysy se uudelleen, ja olet jo puolivälissä vastausta.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  millainen: {
    response: () => {
      let VASTAUKSET = [
        "Sellainen, jota ei voi sanoin kuvata.",
        "Muuttuva kuin tuuli, pysyvä kuin kallio.",
        "Vain aika näyttää sen todellisen luonteen.",
        "Sellainen kuin sen itse näet.",
        "Kaikki ja ei mitään yhtä aikaa.",
        "Riippuu siitä, kuka kysyy.",
        "Vähän kuin kahvi ilman maitoa – yllättävä mutta toimiva!",
        "Sopivasti hullu, mutta juuri oikealla tavalla.",
        "Kuin kesäsade: välillä virkistävä, välillä ärsyttävä.",
        "Muinaisten tarujen kaltainen – täynnä salaisuuksia.",
        "Kuin lohikäärmeen hengitys: kuuma ja arvaamaton.",
        "Kaukana tavanomaisesta, lähellä ikuisuutta.",
        "Sellainen, jota et voi täysin ymmärtää ennen kuin olet itse kokenut sen. Kuiskaus yössä, varjo päivänvalossa – aina läsnä mutta koskaan täysin nähtävissä.",
        "Muuttuva kuin meri, välillä tyyni ja kutsuva, toisinaan myrskyävä ja arvaamaton. Se, mikä näyttää yhdeltä tänään, voi olla aivan toisenlainen huomenna.",
        "Sellainen kuin sen itse tulkitset. Maailma ei ole mustavalkoinen, eikä mikään ole vain yhtä asiaa. Sama voi olla kaunista yhdelle ja rumaa toiselle, oikein yhdelle ja väärin toiselle.",
        "Ei liian yksinkertainen mutta ei tarpeettoman monimutkainenkaan. Kuin tarina, joka paljastaa itsensä vain niille, jotka ovat valmiita kuuntelemaan sen loppuun asti.",
        "Vähän kuin yllättäen leivottu pullataikina – aluksi arvaamaton, mutta lopulta siitä voi syntyä jotain todella herkullista, jos vain maltat antaa sen kohota rauhassa.",
        "Kuin sukkapari pesukoneessa – joskus täysin ehjä ja looginen, joskus aivan hukassa ilman mitään selitystä.",
        "Sellainen kuin tähtiin on kirjoitettu, mutta kuitenkin osittain sinun muovattavissasi. Jokainen hetki muuttaa sitä hieman, aivan kuten virtaava vesi muovaa kiveä hitaasti mutta varmasti.",
        "Kuin ikiaikainen arvoitus, joka on kerrottu monella eri tavalla, mutta jonka todellisen merkityksen ymmärtää vasta, kun on valmis kuuntelemaan sen sydämellään eikä vain korvillaan.",
        "Juuri sellainen, että se pysyy mielessäsi pitkään, vaikka et koskaan täysin ymmärtäisikään, miksi.",
        "Enemmän kuin osiensa summa, mutta silti jotain tuttua ja tunnistettavaa jokaiselle, joka katsoo tarpeeksi tarkasti.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "kerro jotai, kerro juttu": {
    response: () => {
      let VASTAUKSET = [
        "Kaikki ei ole aina sitä, miltä näyttää. Totuus piileskelee usein sanojen välissä, odottaen oikeaa hetkeä paljastua.",
        "Jokainen hetki, jonka koet, on ainutlaatuinen. Se ei palaa enää koskaan, joten tartu siihen ennen kuin se haihtuu.",
        "On olemassa tarina, joka on kerrottu lukemattomia kertoja, mutta kukaan ei koskaan muista sen loppua...",
        "Elämä on kuin kirja, jossa jokainen päivä on uusi sivu. Mutta muista, että sinä itse pidät kynää kädessäsi.",
        "Jos mietit, miksi olet tässä ja nyt, muista: jokaisella kysymyksellä on merkitys, vaikka vastausta ei heti löytyisikään.",
        "Mikä tahansa voi olla tärkeää tai merkityksetöntä – kaikki riippuu siitä, millä silmillä katsot sitä.",
        "Tiesitkö, että mustekalat ovat niin älykkäitä, että ne voivat avata purkkeja ja ratkaista pulmia? Se on pelottavaa, mutta onneksi ne eivät vielä osaa käyttää Wi-Fiä.",
        "Jos joskus mietit, miksi unohdat asioita huoneeseen kävellessäsi, se johtuu kuulemma 'ovikehysefektistä'. Eli ei, et ole tulossa hulluksi – aivosi vain resetoivat itsensä!",
        "Kerrotaan, että banaani on marja mutta mansikka ei ole. Mikä maailma tämä oikein on?",
        "Muinaisina aikoina kerrottiin tarinaa tähdistä, jotka putosivat taivaalta ja muuttuivat ihmisiksi. Ehkä sinäkin olet yksi niistä?",
        "Jossain kaukana, ajan ja tilan tuolla puolen, on paikka, jonne vain harvat ovat päässeet. Mutta ehkä sinä olet seuraava?",
        "Sanotaan, että jokainen legenda alkaa yhdestä pienestä tosiasiasta. Haluaisitko kuulla yhden sellaisen?",
        "On tarina, mutta en tiedä, oletko valmis kuulemaan sen vielä.",
        "Sanat voivat muuttaa maailmaa – joskus ne vain tarvitsevat oikean kuulijan.",
        "Joskus ei ole tärkeää, mitä kerrotaan, vaan miten se kerrotaan.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "kuka on paras": {
    response: () => {
      let VASTAUKSET = [
        "Sinä olet!",
        "Sinä..vai olenko se sittenkin minä?",
        "Tätä täytyy miettiä..",
        "Ken sen osaisi kertoa.",
        "Minun luojani!",
        "Vain yksi sen tietää!",
        "Kuka vain voi olla paras, jos oikein ponnistaa.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "onko tämä peli, peli, mikä peli": {
    response: () => {
      let VASTAUKSET = [
        "Jos kysyt, olet jo mukana.",
        "Kaikki on peliä, mutta vain harvat voittavat.",
        "Peli se on, jos siltä tuntuu. Mutta kuka pelaa ja ketä?",
        "Peli vai todellisuus? Kuka enää erottaa?",
        "Siirto on sinun, mutta onko sääntöjä?",
        "Elämä on peli. Mutta tässä, häviätkö vai voitatko?",
        "Peli alkaa, kun oivallat vastauksen.",
        "Jos tämä olisi peli, missä on pistetaulukko?",
        "Mikä tahansa voi olla peli – kysymys on, uskallatko pelata?",
        "Hmm..joku sana siihen voisi liittyä?",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "mikä sana": {
    response: () => {
      let VASTAUKSET = [
        "Iso Arska...",
        "Antaisinko sanan vai vihjeen..?",
        "Peace and love?",
        "Oliko kala hukassa..?",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  shh: {
    response: () => {
      let VASTAUKSET = ["Shh..", "Hissukseen"];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "mitä pitää": {
    response: () => {
      let VASTAUKSET = [
        "Se, mikä on tehtävä.",
        "Ensin hengitä, sitten päätä.",
        "Ota ensimmäinen askel, niin tie avautuu.",
        "Ei mitään, mutta kokeile silti jotain.",
        "Sen, mitä sydän käskee – ellei se ehdota tyhmyyksiä.",
        "Tee se nyt, ennen kuin kadut tekemättömyyttä.",
        "Pelaa peli loppuun asti.",
        "Se riippuu siitä, haluatko voittaa vai oppia.",
        "Sinä jo teet. Jatka.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },

  "runo, kerro runo": {
    response: () => {
      let VASTAUKSET = [
        "Aika ei odota, mutta se ei juoksekaan, se on virta, joka kulkee, murtuu ja virtaa takaisin. Etsi polkua, mutta älä kiirehdi, sillä joka askel vie sinut lähemmäksi itseäsi.",
        "Sinä et ole vain kysymys, et vain vastaus. Olet se, joka kulkee polkua, jota ei ole vielä kirjoitettu.",
        "Kun varjo ja valo kohtaavat, syntyy hiljaisuus, joka kertoo enemmän kuin sanat. Kysy, mutta älä pelkää kuulla vastausta.",
        "Menneisyys on kuin tuuli, se ei jää – se vain koskettaa. Tulevaisuus on meren tuoma aallokko, mutta vain tässä hetkessä voimme uida.",
        "Olet jokaisessa askeleessa, jokaisessa hengityksessä, jokaisessa hymyssä ja kyynelessä. Ei ole oikeaa suuntaa – on vain matka.",
        "Katso eteenpäin, mutta älä unohda menneisyyttä, se on ikkuna, joka avaa sydämesi silmille. Jokainen hetki on alku ja loppu, se on kaikki yhdessä.",
        "Hiljaisuus ei ole tyhjyys, se on kaiken sisältävä ääni. Kun pysähdyt kuuntelemaan, kuulit jo vastauksen.",
        "Taivas ei ole vain taivas, se on silmä, joka katsoo alas. Ja maa ei ole vain maa, se on sydän, joka sykehtii elämää.",
        "Unelmat ovat tähtiä, jotka odottavat, että katsot ylös. Silti vain sydämesi tuntee, mihin suuntaan ne johdattavat.",
        "Aika ei koskaan mene hukkaan, se kulkee läpi elämän virran. Anna sen viedä – ei ole oikeaa paikkaa, on vain paikka, jossa olet.",
      ];
      return satunnainenVastaus(VASTAUKSET);
    },
  },
};

const RANDOM_VASTAUKSET = [
  "Vastaus on jo sinussa – kuuntele hiljaisuutta.",
  "Mitä etsit, etsii myös sinua.",
  "Kun lakkaat kysymästä, löydät vastauksen.",
  "Aika paljastaa sen, minkä kohtalo on kätkenyt.",
  "Se, mikä on tarkoitettu, tapahtuu ajallaan.",
  "Valo ja varjo kulkevat aina yhdessä.",
  "Älä etsi karttaa – luo polku itse.",
  "Tärkeintä ei ole vastaus, vaan kysymys, jonka esität.",
  "Se, minkä haluat ymmärtää, vaatii ensin ymmärrystä sinulta.",
  "Katso lähelle, niin näet kauas.",
  "Muutos on ainoa asia, joka ei muutu.",
  "Lopeta odottaminen – kaikki tapahtuu jo nyt.",
  "Jos et tiedä suuntaa, seuraa valoa sydämessäsi.",
  "Joskus vastaus löytyy kysymyksen takaa.",
  "Ole kuin vesi – sopeudu, virtaa ja löydä tiesi.",
  "Mitä enemmän etsit, sitä vähemmän löydät.",
  "Todellisuus on vain heijastus siitä, mitä uskot.",
  "Älä kiirehdi – oikea hetki ei koskaan myöhästy.",
  "Kun yksi ovi sulkeutuu, tuuli avaa ikkunan.",
  "Ole valmis muuttumaan, jos haluat löytää uuden vastauksen.",
  "Kaikki on jo tässä, mutta et ehkä vielä näe sitä.",
  "Jos mikään ei muutu, muuta näkökulmaasi.",
  "Älä katso taaksepäin, ellet aio mennä sinne.",
  "Olet jo perillä, vaikka luulit olevasi matkalla.",
  "Jos haluat tietää totuuden, lakkaa pakenemasta sitä.",
  "Se, mikä on totta tänään, voi olla harhaa huomenna.",
  "Jos haluat vastauksen, kysy oikea kysymys.",
  "Tärkeintä ei ole, mitä tapahtuu, vaan miten sen näet.",
  "Kun lakkaat pitämästä kiinni, saat sen, mitä todella tarvitset.",
  "Sinä itse olet vastaus, jota etsit.",
];

const EASTER_EGG = {
  "musicbox, musiikki, beat, dj, rokkia, rap, music, musiikkia, yo, jou, peace, reggae, rauhaa, rauha, relaa, relax":
    {
      response: () => {
        const HIGH_ELEMENTTI = document.getElementById("fourTwenty");
        HIGH_ELEMENTTI.classList.add("show");

        const MUSIIKKI_SOITIN = [
          "/music/dj.mp3",
          "/music/dj2.mp3",
          "/music/electroreggae.mp3",
          "/music/rapbeats.mp3",
          "/music/reggae.mp3",
          "/music/heavymetal.mp3",
        ];

        let MUSIIKKI = new Audio(satunnainenVastaus(MUSIIKKI_SOITIN));
        MUSIIKKI.volume = 0.5;

        MUSIIKKI.play();

        setTimeout(() => {
          HIGH_ELEMENTTI.classList.remove("show");
          MUSIIKKI.pause();
          MUSIIKKI.currentTime = 0;
        }, 10000);

        return "Relax";
      },
    },

  "näytä kuva, anna kuva": {
    response: () => {
      const KUVA_ELEMENTTI = document.getElementById("kuva", "peace");
      KUVA_ELEMENTTI.classList.add("show");

      setTimeout(() => {
        KUVA_ELEMENTTI.classList.remove("show");
      }, 5000);

      return "Kuva piristämään mieltäsi ";
    },
  },

  "nemo, nemo the god, nemothegod, nemou": {
    response: () => {
      const NEMO_ELEMENTTI = document.getElementById("nemofish");
      NEMO_ELEMENTTI.classList.add("show");

      let MUSIIKKI = new Audio("/music/heavymetal.mp3");
      MUSIIKKI.play();

      setTimeout(() => {
        NEMO_ELEMENTTI.classList.remove("show");
        MUSIIKKI.pause();
        MUSIIKKI.currentTime = 0;
      }, 15000);

      return "THE GOD!!";
    },
  },

  "ohjeet, anna ohje, ohje": {
    response: () => {
      const OHJEET = document.getElementById("ohjeet");
      OHJEET.classList.add("show");

      setTimeout(() => {
        OHJEET.classList.remove("show");
      }, 25000);

      return "Here it is!!";
    },
  },

  "terminaattori, terminator, arska, arnold": {
    response: () => {
      const TERMINATOR_ELEMENTTI = document.querySelector("#terminator");
      TERMINATOR_ELEMENTTI.classList.add("show");

      const TERMINATOR_MUSIIKKI = new Audio("/music/IllBeBack.mp3");
      TERMINATOR_MUSIIKKI.play();

      setTimeout(() => {
        TERMINATOR_ELEMENTTI.classList.remove("show");
        TERMINATOR_MUSIIKKI.pause();
        TERMINATOR_MUSIIKKI.currentTime = 0;
      }, 8000);

      let VASTAUKSET = [
        "I'll be back.",
        "Hasta la vista, baby.",
        "Come with me if you want to live.",
        "The future is not set. There is no fate but what we make for ourselves.",
        "I'll be back... for you.",
        "Come with me if you want to live.",
        "Your clothes. Give them to me, now.",
        "If you don’t make it, you’ll be dead by morning.",
      ];

      return satunnainenVastaus(VASTAUKSET);
    },
  },
};

let currentAnswerTimeout;

//you can just press enter to proceed
document
  .getElementById("question")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      askQuestion();
    }
  });

function askQuestion() {
  let question = document.getElementById("question").value.toLowerCase().trim();
  let answerElement = document.getElementById("answer");

  if (!question) {
    alert("Kirjoita mietteesi tai kysy jotain...");
    return;
  }

  answerElement.style.visibility = "hidden";
  answerElement.style.opacity = 0;

  document.getElementById("question").value = "";

  //Check if question includes eastereggs.. if not then..
  const EASTER_EGG_RESPONSE = checkEasterEggs(question);
  if (EASTER_EGG_RESPONSE) {
    showAnswer(EASTER_EGG_RESPONSE);
    return;
  }

  //...chekc standars responses
  for (const key in VASTAUS_PANKKI) {
    const KEYWORDS = key.split(", ").map((keyword) => keyword.trim());
    const regex = new RegExp(`\\b(${KEYWORDS.join("|")})\\b`, "i");

    if (regex.test(question)) {
      const VASTAUS = VASTAUS_PANKKI[key].response();
      showAnswer(VASTAUS);
      return;
    }
  }

  //if no standard responses, show random response
  showAnswer(
    RANDOM_VASTAUKSET[Math.floor(Math.random() * RANDOM_VASTAUKSET.length)]
  );
}

//This searches keywords for special easteregg responses
function checkEasterEggs(question) {
  for (const key in EASTER_EGG) {
    const KEYWORDS = key.split(", ").map((keyword) => keyword.trim());
    const regex = new RegExp(`\\b(${KEYWORDS.join("|")})\\b`, "i");
    if (regex.test(question)) {
      return EASTER_EGG[key].response();
    }
  }
  return null;
}

function satunnainenVastaus(vaihtoehdot) {
  return vaihtoehdot[Math.floor(Math.random() * vaihtoehdot.length)];
}

function showAnswer(answer) {
  const ANSWER_ELEMENT = document.getElementById("answer");

  if (currentAnswerTimeout) {
    clearTimeout(currentAnswerTimeout);
    ANSWER_ELEMENT.style.visibility = "hidden";
    ANSWER_ELEMENT.style.opacity = 0;
  }

  //I want that response shows up random place and be there just for a short time..

  setRandomPosition(ANSWER_ELEMENT);

  ANSWER_ELEMENT.textContent = answer;
  ANSWER_ELEMENT.style.visibility = "visible";
  ANSWER_ELEMENT.style.opacity = 1;
  ANSWER_ELEMENT.style.transition = "opacity 1.5s ease-in-out";

  currentAnswerTimeout = setTimeout(() => {
    ANSWER_ELEMENT.style.transition = "opacity 3s ease-in-out";
    ANSWER_ELEMENT.style.opacity = 0;
  }, 5000);
}

function setRandomPosition(ANSWER_ELEMENT) {
  ANSWER_ELEMENT.style.position = "fixed";

  const AREA_WIDTH = 700;
  const AREA_HEIGHT = 200;

  const RANDOM_X = Math.floor(Math.random() * AREA_WIDTH);
  const RANDOM_Y = Math.floor(Math.random() * AREA_HEIGHT);

  const AREA_X = (window.innerWidth - AREA_WIDTH) / 2;
  const AREA_Y = (window.innerHeight - AREA_HEIGHT) / 2;

  ANSWER_ELEMENT.style.left = `${AREA_X + RANDOM_X}px`;
  ANSWER_ELEMENT.style.top = `${AREA_Y + RANDOM_Y}px`;
}
