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

phoebe = User.create(
  first_name: "Phoebe",
  last_name: "Buffay",
  username: "smelly_cat",
  email: "phoebe@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 2387.56,
  img_url: "https://media1.popsugar-assets.com/files/thumbor/Jag4QheIiSRDyPige1c7d6J7X68/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2017/07/25/859/n/1922398/1bb1be5259779df9303e84.02388163_edit_img_image_43785815_1500923262/i/Phoebe-Buffay-Quotes-From-Friends.jpg",
)

angel = User.create(
  first_name: "Angel",
  last_name: "Velasco",
  username: "angel_investor",
  email: "angel@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 200.78,
  img_url: "https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-9/10978708_10153614256417782_4766753004612419991_n.jpg?oh=f9f5fb8ea7304ec7df0ae34eab9fa0cc&oe=5A9AB2E1",
)

kyle = User.create(
  first_name: "Kyle",
  last_name: "Chen",
  username: "kyle_investor",
  email: "kyle@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 2046.14,
  img_url: "https://scontent-dft4-3.xx.fbcdn.net/v/t31.0-8/1618070_10103188188301906_1360432566_o.jpg?oh=fdce632a8e2a82e91b69e0bc3436d3ff&oe=5A8EA1B5",
)

truong = User.create(
  first_name: "Truong",
  last_name: "Nguyen",
  username: "truong_investor",
  email: "truong@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 10460.97,
  img_url: "https://scontent-dft4-3.xx.fbcdn.net/v/t1.0-9/12495026_10100619690402705_6496191290963588437_n.jpg?oh=f66a60a78abd24959aa0166c8991a778&oe=5A95067C",
)

maxine = User.create(
  first_name: "Maxine",
  last_name: "Chui",
  username: "maxine_investor",
  email: "maxine@gmail.com",
  password: "hello123",
  contact_number: "415-555-5555",
  cash_value: 4493.32,
  img_url: "https://scontent-dft4-3.xx.fbcdn.net/v/t31.0-8/18836844_10158970912825294_5473833442981876383_o.jpg?oh=6fcbcc876d6a38bae5353a160cccf64e&oe=5A8D0B7B",
)

#-------------------------------#
#----------- Company -----------#
#-------------------------------#

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

)

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
)

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
)

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
)

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
)

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
)

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
)

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
)

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
)

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
            \nAmazon has separate retail websites for the United States,
            the United Kingdom and Ireland, France, Canada, Germany,
            Italy, Spain, Netherlands, Australia, Brazil, Japan, China,
            India, and Mexico. In 2016, Dutch, Polish, and Turkish
            language versions of the German Amazon website were also
            launched. Amazon also offers international shipping to
            certain other countries for some of its products.
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
)


#-------------------------------#
#------------ Stock ------------#
#-------------------------------#

Stock.create(
  user_id: phoebe.id,
  company_id: google.id,
  num_shares: 2
)
Stock.create(
  user_id: phoebe.id,
  company_id: netflix.id,
  num_shares: 4
)
Stock.create(
  user_id: phoebe.id,
  company_id: snap.id,
  num_shares: 4
)
Stock.create(
  user_id: phoebe.id,
  company_id: tesla.id,
  num_shares: 8
)
Stock.create(
  user_id: phoebe.id,
  company_id: nvidia.id,
  num_shares: 6
)
Stock.create(
  user_id: phoebe.id,
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
  user_id: phoebe.id,
  company_id: amd.id
)
WatchlistItem.create(
  user_id: phoebe.id,
  company_id: square.id
)
WatchlistItem.create(
  user_id: phoebe.id,
  company_id: apple.id
)
WatchlistItem.create(
  user_id: phoebe.id,
  company_id: facebook.id
)

#-------------------------------#
#--------- NewsArticle ---------#
#-------------------------------#

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
  company_id: snap.id,
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
