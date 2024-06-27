class CookieConsent {
	constructor(options = {}) {
		const defaults = {
			consentPropertyType: 'cookie_consent_status',
			theme: 'light',
			activeClass: 'show',
			loadScripts: [],
		}

		Object.assign(this, defaults, options)

		this.translations = this.getTranslations()
		this.language = this.detectLanguage(this.translations)
	}

	detectLanguage(translations) {
		let pageLanguage = document.documentElement.lang || 'en'
		pageLanguage = pageLanguage.split('-')[0]
		return translations[pageLanguage] ? pageLanguage : 'en'
	}

	getTranslations() {
		return {
			en: {
				title: 'We use cookies',
				description:
					'Our website uses essential cookies to ensure its proper operation, and tracking cookies to understand how you interact with it. Tracking will be enabled only upon your explicit consent.',
				acceptAll: 'Accept all',
				dismiss: 'Dismiss',
				modalTitle: 'Cookie settings',
				modalDescription:
					'You can choose which cookies you want to allow. Find out more in our',
				strictlyNecessary: 'Strictly necessary cookies',
				strictlyNecessaryDescription:
					'These cookies are essential for the website to function properly. They ensure basic functionalities and security features of the website, anonymously.',
				performanceCookies: 'Performance and analytics cookies',
				performanceDescription:
					'Performance cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.',
				targetingCookies: 'Targeting and Advertising cookies',
				targetingDescription:
					'Targeting cookies are used to deliver ads more relevant to you and your interests.',
				acceptAllModal: 'Accept all',
				rejectAllModal: 'Reject all',
				saveSettings: 'Save settings',
				preferences: 'Cookie Preferences',
			},
			de: {
				title: 'Wir verwenden Cookies',
				description:
					'Unsere Website verwendet notwendige Cookies, um deren ordnungsgemäßen Betrieb sicherzustellen, und Tracking-Cookies, um zu verstehen, wie Sie damit interagieren. Das Tracking wird nur mit Ihrer ausdrücklichen Zustimmung aktiviert.',
				acceptAll: 'Alle akzeptieren',
				dismiss: 'Ablehnen',
				modalTitle: 'Cookie-Einstellungen',
				modalDescription:
					'Sie können auswählen, welche Cookies Sie zulassen möchten. Weitere Informationen finden Sie in unserer',
				strictlyNecessary: 'Unbedingt erforderliche Cookies',
				strictlyNecessaryDescription:
					'Diese Cookies sind für das ordnungsgemäße Funktionieren der Website unerlässlich. Sie gewährleisten grundlegende Funktionen und Sicherheitsmerkmale der Website anonym.',
				performanceCookies: 'Leistungs- und Analyse-Cookies',
				performanceDescription:
					'Leistungs-Cookies ermöglichen es uns, Besuche und Verkehrsquellen zu zählen, damit wir die Leistung unserer Website messen und verbessern können.',
				targetingCookies: 'Targeting- und Werbe-Cookies',
				targetingDescription:
					'Targeting-Cookies werden verwendet, um Ihnen relevantere Anzeigen basierend auf Ihren Interessen zu liefern.',
				acceptAllModal: 'Alle akzeptieren',
				rejectAllModal: 'Alle ablehnen',
				saveSettings: 'Einstellungen speichern',
				preferences: 'Cookie-Einstellungen',
			},
			it: {
				title: 'Utilizziamo i cookie',
				description:
					'Il nostro sito web utilizza cookie essenziali per garantirne il corretto funzionamento e cookie di tracciamento per capire come interagisci con esso. Il tracciamento sarà abilitato solo con il tuo esplicito consenso.',
				acceptAll: 'Accetta tutto',
				dismiss: 'Rifiuta',
				modalTitle: 'Impostazioni dei cookie',
				modalDescription:
					'Puoi scegliere quali cookie consentire. Scopri di più nel nostro',
				strictlyNecessary: 'Cookie strettamente necessari',
				strictlyNecessaryDescription:
					'Questi cookie sono essenziali per il corretto funzionamento del sito web. Garantiscano funzionalità di base e caratteristiche di sicurezza del sito web in modo anonimo.',
				performanceCookies: 'Cookie di prestazione e analisi',
				performanceDescription:
					'I cookie di prestazione ci permettono di contare le visite e le fonti di traffico per misurare e migliorare le prestazioni del nostro sito.',
				targetingCookies: 'Cookie di targeting e pubblicità',
				targetingDescription:
					'I cookie di targeting vengono utilizzati per fornire annunci più pertinenti in base ai tuoi interessi.',
				acceptAllModal: 'Accetta tutto',
				rejectAllModal: 'Rifiuta tutto',
				saveSettings: 'Salva impostazioni',
				preferences: 'Preferenze sui cookie',
			},
			fr: {
				title: 'Nous utilisons des cookies',
				description:
					"Notre site Web utilise des cookies essentiels pour garantir son bon fonctionnement et des cookies de suivi pour comprendre comment vous interagissez avec lui. Le suivi ne sera activé qu'avec votre consentement explicite.",
				acceptAll: 'Tout accepter',
				dismiss: 'Refuser',
				modalTitle: 'Paramètres des cookies',
				modalDescription:
					'Vous pouvez choisir les cookies que vous souhaitez autoriser. En savoir plus dans notre',
				strictlyNecessary: 'Cookies strictement nécessaires',
				strictlyNecessaryDescription:
					'Ces cookies sont essentiels au bon fonctionnement du site Web. Ils garantissent des fonctionnalités de base et des caractéristiques de sécurité du site Web de manière anonyme.',
				performanceCookies: "Cookies de performance et d'analyse",
				performanceDescription:
					"Les cookies de performance nous permettent de compter les visites et les sources de trafic afin de mesurer et d'améliorer les performances de notre site.",
				targetingCookies: 'Cookies de ciblage et de publicité',
				targetingDescription:
					'Les cookies de ciblage sont utilisés pour diffuser des publicités plus pertinentes en fonction de vos intérêts.',
				acceptAllModal: 'Tout accepter',
				rejectAllModal: 'Tout refuser',
				saveSettings: 'Enregistrer les paramètres',
				preferences: 'Préférences de cookies',
			},
			zh: {
				title: '我们使用Cookie',
				description:
					'我们的网站使用必要的Cookie来确保其正常运行，并使用跟踪Cookie来了解您如何与其互动。仅在您明确同意的情况下，才会启用跟踪。',
				acceptAll: '接受所有',
				dismiss: '拒绝',
				modalTitle: 'Cookie设置',
				modalDescription: '您可以选择要允许的Cookie。在我们的',
				strictlyNecessary: '严格必要的Cookie',
				strictlyNecessaryDescription:
					'这些Cookie对于网站的正常运行至关重要。它们以匿名方式确保网站的基本功能和安全特性。',
				performanceCookies: '性能和分析Cookie',
				performanceDescription:
					'性能Cookie使我们能够统计访问量和流量来源，以便我们衡量和改进我们网站的性能。',
				targetingCookies: '定向和广告Cookie',
				targetingDescription: '定向Cookie用于提供更符合您的兴趣的广告。',
				acceptAllModal: '接受所有',
				rejectAllModal: '全部拒绝',
				saveSettings: '保存设置',
				preferences: 'Cookie设置',
			},
			sv: {
				title: 'Vi använder cookies',
				description:
					'Vår webbplats använder nödvändiga cookies för att säkerställa att den fungerar korrekt, och spårningscookies för att förstå hur du interagerar med den. Spårning kommer endast att aktiveras med ditt uttryckliga samtycke.',
				acceptAll: 'Acceptera alla',
				dismiss: 'Avvisa',
				modalTitle: 'Cookie-inställningar',
				modalDescription:
					'Du kan välja vilka cookies du vill tillåta. Läs mer i vår',
				strictlyNecessary: 'Strikt nödvändiga cookies',
				strictlyNecessaryDescription:
					'Dessa cookies är väsentliga för att webbplatsen ska fungera korrekt. De säkerställer grundläggande funktioner och säkerhetsfunktioner på webbplatsen anonymt.',
				performanceCookies: 'Prestanda- och analyscookies',
				performanceDescription:
					'Prestanda-cookies gör att vi kan räkna besök och trafik källor så att vi kan mäta och förbättra prestandan på vår webbplats.',
				targetingCookies: 'Mål- och reklamcookies',
				targetingDescription:
					'Mål-cookies används för att leverera annonser som är mer relevanta för dig och dina intressen.',
				acceptAllModal: 'Acceptera alla',
				rejectAllModal: 'Avvisa alla',
				saveSettings: 'Spara inställningar',
				preferences: 'Cookie-inställningar',
			},
			es: {
				title: 'Usamos cookies',
				description:
					'Nuestro sitio web utiliza cookies esenciales para garantizar su correcto funcionamiento, y cookies de seguimiento para comprender cómo interactúa con él. El seguimiento se habilitará solo con su consentimiento explícito.',
				acceptAll: 'Aceptar todas',
				dismiss: 'Rechazar',
				modalTitle: 'Configuración de cookies',
				modalDescription:
					'Puede elegir qué cookies desea permitir. Obtenga más información en nuestro',
				strictlyNecessary: 'Cookies estrictamente necesarias',
				strictlyNecessaryDescription:
					'Estas cookies son esenciales para el correcto funcionamiento del sitio web. Garantizan funcionalidades básicas y características de seguridad del sitio web de manera anónima.',
				performanceCookies: 'Cookies de rendimiento y análisis',
				performanceDescription:
					'Las cookies de rendimiento nos permiten contar visitas y fuentes de tráfico para que podamos medir y mejorar el rendimiento de nuestro sitio.',
				targetingCookies: 'Cookies de orientación y publicidad',
				targetingDescription:
					'Las cookies de orientación se utilizan para ofrecer anuncios más relevantes según sus intereses.',
				acceptAllModal: 'Aceptar todas',
				rejectAllModal: 'Rechazar todas',
				saveSettings: 'Guardar configuración',
				preferences: 'Preferencias de cookies',
			},
			hr: {
				title: 'Koristimo kolačiće',
				description:
					'Naša web stranica koristi osnovne kolačiće za osiguravanje pravilnog rada i kolačiće za praćenje kako bi razumjela kako se s njom interaktivno koristite. Praćenje će biti omogućeno samo uz vašu izričitu suglasnost.',
				acceptAll: 'Prihvati sve',
				dismiss: 'Odbaci',
				modalTitle: 'Postavke kolačića',
				modalDescription:
					'Možete odabrati koje kolačiće želite dopustiti. Saznajte više u našoj',
				strictlyNecessary: 'Strogo potrebni kolačići',
				strictlyNecessaryDescription:
					'Ovi kolačići su neophodni za ispravno funkcioniranje web stranice. Anonimno osiguravaju osnovne funkcionalnosti i sigurnosne značajke web stranice.',
				performanceCookies: 'Kolačići za izvedbu i analizu',
				performanceDescription:
					'Kolačići za izvedbu omogućuju nam brojanje posjeta i izvora prometa kako bismo mogli mjeriti i poboljšati izvedbu naše stranice.',
				targetingCookies: 'Kolačići za ciljanje i oglašavanje',
				targetingDescription:
					'Kolačići za ciljanje koriste se za prikazivanje relevantnijih oglasa prema vašim interesima.',
				acceptAllModal: 'Prihvati sve',
				rejectAllModal: 'Odbaci sve',
				saveSettings: 'Spremi postavke',
				preferences: 'Postavke kolačića',
			},
			nl: {
				title: 'We gebruiken cookies',
				description:
					'Onze website maakt gebruik van essentiële cookies om een goede werking te garanderen, en trackingcookies om te begrijpen hoe u ermee omgaat. Tracking wordt alleen ingeschakeld met uw uitdrukkelijke toestemming.',
				acceptAll: 'Accepteer alles',
				dismiss: 'Weiger',
				modalTitle: 'Cookie-instellingen',
				modalDescription:
					'U kunt kiezen welke cookies u wilt toestaan. Meer informatie vindt u in onze',
				strictlyNecessary: 'Strikt noodzakelijke cookies',
				strictlyNecessaryDescription:
					'Deze cookies zijn essentieel voor de juiste werking van de website. Ze zorgen voor basisfunctionaliteiten en beveiligingsfuncties van de website, anoniem.',
				performanceCookies: 'Prestatie- en analysecookies',
				performanceDescription:
					'Prestatiecookies stellen ons in staat om bezoeken en verkeersbronnen te tellen, zodat we de prestaties van onze site kunnen meten en verbeteren.',
				targetingCookies: 'Targeting- en advertentiecookies',
				targetingDescription:
					'Targetingcookies worden gebruikt om advertenties relevanter voor u en uw interesses te maken.',
				acceptAllModal: 'Accepteer alles',
				rejectAllModal: 'Weiger alles',
				saveSettings: 'Instellingen opslaan',
				preferences: 'Cookie-instellingen',
			},
			no: {
				title: 'Vi bruker informasjonskapsler',
				description:
					'Nettstedet vårt bruker essensielle informasjonskapsler for å sikre at det fungerer riktig, og sporingskapsler for å forstå hvordan du samhandler med det. Sporingen aktiveres bare med ditt uttrykkelige samtykke.',
				acceptAll: 'Aksepter alle',
				dismiss: 'Avvis',
				modalTitle: 'Innstillinger for informasjonskapsler',
				modalDescription:
					'Du kan velge hvilke informasjonskapsler du vil tillate. Finn ut mer i vår',
				strictlyNecessary: 'Strengt nødvendige informasjonskapsler',
				strictlyNecessaryDescription:
					'Disse informasjonskapslene er essensielle for at nettstedet skal fungere som det skal. De sikrer grunnleggende funksjonaliteter og sikkerhetsfunksjoner på nettstedet anonymt.',
				performanceCookies: 'Ytelses- og analyseskapsler',
				performanceDescription:
					'Ytelseskapsler lar oss telle besøk og trafikkilder slik at vi kan måle og forbedre ytelsen til nettstedet vårt.',
				targetingCookies: 'Målretting og annonseringskapsler',
				targetingDescription:
					'Målrettingskapsler brukes til å levere annonser som er mer relevante for deg og dine interesser.',
				acceptAllModal: 'Aksepter alle',
				rejectAllModal: 'Avvis alle',
				saveSettings: 'Lagre innstillinger',
				preferences: 'Cookie-innstillinger',
			},
			sl: {
				title: 'Uporabljamo piškotke',
				description:
					'Naša spletna stran uporablja bistvene piškotke za zagotovitev pravilnega delovanja in sledilne piškotke za razumevanje, kako z njo sodelujete. Sledenje bo omogočeno le z vašo izrecno privolitvijo.',
				acceptAll: 'Sprejmi vse',
				dismiss: 'Zavrni',
				modalTitle: 'Nastavitve piškotkov',
				modalDescription:
					'Izberete lahko, katere piškotke želite dovoliti. Več informacij najdete v naši',
				strictlyNecessary: 'Nujno potrebni piškotki',
				strictlyNecessaryDescription:
					'Ti piškotki so bistveni za pravilno delovanje spletnega mesta. Anonimno zagotavljajo osnovne funkcionalnosti in varnostne funkcije spletnega mesta.',
				performanceCookies: 'Piškotki za uspešnost in analitiko',
				performanceDescription:
					'Piškotki za uspešnost nam omogočajo štetje obiskov in virov prometa, da lahko merimo in izboljšamo uspešnost našega spletnega mesta.',
				targetingCookies: 'Piškotki za ciljanje in oglaševanje',
				targetingDescription:
					'Piškotki za ciljanje se uporabljajo za prikazovanje oglasov, ki so bolj pomembni za vas in vaše interese.',
				acceptAllModal: 'Sprejmi vse',
				rejectAllModal: 'Zavrni vse',
				saveSettings: 'Shrani nastavitve',
				preferences: 'Nastavitve piškotkov',
			},
			ie: {
				title: 'Úsáidimid fianáin',
				description:
					'Úsáideann ár suíomh Gréasáin fianáin riachtanacha chun a oibriú ceart a chinntiú, agus fianáin rianaithe chun a thuiscint conas a idirghníomhaíonn tú leis. Ní chuirfear rianú ar siúl ach le do thoiliú sainráite.',
				acceptAll: 'Glac le gach ceann',
				dismiss: 'Diúltaigh',
				modalTitle: 'Socruithe fianán',
				modalDescription:
					'Is féidir leat a roghnú cé na fianáin is mian leat a cheadú. Faigh amach níos mó inár',
				strictlyNecessary: 'Fianáin riachtanacha go docht',
				strictlyNecessaryDescription:
					'Tá na fianáin seo riachtanach chun go n-oibreoidh an suíomh Gréasáin i gceart. Cinntíonn siad gnéithe bunúsacha agus gnéithe slándála an láithreáin Gréasáin go hanamúil.',
				performanceCookies: 'Fianáin feidhmíochta agus anailíse',
				performanceDescription:
					'Ligeann fianáin feidhmíochta dúinn cuairteanna agus foinsí tráchta a chomhaireamh ionas gur féidir linn feidhmíocht ár suíomh a thomhas agus a fheabhsú.',
				targetingCookies: 'Fianáin sprice agus fógraíochta',
				targetingDescription:
					'Úsáidtear fianáin spriocdhírithe chun fógraí níos ábhartha a sheachadadh duit agus do do leasanna.',
				acceptAllModal: 'Glac le gach ceann',
				rejectAllModal: 'Diúltaigh gach ceann',
				saveSettings: 'Sábháil socruithe',
				preferences: 'Socruithe fianán',
			},
			pt: {
				title: 'Usamos cookies',
				description:
					'Nosso site usa cookies essenciais para garantir seu funcionamento adequado e cookies de rastreamento para entender como você interage com ele. O rastreamento será ativado apenas com seu consentimento explícito.',
				acceptAll: 'Aceitar todos',
				dismiss: 'Recusar',
				modalTitle: 'Configurações de cookies',
				modalDescription:
					'Você pode escolher quais cookies deseja permitir. Saiba mais em nossa',
				strictlyNecessary: 'Cookies estritamente necessários',
				strictlyNecessaryDescription:
					'Esses cookies são essenciais para o bom funcionamento do site. Eles garantem funcionalidades básicas e recursos de segurança do site de forma anônima.',
				performanceCookies: 'Cookies de desempenho e análise',
				performanceDescription:
					'Os cookies de desempenho nos permitem contar visitas e fontes de tráfego para que possamos medir e melhorar o desempenho do nosso site.',
				targetingCookies: 'Cookies de segmentação e publicidade',
				targetingDescription:
					'Os cookies de segmentação são usados para entregar anúncios mais relevantes para você e seus interesses.',
				acceptAllModal: 'Aceitar todos',
				rejectAllModal: 'Rejeitar todos',
				saveSettings: 'Salvar configurações',
				preferences: 'Preferências de cookies',
			},
			ar: {
				title: 'نستخدم ملفات تعريف الارتباط',
				description:
					'يستخدم موقعنا ملفات تعريف الارتباط الأساسية لضمان عمله بشكل صحيح، وملفات تعريف الارتباط للتتبع لفهم كيفية تفاعلك معه. سيتم تمكين التتبع فقط بموافقتك الصريحة.',
				acceptAll: 'قبول الكل',
				dismiss: 'رفض',
				modalTitle: 'إعدادات ملفات تعريف الارتباط',
				modalDescription:
					'يمكنك اختيار ملفات تعريف الارتباط التي تريد السماح بها. اكتشف المزيد في موقعنا',
				strictlyNecessary: 'ملفات تعريف الارتباط الضرورية للغاية',
				strictlyNecessaryDescription:
					'هذه الملفات ضرورية لكي يعمل الموقع بشكل صحيح. إنها تضمن الوظائف الأساسية وميزات الأمان للموقع بشكل مجهول.',
				performanceCookies: 'ملفات تعريف الارتباط الخاصة بالأداء والتحليل',
				performanceDescription:
					'تتيح لنا ملفات تعريف الارتباط الخاصة بالأداء حساب الزيارات ومصادر الحركة حتى نتمكن من قياس وتحسين أداء موقعنا.',
				targetingCookies: 'ملفات تعريف الارتباط الخاصة بالإعلانات والتوجيه',
				targetingDescription:
					'تُستخدم ملفات تعريف الارتباط الخاصة بالتوجيه لتقديم إعلانات أكثر صلة بك وباهتماماتك.',
				acceptAllModal: 'قبول الكل',
				rejectAllModal: 'رفض الكل',
				saveSettings: 'حفظ الإعدادات',
				preferences: 'إعدادات ملفات تعريف الارتباط',
			},
			cz: {
				title: 'Používáme cookies',
				description:
					'Naše webové stránky používají základní cookies pro zajištění správného fungování a sledovací cookies pro pochopení toho, jak s nimi interagujete. Sledování bude povoleno pouze s vaším výslovným souhlasem.',
				acceptAll: 'Přijmout vše',
				dismiss: 'Odmítnout',
				modalTitle: 'Nastavení cookies',
				modalDescription:
					'Můžete si vybrat, které cookies chcete povolit. Více informací naleznete v našem',
				strictlyNecessary: 'Nezbytně nutné cookies',
				strictlyNecessaryDescription:
					'Tyto cookies jsou nezbytné pro správné fungování webu. Zajišťují základní funkce a bezpečnostní prvky webu anonymně.',
				performanceCookies: 'Výkonové a analytické cookies',
				performanceDescription:
					'Výkonové cookies nám umožňují počítat návštěvy a zdroje provozu, abychom mohli měřit a zlepšovat výkon našich stránek.',
				targetingCookies: 'Cílené a reklamní cookies',
				targetingDescription:
					'Cílené cookies se používají k zobrazování relevantnějších reklam na základě vašich zájmů.',
				acceptAllModal: 'Přijmout vše',
				rejectAllModal: 'Odmítnout vše',
				saveSettings: 'Uložit nastavení',
				preferences: 'Nastavení cookies',
			},
			hi: {
				title: 'हम कुकीज़ का उपयोग करते हैं',
				description:
					'हमारी वेबसाइट को ठीक से चलाने के लिए आवश्यक कुकीज़ और यह समझने के लिए ट्रैकिंग कुकीज़ का उपयोग करती है कि आप इसके साथ कैसे इंटरैक्ट करते हैं। ट्रैकिंग केवल आपकी स्पष्ट सहमति पर सक्षम होगी।',
				acceptAll: 'सभी को स्वीकार करें',
				dismiss: 'खारिज करें',
				modalTitle: 'कुकी सेटिंग्स',
				modalDescription:
					'आप चुन सकते हैं कि किन कुकीज़ को अनुमति देना है। हमारे',
				strictlyNecessary: 'सख्ती से आवश्यक कुकीज़',
				strictlyNecessaryDescription:
					'ये कुकीज़ वेबसाइट को ठीक से काम करने के लिए आवश्यक हैं। वे वेबसाइट की बुनियादी कार्यक्षमता और सुरक्षा सुविधाओं को गुमनाम रूप से सुनिश्चित करती हैं।',
				performanceCookies: 'प्रदर्शन और विश्लेषण कुकीज़',
				performanceDescription:
					'प्रदर्शन कुकीज़ हमें विज़िट और ट्रैफ़िक स्रोतों को गिनने की अनुमति देती हैं ताकि हम अपनी साइट के प्रदर्शन को माप और सुधार सकें।',
				targetingCookies: 'लक्ष्यीकरण और विज्ञापन कुकीज़',
				targetingDescription:
					'लक्ष्यीकरण कुकीज़ का उपयोग आपकी रुचियों के अनुसार अधिक प्रासंगिक विज्ञापन देने के लिए किया जाता है।',
				acceptAllModal: 'सभी को स्वीकार करें',
				rejectAllModal: 'सभी को अस्वीकार करें',
				saveSettings: 'सेटिंग्स सहेजें',
				preferences: 'कुकी प्राथमिकताएं',
			},
			ja: {
				title: 'クッキーを使用しています',
				description:
					'当サイトは、適切に動作させるための必須クッキーと、どのように操作しているかを理解するためのトラッキングクッキーを使用しています。トラッキングは、明示的な同意があった場合にのみ有効になります。',
				acceptAll: 'すべて受け入れる',
				dismiss: '拒否',
				modalTitle: 'クッキー設定',
				modalDescription: '許可するクッキーを選択できます。詳細は',
				strictlyNecessary: '必須クッキー',
				strictlyNecessaryDescription:
					'これらのクッキーは、ウェブサイトが正しく機能するために不可欠です。ウェブサイトの基本的な機能とセキュリティ機能を匿名で保証します。',
				performanceCookies: 'パフォーマンスと分析のクッキー',
				performanceDescription:
					'パフォーマンスクッキーは、訪問数やトラフィックソースを数えることができるため、サイトのパフォーマンスを測定し、改善することができます。',
				targetingCookies: 'ターゲティングと広告のクッキー',
				targetingDescription:
					'ターゲティングクッキーは、あなたの興味に基づいてより関連性の高い広告を提供するために使用されます。',
				acceptAllModal: 'すべて受け入れる',
				rejectAllModal: 'すべて拒否',
				saveSettings: '設定を保存',
				preferences: 'クッキーの設定',
			},
		}
	}

	getItem(key) {
		const cookies = document.cookie
			.split(';')
			.map(cookie => cookie.split('='))
			.reduce(
				(acc, [key, value]) => ({
					...acc,
					[key.trim()]: decodeURIComponent(value),
				}),
				{}
			)
		return cookies[key]
	}

	setItem(key, value, httpOnly = false) {
		const sanitizedValue = encodeURIComponent(value)
		const expires = new Date()
		expires.setFullYear(expires.getFullYear() + 2)
		let cookieString = `${key}=${sanitizedValue};expires=${expires.toUTCString()};path=/;SameSite=Lax;Secure`
		if (httpOnly) {
			cookieString += ';HttpOnly'
		}
		document.cookie = cookieString
	}

	hasConsented() {
		const status = this.getItem(this.consentPropertyType)
		return status === 'allow' || status === 'reject_all' || status === 'confirm'
	}

	changeStatus(status) {
		this.setItem(this.consentPropertyType, status)
		if (status === 'allow' || status === 'confirm') {
			this.executeScripts()
		} else if (status === 'reject_all') {
			console.log('Reject all cookies')
		}
		this.hidePopup()
	}

	saveSettings() {
		const performanceCookies = document.getElementById(
			'performance-cookies'
		).checked
		const targetingCookies =
			document.getElementById('targeting-cookies').checked

		let status = 'confirm'

		if (performanceCookies && targetingCookies) {
			status = 'allow'
		} else {
			this.setItem('performance_cookies', performanceCookies)
			this.setItem('targeting_cookies', targetingCookies)
		}

		this.changeStatus(status)
		this.executeScripts()
	}

	bindTriggers() {
		document.body.addEventListener('click', event => {
			if (event.target.matches('[data-cc-accept="all"]')) {
				this.changeStatus('allow')
			} else if (event.target.matches('[data-cc-dismiss]')) {
				this.hidePopup()
			} else if (event.target.matches('#preferences-button')) {
				this.showModal()
			} else if (event.target.matches('#reject-all-modal')) {
				this.changeStatus('reject_all')
				this.hideModal()
			} else if (event.target.matches('#accept-all-modal')) {
				this.changeStatus('allow')
				this.hideModal()
			} else if (event.target.matches('#save-settings')) {
				this.saveSettings()
				this.hideModal()
			} else if (event.target.matches('.close-modal')) {
				this.hideModal()
			}
		})
	}

	getMainHTML() {
		const { title, description, acceptAll, dismiss, preferences } =
			this.translations[this.language]
		return `
				 <div class="consent-dialog-container" id="consent-dialog-container" aria-hidden="true" role="alertdialog">
					  <div class="dialog-content">
							<div class="text-content">
								 <h1 id="consent-dialog-title">${title}</h1>
								 <p id="consent-dialog-description">${description}</p>
								 <button class="preferences" id="preferences-button">${preferences}</button>
							</div>
							<div class="button-content">
								 <button class="cc-btn-primary" data-cc-accept="all" data-a11y-dialog-hide>${acceptAll}</button>
								 <button class="cc-btn-secondary" data-cc-dismiss data-a11y-dialog-hide>${dismiss}</button>
							</div>
					  </div>
				 </div>
			`
	}

	getModalHTML() {
		const {
			modalTitle,
			modalDescription,
			strictlyNecessary,
			strictlyNecessaryDescription,
			performanceCookies,
			performanceDescription,
			targetingCookies,
			targetingDescription,
			acceptAllModal,
			rejectAllModal,
			saveSettings,
		} = this.translations[this.language]

		return `
				 <div class="modal" id="preferences-modal" aria-hidden="true">
					  <div class="modal-content">
							<div class="modal-header">
								 <h2>${modalTitle}</h2>
								 <button class="close-modal" id="close-modal">&times;</button>
							</div>
							<div class="modal-body">
								 <h3>${modalTitle}</h3>
								 <p>${modalDescription}</p>
								 <div class="cookie-categories">
									  <div class="category">
											<button class="category-header">${strictlyNecessary}
												 <label class="switch">
													  <input type="checkbox" checked disabled>
													  <span class="slider round"></span>
												 </label>
											</button>
											<div class="category-content">
												 <p>${strictlyNecessaryDescription}</p>
											</div>
									  </div>
									  <div class="category">
											<button class="category-header">${performanceCookies} <label class="switch">
												 <input type="checkbox" id="performance-cookies" checked>
												 <span class="slider round"></span>
											</label></button>
											<div class="category-content">
												 <p>${performanceDescription}</p>
											</div>
									  </div>
									  <div class="category">
											<button class="category-header">${targetingCookies} <label class="switch">
												 <input type="checkbox" id="targeting-cookies" checked>
												 <span class="slider round"></span>
											</label></button>
											<div class="category-content">
												 <p>${targetingDescription}</p>
											</div>
									  </div>
								 </div>
							</div>
							<div class="modal-buttons">
								 <div class="left-buttons">
									  <button id="accept-all-modal" class="cc-btn-primary">${acceptAllModal}</button>
									  <button id="reject-all-modal" class="cc-btn-secondary">${rejectAllModal}</button>
								 </div>
								 <button id="save-settings" class="cc-btn-primary save-button">${saveSettings}</button>
							</div>
					  </div>
				 </div>
			`
	}

	insertStyles() {
		const style = document.createElement('style')

		style.textContent = `
				 /* Light Theme Styles */
				 .light .dialog-content { background-color: #fff; }
				 .light .text-content h1 { color: #000; }
				 .light .text-content p { color: #666; } 
				 .light .cc-btn-primary { background-color: #1a73e8; color: #fff; }
				 .light .cc-btn-primary:hover { background-color: #1558b0; }
				 .light .cc-btn-secondary { background-color: #e0e0e0; color: #333; }
				 .light .cc-btn-secondary:hover { background-color: #bdbdbd; }
				 .light .modal-content { background-color: #fff; }
				 .light .close-modal { color: #000; }
				 .light .modal-header h2 { color: #000; }
				 .light .modal-buttons #save-settings { background-color: #8ACD00; }
				 .light .cookie-categories .category { background-color: #DFE6FC; }
				 .light .category-header { color: #000; }
				 .light .modal-buttons #save-settings { background-color: #8ACD00; }
	  
				 /* Dark Theme Styles */
				 .dark .dialog-content { background-color: #333; }
				 .dark .text-content h1 { color: #fff; }
				 .dark .text-content p { color: #D2D8DC; } 
				 .dark .cc-btn-primary { background-color: #5E718B; color: #fff; }
				 .dark .cc-btn-primary:hover { background-color: #777; }
				 .dark .cc-btn-secondary { background-color: #444; color: #ccc; }
				 .dark .cc-btn-secondary:hover { background-color: #666; }
				 .dark .modal-content { background-color: #333; }
				 .dark .close-modal { color: #fff; }
				 .dark .modal-header h2 { color: #fff; }
				 .dark .modal-body h3 { color: #fff; }
				 .dark .modal-body p { color: #fff; }
				 .dark .cookie-categories .category { background-color: #5A5F62; }
				 .dark .category-header { color: #fff; }
				 .dark .modal-buttons #save-settings { background-color: #8ACD00; }
	  
				 /* Animation Styles */
				 @keyframes slideInUp { from { transform: translateY(100%); } to { transform: translateY(0); } }
				 @keyframes slideOutDown { from { transform: translateY(0); } to { transform: translateY(100%); } }
				 @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
				 @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }

				 /* Cookie Popup Styles */
				 .consent-dialog-container { position: fixed; bottom: 0; width: 100%; display: flex; justify-content: center; align-items: center; animation: slideInUp 0.5s forwards; padding: 20px; z-index: 9999;}
				 .consent-dialog-container.hide { animation: slideOutDown 0.5s forwards; }
				 .consent-dialog-container.show { display: flex; }
				 .consent-dialog-container:not(.show) { display: none; }
				 .dialog-content { padding: 20px; border-radius: 10px; background-color: #fff; width: 100%; max-width: 800px; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); display: flex; justify-content: space-between; align-items: center; gap: 20px;}
				 .text-content { flex: 1; }
				 .text-content h1 { margin: 0 0 10px 0; font-size: 18px; }
				 .text-content p { margin: 0; font-size: 13px; line-height: 1.2rem; }
				 .preferences { background: none; border: none; color: #007BFF; text-decoration: underline; cursor: pointer; font-size: 13px; padding: 0; margin-top: 10px; }
				 .button-content { display: flex; flex-direction: column; }
				 .button-content button { margin-top: 10px; padding: 10px 20px; border: none; border-radius: 10px; cursor: pointer; font-size: 14px; }
	  
				 /* Modal Styles */
				 .modal { display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: rgba(0, 0, 0, 0.5); justify-content: center; align-items: center; z-index: 10000; }
				 .modal.show { display: flex; animation: fadeIn 0.5s forwards; }
				 .modal.hide { animation: fadeOut 0.5s forwards; }
				 .modal-content { padding: 20px; border-radius: 10px; width: 100%; max-width: 700px; box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1); }
				 .modal-header { display: flex; justify-content: space-between; align-items: center; }
				 .modal-header h2 { margin: 0; font-size: 16px; }
				 .close-modal { background: none; border: none; font-size: 20px; cursor: pointer; }
				 .modal-body { margin-top: 0px; }
				 .modal-body h3 { font-size: 16px; margin: 0 0 10px 0; }
				 .modal-body p { font-size: 14px; line-height: 1.4rem; margin: 0 0 20px 0; }
				 .cookie-categories .category { margin-bottom: 10px; border-radius: 10px; }
				 .category-header { background: none; border: none; font-size: 14px; text-align: left; padding: 10px; width: 100%; display: flex; justify-content: space-between; align-items: center; cursor: pointer; }
				 .category-header span { font-size: 12px; color: #999; }
				 .category-content { display: none; padding: 10px; border-top: 1px solid #e0e0e0; }
				 .modal-buttons { display: flex; justify-content: space-between; margin-top: 20px; }
				 .left-buttons { display: flex; gap: 10px; }
				 .modal-buttons button { padding: 10px 20px; border: none; border-radius: 5px; cursor: pointer; font-size: 14px; }
	  
				 .switch {
					  position: relative;
					  display: inline-block;
					  width: 34px;
					  height: 20px;
				 }
				 .switch input {
					  opacity: 0;
					  width: 0;
					  height: 0;
				 }
				 .slider {
					  position: absolute;
					  cursor: pointer;
					  top: 0;
					  left: 0;
					  right: 0;
					  bottom: 0;
					  background-color: #ccc;
					  transition: .4s;
					  border-radius: 34px;
				 }
				 .slider:before {
					  position: absolute;
					  content: "";
					  height: 12px;
					  width: 12px;
					  left: 4px;
					  bottom: 4px;
					  background-color: white;
					  transition: .4s;
					  border-radius: 50%;
				 }
				 input:checked + .slider {
					  background-color: #2196F3;
				 }
				 input:checked + .slider:before {
					  transform: translateX(14px);
				 }
				 .overflow-hidden { overflow: hidden; }
	  
				 @media (max-width: 768px) {
					  .dialog-content { flex-direction: column; text-align: center; }
					  .text-content { max-width: 100%; }
					  .button-content { flex-direction: row; justify-content: space-around; width: 100%; margin-top: 20px; }
					  .button-content button { margin: 0; }
				 }
			`
		document.head.appendChild(style)
	}

	showPopup() {
		this.popup.classList.add(this.activeClass)
		this.popup.setAttribute('aria-hidden', 'false')
	}

	hidePopup() {
		this.popup.classList.add('hide')
		setTimeout(() => {
			this.popup.classList.remove(this.activeClass, 'hide')
			this.popup.setAttribute('aria-hidden', 'true')
		}, 500)
	}

	showModal() {
		const modal = document.getElementById('preferences-modal')
		modal.classList.add('show')
		modal.setAttribute('aria-hidden', 'false')
		document.body.classList.add('overflow-hidden')
	}

	hideModal() {
		const modal = document.getElementById('preferences-modal')
		modal.classList.remove('show')
		modal.setAttribute('aria-hidden', 'true')
		document.body.classList.remove('overflow-hidden')
	}

	initAccordions() {
		const headers = document.querySelectorAll('.category-header')
		headers.forEach(header => {
			header.addEventListener('click', () => {
				const content = header.nextElementSibling
				if (content.style.display === 'block') {
					content.style.display = 'none'
				} else {
					content.style.display = 'block'
				}
			})
		})
	}

	init() {
		try {
			document.documentElement.classList.add(this.theme)
			this.insertStyles()
			document.body.insertAdjacentHTML('beforeend', this.getMainHTML())
			document.body.insertAdjacentHTML('beforeend', this.getModalHTML())
			this.popup = document.querySelector('#consent-dialog-container')
			this.bindTriggers()
			this.initAccordions()

			if (!this.hasConsented()) {
				this.showPopup()
			} else {
				this.executeScripts()
			}
		} catch (e) {
			console.error('Error initializing cookie consent:', e)
		}
	}

	executeScripts() {
		const status = this.getItem(this.consentPropertyType)
		const performanceCookies = this.getItem('performance_cookies') === 'true'
		const targetingCookies = this.getItem('targeting_cookies') === 'true'

		if (status === 'allow' || performanceCookies) {
			console.log('Loading performance scripts...')
			this.loadScripts.forEach(script => this.loadScript(script))
		}

		if (status === 'allow' || targetingCookies) {
			console.log('Loading targeting scripts...')
			this.loadScripts.forEach(script => this.loadScript(script))
		}
	}

	loadScript(src) {
		const script = document.createElement('script')
		script.src = src
		script.async = true
		document.head.appendChild(script)
	}
}

if (typeof window !== 'undefined') {
	window.CookieConsent = CookieConsent
}

window.CookieConsent = CookieConsent
