# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Company.destroy_all
Stock.destroy_all
NewsArticle.destroy_all
WatchlistItem.destroy_all

#-------------------------------#
#------------ User -------------#
#-------------------------------#

chandler = User.create(
  first_name: "Chandler",
  last_name: "Bing",
  username: "the_transponster",
  email: "chandler@stackexchange.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 16387.56,
  img_url: "https://i.pinimg.com/originals/aa/33/90/aa3390865508588b0aeba800ae20ef3a.jpg",
)

angel = User.create(
  first_name: "Angel",
  last_name: "Velasco",
  username: "angel_investor",
  email: "angel@stackexchange.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 200.78,
  img_url: "https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-9/10978708_10153614256417782_4766753004612419991_n.jpg?oh=f9f5fb8ea7304ec7df0ae34eab9fa0cc&oe=5A9AB2E1",
)

kyle = User.create(
  first_name: "Kyle",
  last_name: "Chen",
  username: "kyle_investor",
  email: "kyle@stackexchange.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 2046.14,
  img_url: "https://scontent-dft4-3.xx.fbcdn.net/v/t31.0-8/1618070_10103188188301906_1360432566_o.jpg?oh=fdce632a8e2a82e91b69e0bc3436d3ff&oe=5A8EA1B5",
)

truong = User.create(
  first_name: "Truong",
  last_name: "Nguyen",
  username: "truong_investor",
  email: "truong@stackexchange.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 10460.97,
  img_url: "https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-9/12495026_10100619690402705_6496191290963588437_n.jpg?oh=f66a60a78abd24959aa0166c8991a778&oe=5A95067C",
)

maxine = User.create(
  first_name: "Maxine",
  last_name: "Chui",
  username: "maxine_investor",
  email: "maxine@stackexchange.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 4493.32,
  img_url: "https://scontent-dft4-3.xx.fbcdn.net/v/t31.0-8/18836844_10158970912825294_5473833442981876383_o.jpg?oh=6fcbcc876d6a38bae5353a160cccf64e&oe=5A8D0B7B",
)

#-------------------------------#
#----------- Company -----------#
#-------------------------------#


