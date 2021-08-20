import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import GoogleMap from 'google-map-react';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

export default function Home() {
  
  const [publications, setPublications] = useState();

  const team = [{
    imgUrl: '/tigran.png',
    name: 'Tigran Yuzbashev (Postdoc)',
    description: 'Hey, I’m Tigran from Moscow. I am happy to work in such genius environment as Ledesma-Amaro lab in Imperial. Microbial engineering is the flagship of Synthetic Biology and new continents should be discovered very soon. Let’s do it, Arrr!'
  }, {
    imgUrl: '/huadong.png',
    name: 'Huadong Peng (Postdoc)',
    description: 'I am Huadong, from Hubei, China. I am learning to build synthetic microbial communities now. Prior to Imperial, I had some experiences in yeast lipid pathway engineering, biomass refinery especially biomass pretreatment for bioethanol production. Outside lab, I enjoy cooking, swimming and watching martial arts movies and close to nature.'
  }, {
    imgUrl: '/amritpal.png',
    name: 'Amritpal Singh (PhD student)',
    description: "Hi! I'm Amritpal from London. I am a PhD student looking at hijacking bacterial metabolism and calling it engineering as well as trying to figure out how to get things from inside the cell to the outside, turns out its a harder than it sounds. I work in the organism that brought your Bacterial Cellulose, K. rhaeticus . When not in the lab (lol), I travel, I appreciate the natural world, I collect Antique weaponry and contemplate why, because why not?"
  }, {
    imgUrl: '/lucie.png',
    name: 'Lucie Studena (PhD student)',
    description: 'I am Lucie and in my PhD project, I use consortia of microorganisms to cheaply and efficiently produce medically relevant sesquiterpenoids. When not working, I enjoy anything outdoors (caving, mountain expeditions, kayaking), frisbee ultimate, acroyoga, improv, and way too many other activities.'
  }, {
    imgUrl: '/alicia.png',
    name: 'Alicia Graham (PhD student)',
    description: 'Hello! My name is Alicia and Im a PhD student working on the production of nutritionally important bio active compound form the yeast Yarrowia lipolytica. In my free time I enjoy cooking and travelling.'
  }, {
    imgUrl: '/alice.png',
    name: 'Alice Boo (PhD student)',
    description: "Hi, I'm Alice from the other side of the channel. I'm a PhD student working on a joint project with Dr Guy-Bart Stan and Dr Rodrigo Ledesma Amaro to build robust synthetic Escherichia coli consortia. I also enjoy sailing."
  }, {
    imgUrl: '/wei.png',
    name: 'Wei Jiang (PhD student)',
    description: 'Hey, I am Wei. I focus on lipid metabolism in yeast. I try to build an efficient yeast cell factory platform to produce some unusual fatty acids with high values. In my spare time, I like cooking and enjoy delicious foods with friends.'
  }, {
    imgUrl: '/nishta.png',
    name: 'Nishta Parekh (MRes student)',
    description: 'Hi, I’m Nishta and I’m a Bioengineering MRes student. I am currently engineering a yeast strain capable of fixing and recycling waste products through synthetic biology. Besides fiddling with genes, I am a competitive netball player and also play the classical Indian flute. Last but not yeast (pun intended), I’m a bit of an adrenaline junkie and enjoy trying out new experiences and activities.'
  }, {
    imgUrl: '/eric.png',
    name: 'Eric South (MRes student)',
    description: "Finding a balance between analyst and designer. Currently interested in creating synthetic communities for application in bioproduction. When not in lab I'm studying the bioeconomy, mining for hip music, or wandering somewhere outdoors."
  }, {
    imgUrl: '/alicia_2.png',
    name: 'Alicia Climent (PhD Student)',
    description: 'Hi! I’m Alicia Climent. In my PhD project, I’m trying to control gene expression using a synbio-based electronic toolbox. I am interested in investigating how far the boundaries between electronics and synthetic biology can be blurred by pushing the limits of biological science into new and exciting grounds. Outside the lab, I enjoy travelling, reading and having a great time with colleagues!'
  }, {
    imgUrl: '/davina.png',
    name: 'Davina Patel (PhD student)',
    description: "Hi! I'm Davina and I come from London. For my PhD, I am focusing on heterogeneity in yeast so that I can eventually engineer a strain for use in therapeutic applications. In my spare time I enjoy doing anything that's creative and artistic."
  }, {
    imgUrl: '/eliza.png',
    name: 'Eliza Atkison (MRes student)',
    description: 'Hello! I’m Eliza and I’m a BioDesign Engineering CDT student. My project investigates the use of novel communication systems and division of metabolic load within microbial consortia for the development of next generation biotechnology. Outside the lab I spend my time baking cakes, watching horror movies and accidentally murdering my houseplants.'
  }, {
    imgUrl: '/yutong.png',
    name: 'Yutong Yin (MRes Student)',
    description: 'Hi, I am Yutong and I am currently a Bioengineering MRes student. I am currently working on bacterial promoter engineering and the development of a multiplexed system to control yeast metabolism. Besides working in the lab, I also love watching musicals, eating and going to the gym.'
  }]

  useEffect(() => {
    (async () => {
      const response = await fetch('/publications.json');
      const publicationsJSON = await response.json();
      const {response: {results}} = publicationsJSON;
      setPublications(results)
    })()
  }, [])
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Rlalab - Synthetic Biology for Metabolic Engineering</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Jura&family=Quicksand&&family=Roboto:wght@300&display=swap" rel="stylesheet" />
      </Head>

      <section className={styles.homeSection}>
        <div className={styles.mainSectionContainer}>
            <div>
              <h1 className={styles.labName}>Rlalab.</h1>
              <h3 className={styles.labSubName}>Synthetic Biology for Metabolic Engineering</h3>
            </div>
            <div>
              <span className={styles.labDescription} data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">Rodrigo Ledesma-Amaro's Lab</span>
            </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">What<span className={styles.greenText}> we do.</span></h3>
        </div>
        <div className={styles.sectionMainInfo} data-aos="fade-up" data-aos-duration="1500" data-aos-delay="300" data-aos-offset="0">
          <span className={styles.sectionMainText}>The RLAlab is interested in how the development of synthetic biology 
            can revolutionise biotechnologies and help us to move towards a sustainable 
            bio-based economy. We engineer microorganisms for a wide range of applications 
            which span from the production of the chemicals and fuels we usually get from 
            petroleum to their use in biomedicine and therapeutics.</span>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">Our <span className={styles.greenText}>research lines.</span></h3>
        </div>
        <div className={styles.sectionInfo}>
          <div className={styles.researchLineWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
            <h5 className={styles.researchLineTitle} >New synthetic biology tools for metabolic control</h5>
            <div className={styles.researchLineInfo}>
              <div className={styles.researchLineInfoText}>
                <p>
                  The group is interested in using and developing new synthetic biology tools that allow us to precisely manipulate microbial cells in a reliable, 
                  predictable and standardised way. In particular, we are interested in those cutting-edge techniques that permit a fine tuning of metabolic pathways.
                </p>
                <p>
                  For further reading see our last reviews on synthetic biology tools in Yarrowia and Rhodosporidium.
                </p>
              </div>
              <div>
                <Image src="/researchLine1.png" alt="New synthetic biology tools for metabolic control" width="800" height="600"/>
              </div>
            </div>
          </div>
          <div className={styles.researchLineWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
            <h5 className={styles.researchLineTitle} >New synthetic biology tools for metabolic control</h5>
            <div className={styles.researchLineInfo}>
              <div>
              <Image src="/researchLine2.png" alt="Metabolic engineering for sustainable bioproduction" width="800" height="600"/>
              </div>
              <div className={styles.researchLineInfoText}>
                <p>
                  The manipulation and optimization of microbial metabolic pathways are the keys for biotechnology and a bio-based economy. 
                  The research group is highly interested in hacking metabolism using synthetic biology tools to create new properties and enhanced behaviors in microbial cells. 
                  The engineering strategies are not only designed to produce new high-value products or higher amount of pre-existing products but also to facilitate the downstream 
                  and upstream parts of the bioprocesses.
                </p>
                <p>
                  The lab is interested in engineering both, conventional (such as E. coli, B. subtilis and S. cerevisiae) and non-conventional organisms, 
                  which span from yeast (Y. lipolytica), fungus (A. gossypii) and bacteria (K. rhaeticus).
                </p>
                <p>
                 For further reading see our last reviews on the <a className={styles.link} href="https://www.cell.com/trends/biotechnology/fulltext/S0167-7799(16)30029-4">importance of substrates in bioproduction</a> and <a className={styles.link} href="https://www.sciencedirect.com/science/article/pii/S0163782715300205">engineering 
                 production in Yarrowia</a>.
                </p>
              </div>
            </div>
          </div>
          <div className={styles.researchLineWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
            <h5 className={styles.researchLineTitle} >Synthetic microbial communities for biotechnology and biomedicine</h5>
            <div className={styles.researchLineInfo}>
              <div className={styles.researchLineInfoText}>
                <p>
                  Microbial communities are important for both industrial bioprocesses (i.e. soy sauce production) and biomedicine (i.e. gut or skin microbiota). 
                  We are interested in how microbial communities can be engineer and how synthetic biology can help to establish novel communities of microbes which 
                  can have applications in biotechnology and healthcare.
                </p>
                <p>
                  For further reading see our last review on <a className={styles.link} href="https://www.cell.com/trends/biotechnology/fulltext/S0167-7799(18)30312-3">synthetic microbial communities</a>
                </p>
              </div>
              <div>
                <Image src="/researchLine3.png" alt="Synthetic microbial communities for biotechnology and biomedicine" width="600" height="600"/>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">Who <span className={styles.greenText}>we are.</span></h3>
        </div>
        <div className={styles.peopleMain} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
          <div className={styles.peopleMainImg}>
          </div>
          <div className={styles.peopleMainDescription}>
            <h2>Rodrigo Ledesma-Amaro (the PI)</h2>
            <h3>Overview</h3>
            <p>Rodrigo Ledesma-Amaro is a lecturer at the Department of Bioengineering at Imperial College London and is part of the Imperial College Centre for Synthetic Biology (IC-SynB). He is leading a research group at the interface of synthetic biology and metabolic engineering. </p>
            <p>Rodrigo has published more than 55 articles and patents, has obtained 11 fellowships/scholarships and 8 awards. He has been invited speaker in more than 20 conferences and workshops, including keynote talks. He is involved in editorial activities including works in editorial boards and acts as reviewer for journals and grants, including Nature, H2020 or BBSRC.</p>
            <h3>Biography</h3>
            <p>Rodrigo Ledesma-Amaro obtained his PhD at the University of Salamanca under the supervision of Prof. Jose Luis Revuelta, the head of the metabolic engineering group. The PhD thesis is about systems metabolic engineering of A. gossypii for the production of vitamins, nucleosides and lipids. It combines modeling, synthetic biology, systems biology and metabolic engineering techniques and it produced numerous research papers and industrial patents (being currently used by BASF). Before that, Rodrigo coursed an MSc in Microbial Biotechnology at the Universidad Autonoma de Madrid and two undergraduate degrees (Biotechnology and Chemical Engineering) at the University of Salamanca. During his PhD, Rodrigo was a visiting researcher at Prof. Jens Nielsen's group at Chalmers University of Technology (Sweden), at Prof. Jean-Marc Nicaud’s lab at INRA (France) and at Prof. Kamisaka's group at AIST (Japan).
              After the PhD, he moved to France with a Marie Curie Fellowship and he performed his postdoc in the group of Jean-Marc Nicaud. Most of his postdoctoral research work was done in the oleaginous yeast Yarrowia lipolytica. During those years, Rodrigo engineered this organism to 1) produce different compounds (lipids, lipid-derived chemicals, carotenoids, etc), 2) to be able to use low-cost carbon sources such as lignocellulosic materials or starch and 3) to facilitate the recovery of the products by engineering lipid secretion. During the postdoc, Rodrigo taught synthetic biology related subjects at SUP biotech, Paris.
            </p>
            <p>In 2017, he joined Imperial College London as independent research with an Imperial College Research Fellowship and in 2019 he was appointed as lecturer in the Department of Bioengineering. </p>
          </div>
        </div>
        <div style={{width:'100%', height: 'auto'}} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
          <Swiper
            slidesPerView={1} 
            slidesPerColumn={1} 
            spaceBetween={30}
            slidesPerGroup={1}
            autoplay={true}
            slidesPerColumnFill={'row'}
            pagination={{ clickable: true }}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 3,
                slidesPerGroup: 3,
                slidesPerColumn: 2,
              },
            }}
          >
            {team.map((member, index) => (
              <SwiperSlide key={index}>
                <div style={{display:'flex', flexFlow:'column nowrap', height:'auto'}}>
                  <img src={member.imgUrl} style={{borderRadius:'50%', width:'80px'}} />
                  <div style={{display:'flex', flexFlow:'column wrap', fontSize:'1.3em', lineHeight:'33px'}}>
                    <h3>{member.name}</h3>
                    <span>{member.description}</span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">Our <span className={styles.greenText}>publications.</span></h3>
        </div>
        <div className={styles.pubList} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
          {!!publications && publications.map((pub,index) => (
            <div className={styles.pubListItem} key={index}>
              <h3>{!!pub.doiUrl ? <a href={pub.doiUrl}>{pub.title}</a> : `${pub.title}`}</h3>
              <span><em>{pub.authors} - {pub.extraAuthors}</em></span>
              <span><b>{pub.journalText}</b> | {pub.publicationDate}</span>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0"><span className={styles.greenText}>Socials.</span></h3>
        </div>
        <div style={{width:'100%'}} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            centeredSlides={true}
            loop={true}
            breakpoints={{
              // when window width is >= 640px
              640: {
                slidesPerView: 2,
                spaceBetween: 30
              },
            }}
          >
            <SwiperSlide><img src="/social1.png" style={{width: '100%', borderRadius:'15px', boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}/></SwiperSlide>
            <SwiperSlide><img src="/social2.png" style={{width: '100%', borderRadius:'15px', boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}/></SwiperSlide>
            <SwiperSlide><img src="/social3.png" style={{width: '100%', borderRadius:'15px', boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}/></SwiperSlide>
            <SwiperSlide><img src="/social4.png" style={{width: '100%', borderRadius:'15px', boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}/></SwiperSlide>
            <SwiperSlide><img src="/social5.png" style={{width: '100%', borderRadius:'15px', boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}/></SwiperSlide>
            <SwiperSlide><img src="/social6.png" style={{width: '100%', borderRadius:'15px', boxShadow:'2px 2px 2px 1px rgba(0, 0, 0, 0.2)'}}/></SwiperSlide>
          </Swiper>
        </div>
      </section>
      <section className={styles.section}>
        <div className={styles.sectionTitle}>
          <h3 data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-offset="0">Contact <span className={styles.greenText}>us.</span></h3>
        </div>
        <div className={styles.contactWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-offset="0">
          <div>
            <h3>Dr Rodrigo Ledesma-Amaro</h3>
            <hr/>
            <p>Imperial College Centre for Synthetic Biology (IC-CSynB) and the Department of Bioengineeing at Imperial College London</p>
            <p><a href="https://www.imperial.ac.uk/people/r.ledesma-amaro">https://www.imperial.ac.uk/people/r.ledesma-amaro</a></p>
            <p>Email: <a href="mailto:r.ledesma-amaro@imperial.ac.uk">r.ledesma-amaro@imperial.ac.uk</a></p>
            <p>Twitter: <a href="https://twitter.com/ledesmaamaro">@LedesmaAmaro</a></p>
            <p>ResearchGate: <a href="https://www.researchgate.net/profile/Rodrigo_Ledesma-Amaro">Rodrigo Ledesma Amaro</a></p>
            <p>Google Scholar: <a href="https://scholar.google.com/citations?user=kWTPnDIAAAAJ&hl=es">Rodrigo Ledesma Amaro</a></p>
          </div>
          <div>
            <h3 >Positions - Join the group</h3>
            <hr/>
            <p>If you are a talented and highly motivated researcher/student with knowledge/interest in the research areas of the group and you would like to join us, please email us with your CV and motivation (r.ledesma-amaro@imperial.ac.uk).</p>
          </div>
          <div>
            <h3 >Consulting</h3>
            <hr />
            <p>Dr Ledesma-Amaro and the lab believe that academic knowledge has a key role in translational research, and we are currently involved in partnerships with several companies at different levels. We often consider consultancy tasks that relies in our field of expertise. Please contact us for more information (r.ledesma-amaro@imperial.ac.uk).
            Additional information can be found at:
            <a href="https://www.imperial-consultants.co.uk/expertise-areas/bioengineering-biotechnology.html">https://www.imperial-consultants.co.uk/expertise-areas/bioengineering-biotechnology.html</a></p>
          </div>
        </div>
      </section>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <span>Rlalab.</span>
          <p>Rodrigo Ledesma Amaro</p>
          <p><a href="http://maps.google.com/?q=Royal+School+of+Mines+London">Imperial College London, Royal School of Mines, South Kensington Campus, London SW7 2AZ</a></p>
          <p>+44 20 7589 4113</p>
        </div>
        <div className={styles.mapContainer}>
          <GoogleMap
            bootstrapURLKeys={{key: process.env.NEXT_PUBLIC_API_KEY}}
            center={[51.4997693, -0.1756972]}
            options={{ mapId: "e44f610fbcf086a3" }}
            zoom={16}>
          </GoogleMap>
        </div>
      </footer>
    </div>
  )
}
