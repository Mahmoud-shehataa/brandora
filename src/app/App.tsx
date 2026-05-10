import { useEffect, useState } from 'react';
import brandoraLogo from '../imports/brandora-logo-compact.png';
import brandoraStoryGif from '../imports/brandora-story.gif';
import aiIcon from '../imports/flaticon/artificial-intelligence.png';
import brandingIcon from '../imports/flaticon/branding.png';
import contentIcon from '../imports/flaticon/content-creation.png';
import digitalMarketingIcon from '../imports/flaticon/digital-marketing.png';
import eventMarketingIcon from '../imports/flaticon/event-marketing.png';
import strategyIcon from '../imports/flaticon/strategy.png';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ar'>('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem('brandora_lang');
    if (stored === 'ar' || stored === 'en') {
      setLang(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    localStorage.setItem('brandora_lang', lang);
  }, [lang]);

  const toggleLang = () => setLang(lang === 'en' ? 'ar' : 'en');

  const content = {
    en: {
      nav: {
        home: 'Home',
        services: 'Services',
        story: 'Story',
        vision: 'Vision',
        why: 'Why Us',
        contact: 'Contact',
        cta: 'Start your story'
      },
      hero: {
        badge: 'Digital Marketing Agency',
        title1: 'WE TURN',
        title2: 'YOUR BRAND',
        title3: 'INTO LEGEND',
        subtitle: "A next-generation full-service creative agency. We believe that every brand has a story worth telling — and we're here to tell it right. Bridging digital innovation and real-world impact through strategy and execution.",
        primary: 'Start Your Journey',
        secondary: 'Explore Services',
        stats: [
          { value: '+50', label: 'Successful Projects' },
          { value: '3X', label: 'Avg. Client Growth' },
          { value: '100%', label: 'Passion in What We Do' },
          { value: 'KSA', label: 'Based in Saudi Arabia' }
        ],
        marquee: [
          'Content Strategy',
          'Social Media Management',
          'Paid Advertising',
          'Visual Identity',
          'Creative Design',
          'Copywriting'
        ]
      },
      services: {
        kicker: 'Services',
        title: 'Brandora Services',
        subtitle: 'From your first idea to your last campaign — we offer an integrated suite of creative, marketing, and technology services designed to build brands that grow, connect, and lead.',
        items: [
          {
            number: '01',
            title: 'Digital Marketing',
            desc: 'AI-powered digital campaigns across all major platforms — built on data, optimized for performance, and designed to reach the right audience at the right moment.'
          },
          {
            number: '02',
            title: 'On-Ground Marketing',
            desc: 'Real-world brand activations, events, and experiential campaigns that create memorable touchpoints and build genuine connections with your audience face-to-face.'
          },
          {
            number: '03',
            title: 'Content Creation',
            desc: 'Strategic, high-quality content across all formats — crafted to educate, engage, and convert. We produce content that speaks your brand\'s voice and serves your audience\'s needs.'
          },
          {
            number: '04',
            title: 'Brand Identity & Design',
            desc: 'We build complete visual identities that express who you are and what you stand for — from logo and color system to brand guidelines and full design assets.'
          },
          {
            number: '05',
            title: 'AI & Technology Solutions',
            desc: 'We leverage cutting-edge AI tools and modern technology to automate, optimize, and elevate every aspect of your marketing — giving your brand a smarter competitive edge.'
          },
          {
            number: '06',
            title: 'Brand Strategy & Consulting',
            desc: 'Before execution comes direction. We help brands define their positioning, messaging, and growth roadmap — backed by expert insights from specialists with international experience.'
          }
        ]
      },
      story: {
        kicker: 'About Brandora',
        title: 'Every brand has a story worth telling.',
        p1: 'Brandora is a next-generation full-service creative agency specializing in bridging the gap between digital innovation and real-world impact through digital and on-ground marketing, content creation, and brand identity design.',
        p2: 'We combine creativity, strategy, and insight to turn ideas into meaningful brand experiences. From strategy to execution, we help brands grow, connect with their audiences, and achieve sustainable growth in an ever-evolving marketplace.',
        quote: 'Building strong connections between brands and their audiences.',
        visualTag: 'Built to stick out',
        visualText: 'Modern structure. Human voice. Clear intent.',
        pillars: [
          {
            title: 'Specialized & Passionate Team',
            desc: 'We treat your project as if it were our own'
          },
          {
            title: 'Deep Cross-Industry Expertise',
            desc: 'Flexibility and insight across diverse sectors'
          },
          {
            title: 'Modern Creative Approach',
            desc: 'Cutting-edge tools combined with the human touch'
          }
        ]
      },
      vision: {
        kicker: 'Vision & Mission',
        title: 'Our Vision, Mission & Core Values',
        vision: {
          title: 'Vision',
          text: 'To be the voice that gets heard — the leading creative and strategic partner for businesses and brands in the Arab world and beyond. Pioneering digital brand identity through limitless creativity, smart technology, and measurable results.'
        },
        mission: {
          title: 'Mission',
          text: 'We believe in the power of ideas and turning them into impact. Developing integrated digital marketing, advertising, and creative content creation to build real bridges between brands and their audience, empowering brands to grow and stand out in the digital space.'
        },
        values: {
          title: 'Core Values',
          items: [
            'Sustainable Creativity',
            'Honesty & Transparency',
            'Continuous Learning',
            'Results-Driven'
          ]
        }
      },
      why: {
        kicker: 'Why Brandora',
        title: 'Why Brandora?',
        subtitle: 'In a crowded marketplace, the difference isn\'t just what you offer — it\'s how you think, build, and grow. At Brandora, we combine the power of human expertise with the intelligence of modern technology — to build brands that don\'t just compete, but lead. Here\'s what makes Brandora the partner brands trust.',
        items: [
          {
            index: '01',
            title: 'AI-Powered & Tech-Driven',
            desc: 'We deeply integrate cutting-edge AI tools and modern technology into every service we offer from content generation and campaign optimization to brand analysis and audience targeting — giving your brand a smarter, faster, and more precise competitive edge.'
          },
          {
            index: '02',
            title: 'World-Class Expertise',
            desc: 'Our team consists of highly specialized experts with proven track records on major projects for international and global organizations — bringing world-class standards, strategic depth, and cross-industry insight to every client we serve.'
          },
          {
            index: '03',
            title: 'Next-Generation Creative Thinking',
            desc: 'We blend limitless creativity with smart technology and data-driven strategy to craft brand experiences that are bold, relevant, and built to last.'
          },
          {
            index: '04',
            title: 'Digital & Real-World Impact',
            desc: 'We bridge the gap between online and offline — combining digital marketing with on-ground activations to create a seamless brand presence wherever your audience is.'
          },
          {
            index: '05',
            title: 'End-to-End Brand Building',
            desc: 'From identity design and content creation to full-scale campaigns, we handle every layer of your brand — ensuring consistency, clarity, and momentum at every touchpoint.'
          },
          {
            index: '06',
            title: 'Content That Connects',
            desc: 'Whether academic, marketing, or knowledge-based — our content is engineered to educate, engage, and convert the right audience at the right moment.'
          },
          {
            index: '07',
            title: 'Strategy Meets Creativity',
            desc: 'We combine creative vision with measurable strategy to ensure every move serves your growth and delivers real, trackable results.'
          },
          {
            index: '08',
            title: 'Built for Sustainable Growth',
            desc: 'We don\'t chase trends — we build foundations. Our approach helps brands grow steadily, stand out authentically, and stay relevant in an ever-evolving marketplace.'
          }
        ],
        coreValues: {
          title: 'What drives us',
          items: [
            'Sustainable Creativity',
            'Honesty & Transparency',
            'Continuous Learning',
            'Results-Driven'
          ]
        }
      },
      process: {
        kicker: 'Process',
        title: 'How we build momentum',
        text: 'Clear collaboration from the first idea to launch.',
        items: [
          {
            step: '01',
            title: 'Discover',
            text: 'Understand your offer, audience, positioning, and growth goal.'
          },
          {
            step: '02',
            title: 'Shape',
            text: 'Build the message, visual direction, and campaign structure.'
          },
          {
            step: '03',
            title: 'Launch',
            text: 'Produce creative assets and roll out content, ads, and social activity.'
          },
          {
            step: '04',
            title: 'Grow',
            text: 'Refine, optimize, and scale the channels that perform.'
          }
        ]
      },
      contact: {
        kicker: 'Ready to begin?',
        title: 'Let us turn your story into an influential digital presence.',
        subtitle: 'If you want marketing with a clear voice, strong design, and a custom strategy, Brandora is ready to start the journey.',
        cta: 'Call Brandora now',
        phone: 'Contact number',
        handles: 'Social Handles',
        handlesText: 'Instagram / Facebook / Snapchat: brandora.kas - X / TikTok: Brandora_ksa'
      },
      footer: {
        note: 'Brandora - Next-generation full-service creative agency',
        copyright: `Copyright ${new Date().getFullYear()}. All rights reserved.`
      }
    },
    ar: {
      nav: {
        home: 'الرئيسية',
        services: 'الخدمات',
        story: 'قصتنا',
        vision: 'الرؤية',
        why: 'لماذا نحن',
        contact: 'تواصل',
        cta: 'ابدأ قصتك'
      },
      hero: {
        badge: 'وكالة تسويق رقمي',
        title1: 'نُحوّل',
        title2: 'إبداعك',
        title3: 'إلى نمو',
        subtitle: 'شركة إبداعية متكاملة من الجيل القادم. نؤمن بأن لكل علامة تجارية قصة تستحق أن تُروى — وهي هنا لترويها بالشكل الصحيح. الجسر الذي يصل بين الابتكار الرقمي والتأثير الملموس من خلال الاستراتيجية والتنفيذ.',
        primary: 'ابدأ قصتك معنا',
        secondary: 'اكتشف الخدمات',
        stats: [
          { value: '+50', label: 'مشروع ناجح' },
          { value: '3X', label: 'متوسط نمو العملاء' },
          { value: '100%', label: 'شغف بما نفعل' },
          { value: 'KSA', label: 'مقرنا المملكة العربية السعودية' }
        ],
        marquee: [
          'استراتيجية المحتوى',
          'إدارة السوشيال ميديا',
          'الإعلانات المدفوعة',
          'الهوية البصرية',
          'التصميم الإبداعي',
          'كتابة المحتوى'
        ]
      },
      services: {
        kicker: 'الخدمات',
        title: 'خدماتنا',
        subtitle: 'من فكرتك الأولى وحتى حملتك الأخيرة؛ نقدم مجموعة متكاملة من الخدمات الإبداعية والتسويقية والتقنية، المصممة لبناء علامات تجارية تنمو، تتواصل، وتتصدر المشهد.',
        items: [
          {
            number: '01',
            title: 'التسويق الرقمي',
            desc: 'حملات رقمية مدعومة بالذكاء الاصطناعي عبر كافة المنصات الرئيسية؛ مبنية على البيانات، ومُحسّنة لتحقيق أعلى أداء، ومصممة للوصول إلى الجمهور المناسب في اللحظة المثالية.'
          },
          {
            number: '02',
            title: 'التسويق الميداني',
            desc: 'تفعيل العلامة التجارية على أرض الواقع من خلال فعاليات وحملات تجريبية تصنع نقاط تواصل لا تُنسى، وتبني روابط حقيقية ومباشرة مع جمهورك وجهاً لوجه.'
          },
          {
            number: '03',
            title: 'صناعة المحتوى',
            desc: 'محتوى استراتيجي عالي الجودة بكافة القوالب؛ صُمم خصيصاً للتثقيف والجذب والتحويل. نصيغ محتوى يتحدث بصوت علامتك التجارية ويلبي احتياجات جمهورك.'
          },
          {
            number: '04',
            title: 'هوية العلامة التجارية والتصميم',
            desc: 'نبني هويات بصرية متكاملة تعبر عن جوهرك وقيمك؛ بدءاً من الشعار ونظام الألوان وصولاً إلى أدلة الهوية وكافة الأصول التصميمية.'
          },
          {
            number: '05',
            title: 'حلول الذكاء الاصطناعي والتكنولوجيا',
            desc: 'نسخّر أحدث أدوات الذكاء الاصطناعي والتقنيات العصرية لأتمتة وتحسين ورفع كفاءة كل جانب من جوانب تسويقك، مما يمنح علامتك التجارية ميزة تنافسية أكثر ذكاءً.'
          },
          {
            number: '06',
            title: 'استشارات واستراتيجية العلامة التجارية',
            desc: 'التوجيه يسبق التنفيذ؛ نساعد العلامات التجارية في تحديد مكانتها، ورسالتها، وخارطة طريق نموها، مدعومين برؤى خبراء متخصصين ذوي خبرات دولية.'
          }
        ]
      },
      story: {
        kicker: 'عن براندورا',
        title: 'لكل علامة تجارية قصة تستحق أن تُروى.',
        p1: 'براندورا شركة إبداعية متكاملة من الجيل القادم متخصصة في الربط بين الابتكار الرقمي والتأثير الواقعي من خلال التسويق الرقمي والميداني، صناعة المحتوى، وتصميم الهوية التجارية.',
        p2: 'نمزج بين الإبداع، الاستراتيجية، والرؤية الثاقبة لتحويل الأفكار إلى تجارب علامة تجارية هادفة. من الاستراتيجية إلى التنفيذ، نساعد العلامات على النمو، التواصل مع جمهورها، وتحقيق النمو المستدام في سوق دائم التطور.',
        quote: 'بناء روابط قوية بين العلامات التجارية وجمهورها.',
        visualTag: 'مصمم ليبرز',
        visualText: 'هيكل حديث. صوت إنساني. هدف واضح.',
        pillars: [
          {
            title: 'فريق متخصص وشغوف',
            desc: 'يتعامل مع مشروعك كأنه مشروعه الخاص'
          },
          {
            title: 'خبرة واسعة ومتنوعة',
            desc: 'مرونة وفهم عميق لمختلف الصناعات'
          },
          {
            title: 'نهج إبداعي حديث',
            desc: 'أحدث أدوات التسويق مع اللمسة الإنسانية'
          }
        ]
      },
      vision: {
        kicker: 'الرؤية والرسالة',
        title: 'الرؤية، الرسالة، والقيم',
        vision: {
          title: 'الرؤية',
          text: 'نسعى لأن نكون صوت العلامات المسموع، الشريك الإبداعي والاستراتيجي الرائد لكافة الشركات والعلامات التجارية في المنطقة العربية والعالم بأسره؛ لتصبح سيادة مستقبل الهوية التجارية الرقمية بين أيدينا عن طريق إبداع بلا حدود، تقنيات ذكية، ونتائج ملموسة قابلة للقياس.'
        },
        mission: {
          title: 'الرسالة',
          text: 'نؤمن بقوة الأفكار، وبقدرتنا على تحويلها إلى واقع ملموس وأثر حقيقي؛ نعمل على تطوير استراتيجيات متكاملة في التسويق الرقمي، الإعلانات، وصناعة المحتوى الإبداعي لبناء جسور حقيقية بين العلامات التجارية وجمهورها، وتمكينها من النمو والتميز في الفضاء الرقمي.'
        },
        values: {
          title: 'القيم',
          items: [
            'الإبداع المستدام',
            'الصدق والشفافية',
            'التعلم المستمر',
            'التركيز على النتائج'
          ]
        }
      },
      why: {
        kicker: 'لماذا براندورا',
        title: 'لماذا براندورا؟',
        subtitle: 'في سوق مزدحم بالمنافسين، لا يكمن الفارق فيما تقدمه فحسب، بل في طريقة تفكيرك، وبنائك، ونموك. في "براندورا" نجمع بين قوة الخبرة البشرية وذكاء التكنولوجيا الحديثة، لنبني علامات تجارية لا تكتفي بالمنافسة، بل تتصدر المشهد. إليك ما يجعل "براندورا" الشريك الذي تثق به العلامات التجارية:',
        items: [
          {
            index: '01',
            title: 'مدعومون بالذكاء الاصطناعي والتكنولوجيا',
            desc: 'نحن ندمج أدوات الذكاء الاصطناعي المتطورة والتقنيات الحديثة بعمق في كل خدمة نقدمها — بدءاً من صناعة المحتوى وتحسين الحملات، وصولاً إلى تحليل العلامة التجارية واستهداف الجمهور — مما يمنح علامتك التجارية ميزة تنافسية أذكى، أسرع، وأكثر دقة.'
          },
          {
            index: '02',
            title: 'خبرات عالمية',
            desc: 'يتكون فريقنا من خبراء متخصصين يتمتعون بسجلات نجاح حافلة في مشاريع كبرى لـ منظمات دولية وعالمية — مما يضمن تقديم معايير عالمية، وعمق استراتيجي، ورؤية شاملة لمختلف القطاعات لكل عميل نخدمه.'
          },
          {
            index: '03',
            title: 'تفكير إبداعي من الجيل القادم',
            desc: 'نمزج بين الإبداع اللامحدود والتكنولوجيا الذكية والاستراتيجيات القائمة على البيانات، لنصيغ تجارب علامات تجارية جريئة، ملهمة، ومصممة لتبقى.'
          },
          {
            index: '04',
            title: 'تأثير رقمي وواقعي',
            desc: 'نحن نجسر الفجوة بين العالم الرقمي والواقعي؛ حيث ندمج التسويق الرقمي مع الفعاليات على أرض الواقع لخلق حضور متكامل لعلامتك التجارية أينما وجد جمهورك.'
          },
          {
            index: '05',
            title: 'بناء متكامل للعلامة التجارية',
            desc: 'من تصميم الهوية وصناعة المحتوى إلى الحملات واسعة النطاق، نتولى إدارة كل طبقة من طبقات علامتك التجارية — لضمان الاستمرارية، والوضوح، والزخم في كل نقطة تواصل.'
          },
          {
            index: '06',
            title: 'محتوى يصنع التواصل',
            desc: 'سواء كان محتوىً أكاديمياً، تسويقياً، أو معرفياً — فقد صُمم محتوانا بعناية ليعلّم، ويجذب، ويحوّل الجمهور المستهدف إلى عملاء في اللحظة المناسبة تماماً.'
          },
          {
            index: '07',
            title: 'لقاء الاستراتيجية بالإبداع',
            desc: 'نجمع بين الرؤية الإبداعية والاستراتيجية القابلة للقياس، لضمان أن كل خطوة تخدم نموك وتحقق نتائج ملموسة يمكن تتبعها.'
          },
          {
            index: '08',
            title: 'صُممت لنمو مستدام',
            desc: 'نحن لا نلهث وراء الصيحات العابرة، بل نبني أسساً راسخة. يساعد منهجنا العلامات التجارية على النمو بثبات، والبروز بأصالة، والبقاء في الصدارة في سوق دائم التطور.'
          }
        ],
        coreValues: {
          title: 'ما يحركنا',
          items: [
            'إبداع مستدام',
            'صدق وشفافية',
            'تعلم مستمر',
            'تركيز على النتائج'
          ]
        }
      },
      process: {
        kicker: 'آلية العمل',
        title: 'كيف نبني الزخم',
        text: 'تعاون واضح من الفكرة الأولى حتى الإطلاق.',
        items: [
          {
            step: '01',
            title: 'نكتشف',
            text: 'نفهم عرضك، جمهورك، تموضعك، والهدف الذي تريد الوصول إليه.'
          },
          {
            step: '02',
            title: 'نصوغ',
            text: 'نبني الرسالة والاتجاه البصري وهيكل الحملة بطريقة متماسكة.'
          },
          {
            step: '03',
            title: 'نطلق',
            text: 'ننتج الأصول الإبداعية ونطلق المحتوى والإعلانات والحضور الاجتماعي.'
          },
          {
            step: '04',
            title: 'ننمي',
            text: 'نحسن الأداء ونوسع القنوات التي تثبت فعاليتها.'
          }
        ]
      },
      contact: {
        kicker: 'جاهز نبدأ؟',
        title: 'لنحوّل قصتك إلى حضور رقمي مؤثر.',
        subtitle: 'إذا كنت تبحث عن تسويق بصوت واضح، تصميم قوي، واستراتيجية مخصصة، فبراندورا جاهزة لبدء الرحلة.',
        cta: 'اتصل على براندورا الآن',
        phone: 'رقم التواصل',
        handles: 'المعرفات',
        handlesText: 'فيسبوك / إنستغرام / سناب: brandora.kas - إكس / تيك توك: Brandora_ksa'
      },
      footer: {
        note: 'براندورا - شركة إبداعية متكاملة من الجيل القادم',
        copyright: `حقوق النشر ${new Date().getFullYear()}. جميع الحقوق محفوظة.`
      }
    }
  };

  const t = content[lang];
  const isRtl = lang === 'ar';
  const supplementalContent = {
    en: {
      showcase: {
        title: 'Creative Excellence in Action',
        text: 'Where strategy meets creativity — delivering impactful brand experiences across digital and real-world channels.',
        items: [
          { title: 'Brand Identity Design', text: 'Modern visual systems' },
          { title: 'Digital Strategy', text: 'Data-driven campaigns' },
          { title: 'Content Creation', text: 'Stories that connect' },
        ],
      },
      impact: {
        title: 'Proven Impact',
        text: 'Numbers that reflect our commitment to your growth',
        stats: [
          { value: '50+', label: 'Projects Delivered' },
          { value: '3X', label: 'Average Growth' },
          { value: '95%', label: 'Client Satisfaction' },
          { value: '24/7', label: 'Support Available' },
        ],
      },
    },
    ar: {
      showcase: {
        title: 'التميز الإبداعي في العمل',
        text: 'حيث تلتقي الاستراتيجية بالإبداع — لتقديم تجارب علامة تجارية مؤثرة عبر القنوات الرقمية والواقعية.',
        items: [
          { title: 'تصميم الهوية البصرية', text: 'أنظمة بصرية حديثة' },
          { title: 'الاستراتيجية الرقمية', text: 'حملات مدعومة بالبيانات' },
          { title: 'صناعة المحتوى', text: 'قصص تصنع التواصل' },
        ],
      },
      impact: {
        title: 'تأثير مثبت',
        text: 'أرقام تعكس التزامنا بنموك',
        stats: [
          { value: '50+', label: 'مشروع منجز' },
          { value: '3X', label: 'متوسط النمو' },
          { value: '95%', label: 'رضا العملاء' },
          { value: '24/7', label: 'دعم متواصل' },
        ],
      },
    },
  }[lang];

  const serviceIcons = [
    digitalMarketingIcon,
    eventMarketingIcon,
    contentIcon,
    brandingIcon,
    aiIcon,
    strategyIcon,
  ];
  const showcaseIcons = [brandingIcon, digitalMarketingIcon, contentIcon];
  const photos = {
    hero: 'https://images.unsplash.com/photo-1772037441269-947195bb80f0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920',
    storyMain: 'https://images.unsplash.com/photo-1624555130581-1d9cca783bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    storySecondary: [
      'https://images.unsplash.com/photo-1777559542653-944182ce96db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
      'https://images.unsplash.com/photo-1726066012749-f81bf4422d4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
    ],
    showcase: [
      'https://images.unsplash.com/photo-1764204295508-37d89e699266?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1770368787880-7f6fa3488067?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
      'https://images.unsplash.com/photo-1762951566493-a275fc9f9f48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    ],
  };

  const navItems = [
    { href: '#top', label: t.nav.home },
    { href: '#services', label: t.nav.services },
    { href: '#story', label: t.nav.story },
    { href: '#vision', label: t.nav.vision },
    { href: '#why', label: t.nav.why },
    { href: '#contact', label: t.nav.contact },
  ];

  const cardAccents = [
    'border-cyan-200 bg-cyan-50/80 text-cyan-950',
    'border-amber-200 bg-amber-50/80 text-amber-950',
    'border-rose-200 bg-rose-50/80 text-rose-950',
    'border-emerald-200 bg-emerald-50/80 text-emerald-950',
    'border-indigo-200 bg-indigo-50/80 text-indigo-950',
    'border-slate-200 bg-white text-slate-950',
  ];

  const closeMobileMenu = () => setMobileMenuOpen(false);

  const SectionHeader = ({
    kicker,
    title,
    text,
    align = 'center',
  }: {
    kicker?: string;
    title: string;
    text?: string;
    align?: 'center' | 'start';
  }) => (
    <div className={align === 'center' ? 'mx-auto mb-12 max-w-3xl text-center' : 'mb-10 max-w-3xl'}>
      {kicker && (
        <p className="mb-3 text-sm font-bold uppercase text-cyan-700">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl font-black leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mt-5 text-base leading-8 text-slate-600 sm:text-lg">
          {text}
        </p>
      )}
    </div>
  );

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f6f8fb] text-slate-950 antialiased">
      <header className="fixed inset-x-0 top-0 z-50 px-3 py-2 sm:px-4">
        <div className="mx-auto flex h-16 max-w-[1328px] items-center justify-between rounded-[999px] border border-white/80 bg-[#f8fbfa]/95 px-4 shadow-[0_14px_34px_rgba(15,23,42,0.14)] backdrop-blur-xl sm:h-20 sm:px-5 lg:px-6">
          <a
            href="#top"
            className="inline-flex min-w-0 items-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#17377f]"
            onClick={closeMobileMenu}
          >
            <img
              src={brandoraLogo}
              alt="Brandora"
              width="206"
              height="50"
              className="h-10 w-auto max-w-[155px] object-contain sm:h-12 sm:max-w-[200px]"
              fetchPriority="high"
            />
          </a>

          <nav className="hidden items-center justify-center gap-1 rounded-full bg-white/45 px-3 py-2 xl:flex" aria-label="Main navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-2 text-sm font-bold text-slate-600 transition hover:bg-white hover:text-[#17377f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17377f] xl:px-4"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={toggleLang}
              className="rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-black text-slate-900 shadow-sm transition hover:border-[#17377f]/30 hover:text-[#17377f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17377f] sm:px-6 sm:py-3 sm:text-base"
              aria-label="Switch language"
            >
              {lang === 'en' ? 'العربية' : 'EN'}
            </button>
            <a
              href="#contact"
              className="hidden rounded-full bg-[#17377f] px-5 py-2.5 text-sm font-black text-white shadow-sm transition hover:bg-[#0f2a66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17377f] sm:inline-flex sm:px-6 sm:py-3 sm:text-base"
            >
              {t.nav.cta}
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#17377f] transition hover:border-[#17377f]/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17377f] xl:hidden"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              <span className="relative block h-5 w-5" aria-hidden="true">
                <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition ${mobileMenuOpen ? 'top-2 rotate-45' : 'top-1'}`} />
                <span className={`absolute left-0 top-2 h-0.5 w-5 rounded bg-current transition ${mobileMenuOpen ? 'opacity-0' : 'opacity-100'}`} />
                <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition ${mobileMenuOpen ? 'top-2 -rotate-45' : 'top-3'}`} />
              </span>
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-navigation" className="mx-auto mt-2 max-w-[1328px] rounded-[28px] border border-white/80 bg-[#f8fbfa]/95 p-3 shadow-[0_18px_45px_rgba(15,23,42,0.14)] backdrop-blur-xl xl:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className="rounded-full px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-white hover:text-[#17377f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17377f]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="mt-2 rounded-full bg-[#17377f] px-4 py-3 text-center text-sm font-black text-white transition hover:bg-[#0f2a66] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#17377f]"
              >
                {t.nav.cta}
              </a>
            </nav>
          </div>
        )}
      </header>

      <main>
        <section id="top" className="relative overflow-hidden bg-[#07111f] text-white">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.045)_1px,transparent_1px)] bg-[size:44px_44px]" aria-hidden="true" />

          <div className={`relative mx-auto grid min-h-[calc(100vh-1px)] max-w-7xl content-center gap-6 px-4 pb-3 pt-24 sm:px-6 sm:pb-4 sm:pt-28 lg:grid-cols-[minmax(0,1fr)_minmax(320px,400px)] lg:px-8 lg:pt-28 ${isRtl ? 'lg:grid-flow-dense' : ''}`}>
            <div className={`flex flex-col justify-center ${isRtl ? 'text-right lg:col-start-2' : 'text-left'}`}>
              <p className="mb-3 inline-flex w-fit rounded-lg border border-cyan-300/30 bg-cyan-300/10 px-3 py-1.5 text-xs font-bold text-cyan-100 sm:text-sm">
                {t.hero.badge}
              </p>
              <h1 className="max-w-4xl text-4xl font-black leading-none text-white sm:text-5xl lg:text-6xl xl:text-7xl">
                <span className="block">{t.hero.title1}</span>
                <span className="block text-cyan-300">{t.hero.title2}</span>
                <span className="block">{t.hero.title3}</span>
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-200 sm:text-base lg:max-w-xl">
                {t.hero.subtitle}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#contact"
                  className="inline-flex justify-center rounded-lg bg-cyan-400 px-5 py-2.5 text-sm font-black text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:text-base"
                >
                  {t.hero.primary}
                </a>
                <a
                  href="#services"
                  className="inline-flex justify-center rounded-lg border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-black text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:text-base"
                >
                  {t.hero.secondary}
                </a>
              </div>
            </div>

            <div className={`relative ${isRtl ? 'lg:col-start-1' : ''}`} aria-label="Brandora story animation">
              <div className="overflow-hidden rounded-[28px] border border-white/15 bg-white/[0.08] p-3 shadow-2xl shadow-black/25 backdrop-blur-xl sm:p-4">
                <img
                  src={brandoraStoryGif}
                  alt="Brandora story animation"
                  width="720"
                  height="720"
                  className="aspect-square max-h-[360px] w-full rounded-[22px] bg-white object-cover sm:max-h-[420px] lg:max-h-[460px]"
                  fetchPriority="high"
                />
              </div>
            </div>

            <div className="relative col-span-full overflow-hidden border-y border-white/10 bg-white/5 py-3">
              <div className="flex animate-marquee gap-8 whitespace-nowrap">
                {[...t.hero.marquee, ...t.hero.marquee].map((item, index) => (
                  <span key={`${item}-${index}`} className="inline-flex items-center gap-3 text-xs font-bold text-slate-200 sm:text-sm">
                    {item}
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden="true" />
                  </span>
                ))}
              </div>
            </div>
          </div>

        </section>

        <section id="services" className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader kicker={t.services.kicker} title={t.services.title} text={t.services.subtitle} />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {t.services.items.map((item, index) => (
                <article key={item.title} className={`rounded-lg border p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl ${cardAccents[index]}`}>
                  <div className="mb-6 flex items-center justify-between gap-4">
                    <span className="flex h-14 w-14 items-center justify-center rounded-lg bg-white shadow-sm">
                      <img
                        src={serviceIcons[index]}
                        alt={`${item.title} icon`}
                        width="38"
                        height="38"
                        className="h-10 w-10 object-contain"
                        loading="lazy"
                      />
                    </span>
                    <span className="text-sm font-black text-slate-500">{item.number}</span>
                  </div>
                  <h3 className="text-xl font-black leading-7 text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-700">{item.desc}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="story" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className={`mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)] lg:px-8 ${isRtl ? 'lg:grid-flow-dense' : ''}`}>
            <div className={isRtl ? 'text-right lg:col-start-2' : 'text-left'}>
              <SectionHeader kicker={t.story.kicker} title={t.story.title} align="start" />
              <div className="space-y-5 text-base leading-8 text-slate-700 sm:text-lg">
                <p>{t.story.p1}</p>
                <p>{t.story.p2}</p>
              </div>
              <blockquote className={`mt-8 rounded-lg border-cyan-500 bg-cyan-50 p-5 text-lg font-black text-slate-950 ${isRtl ? 'border-r-4' : 'border-l-4'}`}>
                {t.story.quote}
              </blockquote>
            </div>

            <div className={isRtl ? 'lg:col-start-1' : ''}>
              <div className="rounded-lg border border-slate-200 bg-[#07111f] p-4 text-white shadow-xl sm:p-5">
                <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <img
                    src={photos.storyMain}
                    alt="Creative team collaboration"
                    width="1080"
                    height="810"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/25 to-transparent" aria-hidden="true" />
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-sm font-black text-cyan-200">{t.story.visualTag}</p>
                    <p className="mt-2 text-2xl font-black leading-9 text-white">{t.story.visualText}</p>
                  </div>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-4">
                  {photos.storySecondary.map((photo, index) => (
                    <img
                      key={photo}
                      src={photo}
                      alt={index === 0 ? 'Social media content creation' : 'Digital marketing workspace'}
                      width="600"
                      height="600"
                      className="aspect-square rounded-lg object-cover"
                      loading="lazy"
                    />
                  ))}
                </div>
                <div className="mt-5 grid gap-4">
                  {t.story.pillars.map((pillar, index) => (
                    <article key={pillar.title} className="rounded-lg border border-white/10 bg-white/[0.08] p-5">
                      <div className="mb-3 flex items-center gap-3">
                        <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-300 text-sm font-black text-slate-950">{index + 1}</span>
                        <h3 className="text-lg font-black text-white">{pillar.title}</h3>
                      </div>
                      <p className="text-sm leading-6 text-slate-200">{pillar.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="vision" className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader kicker={t.vision.kicker} title={t.vision.title} />
            <div className="grid gap-5 lg:grid-cols-2">
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="mb-4 text-sm font-black text-cyan-700">{t.vision.vision.title}</p>
                <p className="text-base leading-8 text-slate-700 sm:text-lg">{t.vision.vision.text}</p>
              </article>
              <article className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
                <p className="mb-4 text-sm font-black text-amber-700">{t.vision.mission.title}</p>
                <p className="text-base leading-8 text-slate-700 sm:text-lg">{t.vision.mission.text}</p>
              </article>
            </div>
            <div className="mt-5 rounded-lg border border-slate-200 bg-slate-950 p-6 text-white shadow-sm sm:p-8">
              <h3 className="text-2xl font-black">{t.vision.values.title}</h3>
              <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {t.vision.values.items.map((value) => (
                  <div key={value} className="rounded-lg border border-white/10 bg-white/[0.08] p-4 text-sm font-bold text-slate-100">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why" className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader kicker={t.why.kicker} title={t.why.title} text={t.why.subtitle} />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {t.why.items.map((item) => (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg">
                  <span className="mb-4 inline-flex rounded-lg bg-cyan-50 px-3 py-2 text-xs font-black text-cyan-800">{item.index}</span>
                  <h3 className="text-lg font-black leading-7 text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
                </article>
              ))}
            </div>
            <div className="mt-8 rounded-lg border border-emerald-200 bg-emerald-50 p-6">
              <h3 className="text-xl font-black text-slate-950">{t.why.coreValues.title}</h3>
              <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {t.why.coreValues.items.map((value) => (
                  <div key={value} className="rounded-lg bg-white p-4 text-sm font-bold text-slate-800 shadow-sm">
                    {value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader title={supplementalContent.showcase.title} text={supplementalContent.showcase.text} />
            <div className="grid gap-5 md:grid-cols-3">
              {supplementalContent.showcase.items.map((item, index) => (
                <article key={item.title} className="group overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={photos.showcase[index]}
                      alt={`${item.title} showcase`}
                      width="800"
                      height="600"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent" aria-hidden="true" />
                    <span className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-lg bg-white shadow-sm">
                      <img
                        src={showcaseIcons[index]}
                        alt=""
                        width="34"
                        height="34"
                        className="h-9 w-9 object-contain"
                        loading="lazy"
                        aria-hidden="true"
                      />
                    </span>
                    <div className="absolute inset-x-0 bottom-0 p-5">
                      <h3 className="text-xl font-black text-white">{item.title}</h3>
                      <p className="mt-2 text-sm font-semibold leading-7 text-slate-200">{item.text}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader title={supplementalContent.impact.title} text={supplementalContent.impact.text} />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {supplementalContent.impact.stats.map((stat) => (
                <article key={`${stat.value}-${stat.label}`} className="rounded-lg border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
                  <p className="text-4xl font-black text-cyan-700 sm:text-5xl">{stat.value}</p>
                  <p className="mt-3 text-sm font-black text-slate-700">{stat.label}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionHeader kicker={t.process.kicker} title={t.process.title} text={t.process.text} />
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {t.process.items.map((item) => (
                <article key={item.title} className="rounded-lg border border-slate-200 bg-white p-6 shadow-sm">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-slate-950 text-sm font-black text-white">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-black text-slate-950">{item.title}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#07111f] py-16 text-white sm:py-20 lg:py-24">
          <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
            <p className="mb-4 text-sm font-black uppercase text-cyan-300">{t.contact.kicker}</p>
            <h2 className="mx-auto max-w-4xl text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mx-auto mt-5 max-w-3xl text-base leading-8 text-slate-200 sm:text-lg">
              {t.contact.subtitle}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="tel:+966574636463"
                className="inline-flex w-full justify-center rounded-lg bg-cyan-400 px-6 py-3 text-base font-black text-slate-950 transition hover:bg-cyan-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:w-auto"
              >
                {t.contact.cta}
              </a>
              <a
                href="tel:+966574636463"
                className="inline-flex w-full justify-center rounded-lg border border-white/15 bg-white/5 px-6 py-3 text-base font-black text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300 sm:w-auto"
              >
                +966 57 463 6463
              </a>
            </div>

            <div className={`mt-10 grid gap-5 sm:grid-cols-2 ${isRtl ? 'text-right' : 'text-left'}`}>
              <div className="rounded-lg border border-white/10 bg-white/[0.08] p-5">
                <p className="text-sm font-black text-cyan-300">{t.contact.phone}</p>
                <a href="tel:+966574636463" className="mt-2 inline-flex text-lg font-black text-white hover:text-cyan-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300">
                  +966 57 463 6463
                </a>
              </div>
              <div className="rounded-lg border border-white/10 bg-white/[0.08] p-5">
                <p className="text-sm font-black text-cyan-300">{t.contact.handles}</p>
                <p className="mt-2 text-sm leading-7 text-slate-200">{t.contact.handlesText}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    { label: 'Instagram', href: 'https://instagram.com/brandora.kas' },
                    { label: 'Facebook', href: 'https://facebook.com/brandora.kas' },
                    { label: 'X', href: 'https://twitter.com/Brandora_ksa' },
                    { label: 'Snapchat', href: 'https://snapchat.com/add/brandora.kas' },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-lg border border-white/10 px-3 py-2 text-xs font-bold text-white transition hover:bg-white/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300"
                    >
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-white py-8">
        <div className={`mx-auto flex max-w-7xl flex-col gap-5 px-4 text-center sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8 ${isRtl ? 'lg:text-right' : 'lg:text-left'}`}>
          <div className="flex flex-col items-center gap-3 lg:flex-row">
            <img src={brandoraLogo} alt="Brandora" width="164" height="40" className="h-10 w-auto object-contain" loading="lazy" />
            <p className="text-sm font-semibold text-slate-600">{t.footer.note}</p>
          </div>
          <div className="space-y-2 text-sm text-slate-500">
            <p>{t.footer.copyright}</p>
            <p>
              <a
                href="https://www.flaticon.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-slate-600 underline-offset-4 hover:text-cyan-700 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-500"
              >
                Icons designed by Freepik from Flaticon
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