twitter = Company.create(
  name: "Twitter INC",
  symbol: "TWTR",
  market_price: 20.58,
  ceo: "Jack Dorsey",
  founding_year: 2006,
  employees: 3583,
  location: "San Francisco, CA",
  biography: "Twitter is an online news and social networking service
            where users post and interact with messages,
            called \"tweets.\" These messages were originally restricted
            to 140 characters, but on November 7, 2017, the limit was
            doubled to 280 characters for all languages except Japanese,
            Korean and Chinese. Registered users can post tweets, but
            those who are unregistered can only read them. Users access
            Twitter through its website interface, Short Message Service
            (SMS) or mobile device application software (\"app\").
            Twitter, Inc. is based in San Francisco, California,
            United States, and has more than 25 offices around
            the world.

            Twitter was created in March 2006 by Jack Dorsey, Noah
            Glass, Biz Stone, and Evan Williams and launched in July
            of that year. The service rapidly gained worldwide
            popularity. In 2012, more than 100 million users posted
            340 million tweets a day,[13] and the service handled an
            average of 1.6 billion search queries per day. In 2013,
            it was one of the ten most-visited websites and has been
            described as \"the SMS of the Internet\". As of 2016,
            Twitter had more than 319 million monthly active users.
            On the day of the 2016 U.S. presidential election, Twitter
            proved to be the largest source of breaking news, with 40
            million election-related tweets sent by 10 p.m.
            (Eastern Time) that day."
);

google = Company.create(
  name: "Google LLC",
  symbol: "GOOGL",
  market_price: 1051.92,
  ceo: "Sundar Pichai",
  founding_year: 1998,
  employees: 73992,
  location: "Menlo Park, CA",
  biography: "Google LLC is an American multinational technology
              company that specializes in Internet-related services
              and products. These include online advertising technologies,
              search, cloud computing, software, and hardware. Google
              was founded in 1998 by Larry Page and Sergey Brin while
              they were Ph.D. students at Stanford University, in
              California. Together, they own about 14 percent of its
              shares, and control 56 percent of the stockholder voting
              power through supervoting stock. They incorporated Google
              as a privately held company on September 4, 1998. An
              initial public offering (IPO) took place on August 19,
              2004, and Google moved to its new headquarters in Mountain
              View, California, nicknamed the Googleplex. In August
              2015, Google announced plans to reorganize its various
              interests as a conglomerate called Alphabet Inc. Google,
              Alphabet's leading subsidiary, will continue to be the
              umbrella company for Alphabet's Internet interests. Upon
              completion of the restructure, Sundar Pichai was
              appointed CEO of Google; he replaced Larry Page,
              who became CEO of Alphabet.",
);

netflix = Company.create(
  name: "Netflix",
  symbol: "NFLX",
  market_price: 196.02,
  ceo: "Reed Hastings",
  founding_year: 1997,
  employees: 3500,
  location: "Los Gatos, CA",
  biography: "Netflix is an American entertainment company founded
              by Reed Hastings and Marc Randolph on August 29, 1997,
              in Scotts Valley, California. It specializes in and
              provides streaming media and video-on-demand online and
              DVD by mail. In 2013, Netflix expanded into film and
              television production as well as online distribution.
              The company is headquartered in Los Gatos, California.
              \n
              \nNetflix's initial business model included DVD sales
              and rental, although Hastings jettisoned DVD sales
              about a year after Netflix's founding to focus on the
              DVD rental by mail business. In 2007, Netflix
              expanded its business with the introduction of streaming
              media, while retaining the DVD and Blu-ray rental service.
              The company expanded internationally, with streaming made
              available to Canada in 2010 and continued growing its
              streaming service from there; by January 2016, Netflix
              services operated in over 190 countries.
              \n
              \nNetflix entered the content-production industry in 2013,
              debuting its first series, House of Cards. It has
              greatly expanded the production of both film and
              television series since then, offering \"Netflix Original\"
              content through its online library of films and
              television. Netflix released an estimated 126
              original series or films in 2016, more than any other
              network or cable channel."
);

snap = Company.create(
  name: "Snap INC",
  symbol: "SNAP",
  market_price: 12.50,
  ceo: "Evan Spiegel",
  founding_year: 2010,
  employees: 1859,
  location: "Venice, CA",
  biography: "Snap Inc. is an American technology and social media
              company, founded on September 16, 2011 by Evan Spiegel
              and Bobby Murphy and based in Venice, Los Angeles. It
              has four products: Snapchat, Spectacles, Bitmoji, and
              Zenly. The company was originally named Snapchat Inc.
              upon its inception, but it was rebranded on September 24,
              2016 as Snap Inc. in order to include the Spectacles
              product under a single company."
);

nvidia = Company.create(
  name: "Nvidia CORP",
  symbol: "NVDA",
  market_price: 214.85,
  ceo: "Jensen Huang",
  founding_year: 1993,
  employees: 10000,
  location: "Santa Clara",
  biography: "Nvidia Corporation (most commonly referred to as Nvidia,
              stylized as NVIDIA, nVIDIA or nvidia) is an American
              technology company based in Santa Clara, California.
              It designs graphics processing units (GPUs) for the
              gaming, cryptocurrency, and professional markets, as
              well as system on a chip units (SoCs) for the mobile
              computing and automotive market. Its primary GPU product
              line, labeled \"GeForce\", is in direct competition with
              Advanced Micro Devices' (AMD) \"Radeon\" products. Nvidia
              expanded its presence in the gaming industry with its
              handheld Shield Portable, Shield Tablet and Shield
              Android TV.
              \n
              \nSince 2014, Nvidia has shifted to become a platform
              company focused on four markets – gaming, professional
              visualization, data centers and auto. Nvidia is also now
              focused on artificial intelligence.
              \n
              \nIn addition to GPU manufacturing, Nvidia provides
              parallel processing capabilities to researchers and
              scientists that allow them to efficiently run high-performance
              applications. They are deployed in supercomputing sites
              around the world.[5][6] More recently, It has moved into
              the mobile computing market, where it produces Tegra
              mobile processors for smartphones and tablets as well
              as vehicle navigation and entertainment systems. In
              addition to AMD, its competitors include Intel, Qualcomm
              and Arm (e.g., because of Denver, while Nvidia also
              licenses Arm's designs)."
);

tesla = Company.create(
  name: "Tesla INC",
  symbol: "TSLA",
  market_price: 312.19,
  ceo: "Elon Musk",
  founding_year: 2003,
  employees: 33000,
  location: "Palo Alto",
  biography: "Tesla, Inc. (formerly Tesla Motors) is an American
              automaker, energy storage company, and solar panel
              manufacturer based in Palo Alto, California. Founded
              in 2003, the company specializes in electric cars,
              lithium-ion battery energy storage, and residential
              photovoltaic panels (through the subsidiary company
              SolarCity). The additional products Tesla sells
              include the Tesla Powerwall and Powerpack batteries,
              solar panels and solar roof tiles.
              \n
              \nCEO Elon Musk said that he envisions Tesla as a
              technology company and independent automaker, aimed at
              eventually offering electric cars at prices affordable to
              the average consumer. The company is named after
              the Serbian-American electrical engineer and physicist
              Nikola Tesla by company co-founders Martin Eberhard and
              Marc Tarpenning.
              \n
              \nThe company's Model S was the world's best-selling
              plug-in electric car in 2015 and 2016. Global sales of
              the Model S reached 150,000 units in November 2016. In
              September 2015 the company released its Model X, a
              crossover SUV. The Model 3 was released in July 2017.
              Tesla global sales passed 250,000 units in September 2017.
              \n
              \nTesla operates multiple production and assembly plants,
              notably Gigafactory 1 near Reno, Nevada and its main
              vehicle manufacturing facility at Tesla Factory in Fremont,
              California. The Gigafactory primarily produces batteries
              and battery packs for Tesla vehicles and energy storage
              products."
);

facebook = Company.create(
  name: "Facebook",
  symbol: "FB",
  market_price: 180.65,
  ceo: "Mark Zuckerberg",
  founding_year: 2004,
  employees: 17000,
  location: "Menlo Park",
  biography: "Facebook is an American for-profit corporation and an
            online social media and social networking service based in
            Menlo Park, California. The Facebook website was launched
            on February 4, 2004, by Mark Zuckerberg, along with fellow
            Harvard College students and roommates, Eduardo Saverin,
            Andrew McCollum, Dustin Moskovitz, and Chris Hughes.
            \n
            \nThe founders had initially limited the website's membership
            to Harvard students; however, later they expanded it to
            higher education institutions in the Boston area, the Ivy
            League schools, and Stanford University. Facebook gradually
            added support for students at various other universities,
            and eventually to high school students as well. Since 2006,
            anyone who claims to be at least 13 years old has been
            allowed to become a registered user of Facebook, though
            variations exist in the minimum age requirement, depending
            on applicable local laws. The Facebook name comes from
            the face book directories often given to United States
            university students.
            \n
            \nFacebook, Inc. held its initial public offering in February
            2012, and began selling stock to the public three months
            later, reaching an original peak market capitalization of
            $104 billion. On July 13, 2015, Facebook became the fastest
            company in the Standard & Poor's 500 Index to reach a market
            cap of $250 billion.[10] Facebook has more than 2 billion
            monthly active users as of June 2017. As of April
            2016, Facebook was the most popular social networking site
            in the world, based on the number of active user accounts.
            Facebook classifies users from the ages of 13 to 18 as
            minors and therefore sets their profiles to share content
            with friends only."
);

amd = Company.create(
  name: "Advanced Micro Devices INC",
  symbol: "AMD",
  market_price: 11.37,
  ceo: "Lisa T. Su",
  founding_year: 1969,
  employees: 9100,
  location: "Sunnyvale, CA",
  biography: "Advanced Micro Devices, Inc. (AMD) is an American
              multinational semiconductor company based in Sunnyvale,
              California, United States, that develops computer
              processors and related technologies for business and
              consumer markets. While initially it manufactured its own
              processors, the company later outsourced its manufacturing,
              a practice known as fabless, after GlobalFoundries was
              spun off in 2009. AMD's main products include
              microprocessors, motherboard chipsets, embedded processors
              and graphics processors for servers, workstations and
              personal computers, and embedded systems applications.

              AMD is the second-largest supplier and only significant
              rival to Intel in the market for x86-based microprocessors.
              Since acquiring ATI in 2006, AMD and its competitor Nvidia
              have dominated the discrete Graphics Processing Unit (GPU) market."
);

apple = Company.create(
  name: "Apple",
  symbol: "AAPL",
  market_price: 174.83,
  ceo: "Tim Cook",
  founding_year: 1976,
  employees: 123000,
  location: "Cupertino, CA",
  biography: "Apple Inc. is an American multinational technology company
              headquartered in Cupertino, California that designs,
              develops, and sells consumer electronics, computer software,
              and online services. The company's hardware products
              include the iPhone smartphone, the iPad tablet computer,
              the Mac personal computer, the iPod portable media player,
              the Apple Watch smartwatch, the Apple TV digital media
              player, and the HomePod smart speaker. Apple's consumer
              software includes the macOS and iOS operating systems,
              the iTunes media player, the Safari web browser, and the
              iLife and iWork creativity and productivity suites. Its
              online services include the iTunes Store, the iOS App
              Store and Mac App Store, Apple Music, and iCloud.
              \n
              \nApple is the world's largest information technology
              company by revenue and the world's second-largest mobile
              phone manufacturer after Samsung. In February 2015, Apple
              became the first U.S. company to be valued at over US$700
              billion. The company employs 123,000 full-time employees
              as of September 2017 and maintains 498 retail stores in 22
              countries as of July 2017. It operates the iTunes Store,
              which is the world's largest music retailer. As of
              January 2016, more than one billion Apple products are
              actively in use worldwide.
              \n
              \nApple's worldwide annual revenue totaled $229 billion
              for the 2017 fiscal year. The company enjoys a high
              level of brand loyalty and has been repeatedly ranked
              as the world's most valuable brand. However, it receives
              significant criticism regarding the labor practices of
              its contractors and its environmental and business
              practices, including the origins of source materials."
);

square = Company.create(
  name: "Square INC",
  symbol: "SQ",
  market_price: 48.72,
  ceo: "Jack Dorsey",
  founding_year: 2009,
  employees: 5000,
  location: "San Francisco, CA",
  biography: "Square, Inc. is a financial services, merchant services
              aggregator and mobile payment company based in San
              Francisco, California. The company markets several
              software and hardware payments products, including
              Square Register and Square Reader, and has expanded into
              small business services such as Square Capital, a
              financing program, Square Cash, a person-to-person
              payments service, and Square Payroll. The company was
              founded in 2009 by Jack Dorsey and Jim McKelvey and
              launched its first app and service in 2010. It has been
              traded as a public company on the New York Stock
              Exchange since November 2015 with the ticker symbol SQ.
              \n
              \nSquare Register allows individuals and merchants in
              the United States, Canada, Japan, Australia, and the
              United Kingdom, to accept offline debit and credit cards
              on their iOS or Android smartphone or tablet computer.
              The application software supports manually entering the
              card details, swiping the card through the audio
              jack-connected Square Reader, or inserting or tapping
              the card using the Bluetooth LE-connected Square Chip
              and Contactless Reader. On the iPad version of the Square
              Register app, the interface resembles a traditional
              cash register."
);

amazon = Company.create(
  name: "Amazon INC",
  symbol: "AMZN",
  market_price: 1157.69,
  ceo: "Jeff Bezos",
  founding_year: 1994,
  employees: 117300,
  location: "Seattle, WA",
  biography: "Amazon.com, Inc., doing business as Amazon, is an American
            electronic commerce and cloud computing company based in
            Seattle, Washington that was founded by Jeff Bezos on
            July 5, 1994. The tech giant is the largest Internet
            retailer in the world measured by revenue and market
            capitalization, and second largest after Alibaba Group in
            terms of total sales. The amazon.com website started as
            an online bookstore and later diversified to sell DVDs,
            Blu-rays, CDs, video downloads/streaming, MP3
            downloads/streaming, audiobook downloads/streaming,
            software, video games, electronics, apparel, furniture,
            food, toys, and jewelry. The company also produces
            consumer electronics—Kindle e-readers, Fire tablets,
            Fire TV, and Echo—and is the world's largest provider of
            cloud infrastructure services (IaaS and PaaS). Amazon also
            sells certain low-end products like USB cables under
            its in-house brand AmazonBasics.
            \n
            \nIn 2015, Amazon surpassed Walmart as the most valuable
            retailer in the United States by market capitalization.
            Amazon is the fourth most valuable public company in the
            world, the largest Internet company by revenue in the
            world, and the eighth largest employer in the United States.
            In 2017, Amazon acquired Whole Foods Market for $13.4
            billion, which vastly increased Amazon's presence as a
            physical retailer. The acquisition was interpreted by
            some as a direct attempt to challenge Walmart as a
            physical store."
);

microsoft = Company.create(
  name: "Microsoft CORP",
  symbol: "MSFT",
  market_price: 84.17,
  ceo: "Satya Nadella",
  founding_year: 2014,
  employees: 124000,
  location: "Redmond, WA",
  biography: "Microsoft Corporation is an American multinational
            technology company with headquarters in Redmond, Washington.
            It develops, manufactures, licenses, supports and sells
            computer software, consumer electronics, personal computers,
            and services. Its best known software products are the
            Microsoft Windows line of operating systems, the Microsoft
            Office suite, and the Internet Explorer and Edge web
            browsers. Its flagship hardware products are the Xbox video
            game consoles and the Microsoft Surface tablet lineup.
            As of 2016, it is the world's largest software maker by
            revenue, and one of the world's most valuable
            companies. The word \"Microsoft\" is a portmanteau
            of \"microcomputer\" and \"software\"."
);

qualcomm = Company.create(
  name: "Qualcomm",
  symbol: "QCOM",
  market_price: 66.34,
  ceo: "Steven Mollenkopf",
  founding_year: 1985,
  employees: 33500,
  location: "San Diego, CA",
  biography: "Qualcomm is an American multinational semiconductor
            and telecommunications equipment company that designs and markets
            wireless telecommunications products and services. It derives most
            of its revenue from chipmaking and the bulk of its profit from
            patent licensing businesses. The company headquarters
            is located in San Diego, California, United States, and
            has 224 worldwide locations. The parent company is
            Qualcomm Incorporated (Qualcomm), which includes the
            Qualcomm Technology Licensing Division (QTL). Qualcomm's
            wholly owned subsidiary, Qualcomm Technologies, Inc. (QTI),
            operates substantially all of Qualcomm's R&D activities,
            as well as its product and services businesses, including
            its semiconductor business, Qualcomm CDMA Technologies."
);

chase = Company.create(
  name: "JPMorgan Chase & CO",
  symbol: "JPM",
  market_price: 105.54,
  ceo: "James Dimon",
  founding_year: 1968,
  employees: 251503,
  location: "New York City, NY",
  biography: "JPMorgan Chase & Co. is an American multinational
            banking and financial services holding company headquartered
            in New York City. It is the largest bank in the United
            States, the world's sixth largest bank by total assets,
            with total assets of US$2.5 trillion, and the world's
            second most valuable bank by market capitalization,
            after the Industrial and Commercial Bank of China. It
            is a major provider of financial services, and according
            to Forbes magazine is the world's fourth largest public
            company based upon a composite ranking. The hedge fund
            unit of JPMorgan Chase is the second largest hedge fund
            in the United States. The company was formed in 2000,
            when Chase Manhattan Corporation merged with J.P. Morgan & Co."
);

comcast = Company.create(
  name: "Comcast CORP",
  symbol: "CMCSA",
  market_price: 37.54,
  ceo: "Brian L. Roberts",
  founding_year: 1963,
  employees: 153000,
  location: "Philadelphia, PA",
  biography: "Comcast Corporation is an American global
            telecommunications conglomerate that is the largest
            broadcasting and cable television company in the world
            by revenue. It is the second-largest pay-TV company after
            AT&T, largest cable TV company and largest home Internet
            service provider in the United States, and the nation's
            third-largest home telephone service provider. Comcast
            services U.S. residential and commercial customers in 40
            states and in the District of Columbia. The company's
            headquarters are located in Philadelphia, Pennsylvania.
            As the owner of the international media company NBCUniversal
            since 2011, Comcast is a producer of feature films and
            television programs intended for theatrical exhibition
            and over-the-air and cable television broadcast."
);

cisco = Company.create(
  name: "Cisco INC",
  symbol: "CSCO",
  market_price: 37.30,
  ceo: "Chuck Robbins",
  founding_year: 1984,
  employees: 73711,
  location: "San Jose, CA",
  biography: "Cisco Systems, Inc. is an American multinational
              technology conglomerate headquartered in San Jose,
              California, in the center of Silicon Valley, that
              develops, manufactures and sells networking hardware,
              telecommunications equipment and other high-technology
              services and products. Through its numerous acquired
              subsidiaries, such as OpenDNS, WebEx, Jabber and Jasper,
              Cisco specializes into specific tech markets, such as
              Internet of Things (IoT), domain security and
              energy management."
);

zendesk = Company.create(
  name: "Zendesk INC",
  symbol: "ZEN",
  market_price: 33.61,
  ceo: "Mikkel Svane",
  founding_year: 2007,
  employees: 2000,
  location: "San Francisco, CA",
  biography: "Zendesk Inc. is a global customer service software
            company headquartered in San Francisco, California,USA.
            It is listed on the New York Stock Exchange with the symbol
            ZEN and is a constituent of the Russell 2000 Index.
            Founded in 2007, the company now has over 2,000
            employees and serves 114,000 paid customers in 150
            countries and territories."
);

target = Company.create(
  name: "Target CORP",
  symbol: "TGT",
  market_price: 59.90,
  ceo: "Brian Cornell",
  founding_year: 1902,
  employees: 341000,
  location: "Minneapolis, MN",
  biography: "Target Corporation is the second-largest discount store
            retailer in the United States, behind Walmart, and a
            component of the S&P 500 Index. Founded by George Dayton
            and headquartered in Minneapolis, Minnesota, the company
            was originally named Goodfellow Dry Goods in June 1902
            before being renamed the Dayton's Dry Goods Company in
            1903 and later the Dayton Company in 1910. The first
            Target store opened in Roseville, Minnesota in 1962 while
            the parent company was renamed the Dayton Corporation in
            1967. It became the Dayton-Hudson Corporation after
            merging with the J.L. Hudson Company in 1969 and held
            ownership of several department store chains including
            Dayton's, Hudson's, Marshall Field's, and Mervyn's."
);

target = Company.create(
  name: "Starbucks CORP",
  symbol: "SBUX",
  market_price: 57.82,
  ceo: "Kevin Johnson",
  founding_year: 1971,
  employees: 254000,
  location: "Seattle, WA",
  biography: "Starbucks Corporation is an American coffee company and
            coffeehouse chain. Starbucks was founded in Seattle,
            Washington in 1971. As of November 2016, it operates
            23,768 locations worldwide.

            Starbucks is considered the main representative of
            \"second wave coffee\", initially distinguishing itself
            from other coffee-serving venues in the US by taste,
            quality, and customer experience while popularizing
            darkly roasted coffee.[4] Since the 2000s, third wave
            coffee makers have targeted quality-minded coffee drinkers
            with hand-made coffee based on lighter roasts, while
            Starbucks nowadays uses automated espresso machines for
            efficiency and safety reasons."
);

nike = Company.create(
  name: "Nike INC",
  symbol: "NKE",
  market_price: 60.42,
  ceo: "Mark Parker",
  founding_year: 1964,
  employees: 62600,
  location: "Beaverton, OR",
  biography: "Nike, Inc. is an American multinational corporation that
            is engaged in the design, development, manufacturing,
            and worldwide marketing and sales of footwear, apparel,
            equipment, accessories, and services. The company is
            headquartered near Beaverton, Oregon, in the Portland
            metropolitan area. It is the world's largest supplier of
            athletic shoes and apparel and a major manufacturer of
            sports equipment, with revenue in excess of US$24.1
            billion in its fiscal year 2012 (ending May 31, 2012).
            As of 2012, it employed more than 44,000 people worldwide.
            In 2014 the brand alone was valued at $19 billion, making
            it the most valuable brand among sports businesses. As of
            2017, the Nike brand is valued at $29.6 billion."
);

disney = Company.create(
  name: "Walt Disney",
  symbol: "DIS",
  market_price: 104.82,
  ceo: "Bob Iger",
  founding_year: 1923,
  employees: 195000,
  location: "Burbank, CA",
  biography: "The Walt Disney Company, commonly known as Disney, is
            an American diversified multinational mass media and
            entertainment conglomerate, headquartered at the Walt
            Disney Studios in Burbank, California. It is the world's
            second largest media conglomerate in terms of revenue,
            after Comcast. Disney was founded on October 16, 1923 – by
            brothers Walt Disney and Roy O. Disney – as the Disney
            Brothers Cartoon Studio, and established itself as a
            leader in the American animation industry before
            diversifying into live-action film production, television,
            and theme parks. The company also operated under the names
            The Walt Disney Studio and then Walt Disney Productions.
            Taking on its current name in 1986, it expanded its
            existing operations and also started divisions focused
            upon theater, radio, music, publishing, and online media."
);

vodafone = Company.create(
  name: "Vodafone Group",
  symbol: "VOD",
  market_price: 30.78,
  ceo: "Vittorio Colao",
  founding_year: 1991,
  employees: 111556,
  location: "London, UK",
  biography: "Vodafone Group is a British multinational
            telecommunications company, with headquarters in London.
            It predominantly operates services in the regions of Asia,
            Africa, Europe, and Oceania. Among mobile operator groups
            globally, Vodafone ranked fifth by revenue and second
            (behind China Mobile) in the number of connections
            (469.7 million) as of 2016.

            Vodafone owns and operates networks in 26 countries
            and has partner networks in over 50 additional countries.
            Its Vodafone Global Enterprise division provides
            telecommunications and IT services to corporate clients in
            150 countries."
);

paypal = Company.create(
  name: "Paypal",
  symbol: "PYPL",
  market_price: 75.73,
  ceo: "Daniel Schulman",
  founding_year: 1998,
  employees: 18100,
  location: "San Jose, CA",
  biography: "PayPal Holdings, Inc. is an American company operating a
            worldwide online payments system that supports online
            money transfers and serves as an electronic alternative to
            traditional paper methods like checks and money orders.
            PayPal is one of the world's largest Internet payment
            companies. The company operates as a payment processor for
            online vendors, auction sites and other commercial users,
            for which it charges a fee."
);

lending_club = Company.create(
  name: "Lending Club",
  symbol: "LC",
  market_price: 4.37,
  ceo: "Scott Sanborn",
  founding_year: 2006,
  employees: 1530,
  location: "San Francisco, CA",
  biography: "LendingClub is a US peer-to-peer lending company,
            headquartered in San Francisco, California. It was the
            first peer-to-peer lender to register its offerings as
            securities with the Securities and Exchange Commission
            (SEC), and to offer loan trading on a secondary market.
            Lending Club operates an online lending platform that
            enables borrowers to obtain a loan, and investors to
            purchase notes backed by payments made on loans. Lending
            Club is the world's largest peer-to-peer lending platform.
            The company claims that $15.98 billion in loans had
            been originated through its platform up to December 31, 2015."
);

gopro = Company.create(
  name: "GoPro",
  symbol: "GPRO",
  market_price: 8.54,
  ceo: "Nick Woodman",
  founding_year: 2002,
  employees: 1483,
  location: "San Mateo, CA",
  biography: "GoPro, Inc. is an American technology company founded in
            2002 by Nick Woodman. It manufactures eponymous action
            cameras and develops its own mobile apps and video-editing software.

            Founded as Woodman Labs, Inc, the company eventually
            focused on the connected sports genre, developing its
            line of action cameras and, later, video editing software.
            It also developed a quadcopter drone, Karma, released in
            October 2016."
);

sony = Company.create(
  name: "Sony CORP",
  symbol: "NE",
  market_price: 46.80,
  ceo: "Kaz Hirai",
  founding_year: 1946,
  employees: 146300,
  location: "Minato, Tokyo, Japan",
  biography: "Sony Corporation is a Japanese multinational conglomerate
            corporation headquartered in Kōnan, Minato, Tokyo. Its
            diversified business includes consumer and professional
            electronics, gaming, entertainment and financial services.
            The company is one of the leading manufacturers of electronic
            products for the consumer and professional markets. Sony
            was ranked 105th on the 2017 list of Fortune Global 500."
);

western_digital = Company.create(
  name: "Western Digital",
  symbol: "WDC",
  market_price: 78.86,
  ceo: "Stephen D Milligan",
  founding_year: 1970,
  employees: 76449,
  location: "San Jose, CA",
  biography: "Western Digital Corporation (commonly referred to as
            Western Digital and often abbreviated as WDC or WD) is an
            American computer data storage company and one of the
            largest computer hard disk drive manufacturers in the
            world, along with its main competitor Seagate Technology.

            Western Digital Corporation has a long history in the
            electronics industry as an integrated circuit maker and
            a storage products company. Western Digital was founded
            on April 23, 1970, by Alvin B. Phillips, a Motorola employee,
            as General Digital, initially (and briefly) a manufacturer
            of MOS test equipment. It rapidly became a speciality
            semiconductor maker, with start-up capital provided by
            several individual investors and industrial giant Emerson
            Electric. Around July 1971, it adopted its current name
            and soon introduced its first product, the WD1402A UART."
);

expedia = Company.create(
  name: "Expedia INC",
  symbol: "EXPE",
  market_price: 122.5,
  ceo: "Mark D. Okerstrom",
  founding_year: 1996,
  employees: 20000,
  location: "Bellevue, WA",
  biography: "Expedia, Inc. is an American travel company that owns
            and operates several international global online travel
            brands, primarily travel fare aggregator websites and
            travel metasearch engines including Expedia.com, Hotels.com,
            Hotwire.com, trivago, Venere.com, Travelocity, Orbitz,
            and HomeAway.

            The company operates about 200 travel booking websites in
            about 75 countries, and has listings for about 350,000
            hotels and 500 airlines.

            According to Rich Barton, the first CEO, the word
            \"Expedia\" is derived from a combination of
            exploration and speed."
);

alibaba = Company.create(
  name: "Alibaba Group",
  symbol: "BABA",
  market_price: 177.08,
  ceo: "Daniel Zhang",
  founding_year: 1999,
  employees: 50092,
  location: "Hangzhou, China",
  biography: "Alibaba Group Holding Limited is a Chinese e-commerce
            conglomerate that provides consumer-to-consumer,
            business-to-consumer and business-to-business sales
            services via web portals. It also provides electronic
            payment services, a shopping search engine and data-centric
            cloud computing services. The group began in 1999 when Jack
            Ma founded the website Alibaba.com, a business-to-business
            portal to connect Chinese manufacturers with overseas
            buyers. In 2012, two of Alibaba's portals handled 1.1
            trillion yuan ($170 billion) in sales. Suppliers
            from other countries are supported (with more stringent
            checks than for Chinese companies), but the company
            primarily operates in the People's Republic of China
            (PRC). At closing time on the date of its initial
            public offering (IPO), 19 September 2014, Alibaba's market
            value was US$231 billion."
);


#-------------------------------#
#------------ Stock ------------#
#-------------------------------#

Stock.create(
  user_id: chandler.id,
  company_id: google.id,
  num_shares: 2
)
Stock.create(
  user_id: chandler.id,
  company_id: netflix.id,
  num_shares: 4
)
Stock.create(
  user_id: chandler.id,
  company_id: snap.id,
  num_shares: 4
)
Stock.create(
  user_id: chandler.id,
  company_id: tesla.id,
  num_shares: 8
)
Stock.create(
  user_id: chandler.id,
  company_id: nvidia.id,
  num_shares: 6
)
Stock.create(
  user_id: chandler.id,
  company_id: amazon.id,
  num_shares: 1
)


Stock.create(
  user_id: angel.id,
  company_id: apple.id,
  num_shares: 18
)
Stock.create(
  user_id: angel.id,
  company_id: square.id,
  num_shares: 4
)
Stock.create(
  user_id: angel.id,
  company_id: amazon.id,
  num_shares: 3
)


Stock.create(
  user_id: kyle.id,
  company_id: apple.id,
  num_shares: 6
)
Stock.create(
  user_id: kyle.id,
  company_id: square.id,
  num_shares: 16
)


Stock.create(
  user_id: truong.id,
  company_id: apple.id,
  num_shares: 6
)
Stock.create(
  user_id: truong.id,
  company_id: square.id,
  num_shares: 2
)


#-------------------------------#
#-------- WatchListItem --------#
#-------------------------------#

WatchlistItem.create(
  user_id: angel.id,
  company_id: amazon.id
)
WatchlistItem.create(
  user_id: angel.id,
  company_id: square.id
)
WatchlistItem.create(
  user_id: angel.id,
  company_id: tesla.id
)
WatchlistItem.create(
  user_id: angel.id,
  company_id: apple.id
)
WatchlistItem.create(
  user_id: angel.id,
  company_id: netflix.id
)


WatchlistItem.create(
  user_id: chandler.id,
  company_id: amd.id
)
WatchlistItem.create(
  user_id: chandler.id,
  company_id: square.id
)
WatchlistItem.create(
  user_id: chandler.id,
  company_id: apple.id
)
WatchlistItem.create(
  user_id: chandler.id,
  company_id: facebook.id
)

#-------------------------------#
#--------- NewsArticle ---------#
#-------------------------------#

NewsArticle.create(
  publisher: "Market Watch",
  title: "Twitter quietly outpacing Facebook and other social media stocks",
  company_id: twitter.id,
  date: Date.new(2017, 11, 29),
  views: 219,
  img_url: "https://investorplace.com/wp-content/uploads/2017/04/twitter-inc-twtr-ipsize-768x384.jpg",
  source: "https://www.marketwatch.com/story/twitter-quietly-outpacing-facebook-and-other-social-media-stocks-2017-11-29",
  body: "Facebook may be getting all the attention on Wall Street, as
        it is the fifth-largest company in the U.S. stock market and due to
        its vaunted position as the F in the closely watched FAANG group of
        stocks, but its primary rival in the social media space has been
        performing much better of late."
)

NewsArticle.create(
  publisher: "Motley Fool",
  title: "Is Netflix, Inc. a Buy?",
  company_id: netflix.id,
  date: Date.new(2017, 11, 26),
  views: 319,
  img_url: "https://i.amz.mshcdn.com/LWRrA7B2yTQxFTlc_4eb1Mao2DM=/1200x630/2017%2F05%2F16%2F8d%2Fa90b60e1a7b645f5b90067584ab381d3.e786a.jpg",
  source: "https://www.fool.com/investing/2017/11/26/is-netflix-inc-a-buy.aspx",
  body: "As of this writing, shares of Netflix (NASDAQ:NFLX) have
        gained a market-stomping 66% over the last 52 weeks. Can the
        stock run any higher, or are we looking at peak Netflix right
        now? Using traditional market-value estimates, Netflix comes
        out looking pricey every time. The stock is trading for 199
        times trailing earnings and 86 times forward estimates. You
        can't measure it against free cash flow because those are
        negative. And even if you account for Netflix's rampant growth
        rates, the PEG ratio lands at a nosebleed-inducing 3.2."
)

NewsArticle.create(
  publisher: "Zacks",
  title: "Is Square (SQ) a Great Growth Stock?",
  company_id: square.id,
  date: Date.new(2017, 10, 24),
  views: 418,
  img_url: "https://staticx-tuner.zacks.com/images/articles/main/1e/1508862852.jpg",
  source: "https://www.zacks.com/stock/news/279991/is-square-sq-a-great-growth-stock",
  body: "Growth stocks can be some of the most exciting picks in
          the market. Not only do these types of stocks
          captivate investors’ attention, but they’re
          known for producing big gains as well. However,
          growth stocks can also lose momentum when a growth
          story ends, so it’s vital to find companies still
          experiencing strong growth prospects in their business."
)


NewsArticle.create(
  publisher: "Forbes",
  title: "iPhone X Supply Quickly Catching Up To Demand",
  company_id: apple.id,
  date: Date.new(2017, 11, 24),
  views: 19,
  img_url: "https://specials-images.forbesimg.com/dam/imageserve/869824584/960x0.jpg?fit=scale",
  source: "https://www.forbes.com/sites/chuckjones/2017/11/24/iphone-x-supply-quickly-catching-up-to-demand/#1cf44f787c21",
  body: "Apple decreased the lead-time for the iPhone X from 2 to
        3 weeks to 1 to 2 weeks on Thanksgiving Day. I have tracked
        iPhone lead-times for the 4S, 5, 5c, 5s, 6, 6s, 7 and now the
        8 and X. While I didn’t follow all of them until the lead-times
        disappeared I believe it is worthwhile to follow the iPhone 8’s
        and X’s and compare them to some of the earlier models,
        especially the iPhone 6 since it saw such strong demand."
)

NewsArticle.create(
  publisher: "Forbes",
  title: "The Tiger Of Silicon Valley: Glen Kacher\'s Sizzling Hedge Fund",
  date: Date.new(2017, 11, 21),
  company_id: amd.id,
  views: 23,
  img_url: "https://blogs-images.forbes.com/nathanvardi/files/2017/11/1106_inv-light-street-light-street-glen-kacher_1200x675-1200x675.jpg?width=960",
  source: "https://www.forbes.com/sites/nathanvardi/2017/11/21/the-tiger-of-silicon-valley-glen-kachers-sizzling-hedge-fund/#50e233992904",
  body: "When you live and work in a town where the median home costs
        $2.7 million and hobnob with the executives of billionaire
        factories like Facebook and Tesla, it\'s easy to see why you
        might think technology stocks are invincible. So far in 2017,
        the Nasdaq Composite index has gained 25%.

        Light Street Capital, based in Palo Alto, California, is
        up 52.7% net of fees in the first 10 months of 2017, making
        it the top-performing hedge fund this year. Its baby-faced
        boss, Glen Kacher, is pounding the table, saying tech stocks
        have room to run.

        \"The idea that this is a bubble is a joke,\" says
        Kacher, 46. \"I don't think people are looking at the
        fundamentals.\"

        Since its inception in 2010, Kacher's $1.1 billion
        tech-focused hedge fund has delivered annualized net
        returns of 19.8%. More than anything, he has been in the
        right place at the right time. By parking himself in Silicon
        Valley instead of New York and spending time with VCs and
        entrepreneurs rather than Wall Street's sell-side analysts,
        Kacher has gained the equivalent of first-mover advantage
        among hedge funds."
)

NewsArticle.create(
  publisher: "Forbes",
  title: "Three Stock Picks From A Manager Who\'s Beaten The Roaring
          S&P 500 By Playing Defense",
  date: Date.new(2017, 11, 21),
  company_id: square.id,
  views: 38,
  img_url: "https://specials-images.forbesimg.com/imageserve/875048394/960x0.jpg?fit=scale",
  source: "https://www.forbes.com/sites/antoinegara/2017/11/21/three-stock-picks-from-a-manager-whos-beat-the-roaring-sp-500-by-playing-defense/#4a6f36bf2348",
  body: "Investment out-performance is a rare commodity on Wall Street
        due to a roaring bull market that's left most active managers
        in the dust. For those who are beating the market, having a
        good defensive plan for the inevitable downturn is paramount.

        Take Adam Abelson, portfolio manager of the $136 million
        Stralem Equity Fund. He runs a stock-only portfolio that
        acts more like a balanced fund that holds an allocation to
        the safety of bonds. Abelson avoids bonds for the favor of
        stocks, but his twist is to split Stralem\'s portfolio into
        what he calls \"up market stocks,\" growth companies that should
        outperform in bull markets, and \"down market stocks\" like
        utilities and consumer staples that preserve capital during
        bear markets.

        This common sense strategy, a bedrock of family-owned Stralem
        & Co, has yielded impressive results. Not only has Abelson's
        Equity Fund outperformed balanced funds, it's also beaten the
        soaring S&P 500 over the long haul. Net of fees, Stralem's
        Equity Fund has returned 11.3% annually over five years, 9.4%
        over ten years and 10.8% over twenty years, beating the S&P 500
        by between 2% and 2.8% a year. Having a good defense is valuable."
)
