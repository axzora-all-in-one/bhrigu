import React, { useEffect, useState, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { 
  ChevronDown, 
  Play, 
  CheckCircle, 
  ArrowRight, 
  Users, 
  Shield, 
  Zap, 
  Database, 
  Settings, 
  Award,
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  Building,
  Globe,
  Clock,
  Star,
  Bookmark,
  FileText,
  Video,
  Download,
  Search,
  Filter,
  Calendar,
  Target,
  TrendingUp,
  Cpu,
  Cloud,
  Lock,
  Code,
  BarChart3,
  Workflow,
  Layers,
  Network,
  Server,
  Brain,
  Activity,
  Gauge,
  Microscope,
  Factory,
  Pill,
  Utensils,
  Dna,
  Beaker,
  FlaskConical,
  TestTube,
  Atom,
  Leaf,
  ChevronRight,
  Home,
  Info,
  Briefcase,
  Lightbulb,
  BookOpen,
  MessageCircle,
  Sparkles,
  Rocket,
  Coffee,
  Heart,
  Headphones,
  Monitor,
  Smartphone,
  Tablet,
  Wifi,
  Battery,
  Bluetooth,
  Camera,
  Mic,
  Speaker,
  Printer,
  HardDrive,
  Laptop,
  Mouse,
  Keyboard,
  Gamepad2,
  Webcam,
  Headset,
  Router,
  Usb,
  Hdmi,
  Ethernet,
  Fingerprint,
  FaceId,
  Scan,
  QrCode,
  Barcode,
  CreditCard,
  Wallet,
  ShoppingCart,
  Package,
  Truck,
  Plane,
  Ship,
  Car,
  Bike,
  Bus,
  Train,
  Subway,
  Taxi,
  Fuel,
  Navigation,
  Map,
  Compass,
  Route,
  Flag,
  Landmark,
  Mountain,
  Trees,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Flame,
  Snowflake,
  Umbrella,
  Glasses,
  Watch,
  Shirt,
  Crown,
  Gem,
  Ring,
  Necklace,
  Footprints,
  Shoe,
  Sock,
  Hat,
  Glove,
  Scarf,
  Bag,
  Backpack,
  Briefcase2,
  Suitcase,
  Handbag,
  ShoppingBag,
  Gift,
  Cake,
  Cookie,
  Donut,
  Pizza,
  Sandwich,
  Soup,
  Salad,
  IceCream,
  Candy,
  Chocolate,
  Grape,
  Apple,
  Banana,
  Orange,
  Strawberry,
  Cherry,
  Peach,
  Pear,
  Pineapple,
  Watermelon,
  Lemon,
  Lime,
  Coconut,
  Avocado,
  Carrot,
  Corn,
  Potato,
  Tomato,
  Pepper,
  Onion,
  Garlic,
  Mushroom,
  Broccoli,
  Lettuce,
  Spinach,
  Celery,
  Cucumber,
  Radish,
  Turnip,
  Beet,
  Cabbage,
  Kale,
  Chard,
  Parsley,
  Cilantro,
  Basil,
  Oregano,
  Thyme,
  Rosemary,
  Sage,
  Mint,
  Lavender,
  Rose,
  Tulip,
  Daisy,
  Sunflower,
  Hibiscus,
  Orchid,
  Lily,
  Lotus,
  Jasmine,
  Violet,
  Pansy,
  Poppy,
  Iris,
  Daffodil,
  Marigold,
  Carnation,
  Chrysanthemum,
  Peony,
  Magnolia,
  Azalea,
  Rhododendron,
  Gardenia,
  Begonia,
  Impatiens,
  Petunia,
  Snapdragon,
  Zinnia,
  Cosmos,
  Aster,
  Dahlia,
  Gladiolus,
  Hyacinth,
  Freesia,
  Anemone,
  Ranunculus,
  Delphinium,
  Foxglove,
  Hollyhock,
  Larkspur,
  Lupin,
  Phlox,
  Salvia,
  Verbena,
  Vinca,
  Dianthus,
  Geranium,
  Nasturtium,
  Calendula,
  Alyssum,
  Lobelia,
  Primrose,
  Cyclamen,
  Fuchsia,
  Bougainvillea,
  Camellia,
  Wisteria,
  Honeysuckle,
  Clematis,
  Passionflower,
  Jasmine2,
  Bougainvillea2,
  Hibiscus2,
  Plumeria,
  Gardenia2,
  Magnolia2,
  Azalea2,
  Rhododendron2,
  Camellia2,
  Wisteria2,
  Honeysuckle2,
  Clematis2,
  Passionflower2,
  MonitorSpeaker,
  Headphones2,
  Mic2,
  Speaker2,
  MicVocal,
  Radio,
  Cassette,
  Cd,
  Vinyl,
  Turntable,
  Boombox,
  Walkman,
  Ipod,
  Mp3Player,
  Spotify,
  SoundCloud,
  Youtube,
  Netflix,
  Hulu,
  Disney,
  AppleTv,
  Roku,
  Chromecast,
  FireTv,
  AndroidTv,
  SmartTv,
  Projector,
  Screen,
  Theater,
  Cinema,
  Popcorn,
  Ticket,
  Clapper,
  Film,
  Video2,
  Camera2,
  Lens,
  Flash,
  Tripod,
  Drone,
  Binoculars,
  Telescope,
  Microscope2,
  Magnifier,
  Ruler,
  Compass2,
  Protractor,
  Calculator,
  Abacus,
  Pencil,
  Pen,
  Marker,
  Highlighter,
  Eraser,
  Sharpener,
  Stapler,
  PaperClip,
  Pushpin,
  Scissors,
  Glue,
  Tape,
  Hole,
  Folder,
  File,
  Clipboard,
  Notebook,
  Journal,
  Diary,
  Planner,
  Calendar2,
  Clock2,
  Timer,
  Stopwatch,
  Alarm,
  Hourglass,
  Sundial,
  Metronome,
  Tuner,
  Metronome2,
  Piano,
  Guitar,
  Violin,
  Drums,
  Trumpet,
  Saxophone,
  Flute,
  Clarinet,
  Oboe,
  Bassoon,
  Harp,
  Banjo,
  Mandolin,
  Ukulele,
  Accordion,
  Harmonica,
  Xylophone,
  Marimba,
  Vibraphone,
  Timpani,
  Cymbals,
  Triangle,
  Tambourine,
  Shaker,
  Maracas,
  Cowbell,
  Woodblock,
  Claves,
  Castanets,
  Whip,
  Slapstick,
  Ratchet,
  Flexatone,
  Vibraslap,
  Thundersheet,
  Rainmaker,
  Oceandrum,
  Windchimes,
  Bellset,
  Handbell,
  Sleighbell,
  Agogo,
  Crotales,
  Fingerbell,
  Deskbell,
  Cowbell2,
  Gong,
  Tubularbells,
  Chimes,
  Celesta,
  Glockenspiel,
  Metallophone,
  Balafon,
  Gamelan,
  Steelpan,
  Washboard,
  Spoons,
  Jawsharp,
  Kalimba,
  Musicbox,
  Hurdy,
  Concertina,
  Melodica,
  Keytar,
  Synthesizer,
  Sampler,
  Drum,
  Sequencer,
  Mixer,
  Amplifier,
  Effects,
  Pedalboard,
  Tuner2,
  Metronome3,
  Musicstand,
  Sheetmusic,
  Clef,
  Note,
  Rest,
  Sharp,
  Flat,
  Natural,
  Timesignature,
  Keysignature,
  Barline,
  Measure,
  Staff,
  Ledger,
  Beam,
  Stem,
  Flag,
  Tie,
  Slur,
  Accent,
  Staccato,
  Tenuto,
  Fermata,
  Trill,
  Mordent,
  Turn,
  Appoggiatura,
  Acciaccatura,
  Glissando,
  Portamento,
  Vibrato,
  Tremolo,
  Crescendo,
  Diminuendo,
  Forte,
  Piano2,
  Pianissimo,
  Fortissimo,
  Sforzando,
  Pizzicato,
  Arco,
  Mute,
  Damper,
  Sostenuto,
  Una,
  Coda,
  Segno,
  Repeat,
  Volta,
  Cadenza,
  Rubato,
  Ritardando,
  Accelerando,
  Andante,
  Allegro,
  Presto,
  Largo,
  Adagio,
  Moderato,
  Vivace,
  Maestoso,
  Dolce,
  Espressivo,
  Cantabile,
  Legato,
  Staccato2,
  Marcato,
  Tenuto2,
  Accent2,
  Sforzando2,
  Crescendo2,
  Diminuendo2,
  Forte2,
  Piano3,
  Pianissimo2,
  Fortissimo2,
  Mezzo,
  Subito,
  Sempre,
  Poco,
  Molto,
  Piu,
  Meno,
  Assai,
  Troppo,
  Senza,
  Con,
  E,
  Ma,
  Non,
  Quasi,
  Come,
  Simile,
  Primo,
  Secondo,
  Solo,
  Tutti,
  Divisi,
  Unison,
  Octave,
  Fifth,
  Fourth,
  Third,
  Second,
  Seventh,
  Sixth,
  Ninth,
  Eleventh,
  Thirteenth,
  Compound,
  Perfect,
  Major,
  Minor,
  Augmented,
  Diminished,
  Suspended,
  Added,
  Dominant,
  Subdominant,
  Tonic,
  Supertonic,
  Mediant,
  Submediant,
  Leading,
  Raised,
  Lowered,
  Chromatic,
  Diatonic,
  Pentatonic,
  Blues,
  Wholetone,
  Octatonic,
  Hexatonic,
  Heptatonic,
  Dorian,
  Phrygian,
  Lydian,
  Mixolydian,
  Aeolian,
  Locrian,
  Ionian,
  Acoustic,
  Altered,
  Bebop,
  Enigmatic,
  Gypsy,
  Half,
  Harmonic,
  Hungarian,
  Japanese,
  Neapolitan,
  Persian,
  Prometheus,
  Ukrainian,
  Arabic,
  Byzantine,
  Chinese,
  Egyptian,
  Ethiopian,
  Flamenco,
  Gregorian,
  Hebrew,
  Indian,
  Irish,
  Jewish,
  Korean,
  Latin,
  Middle,
  Native,
  Russian,
  Scottish,
  Spanish,
  Thai,
  Turkish,
  Welsh,
  African,
  Appalachian,
  Balkan,
  Celtic,
  Eastern,
  European,
  Folk,
  Gospel,
  Jazz,
  Modal,
  Pentatonic2,
  Ragtime,
  Spiritual,
  Traditional,
  Western,
  World,
  Contemporary,
  Modern,
  Postmodern,
  Atonal,
  Twelve,
  Serial,
  Minimalist,
  Spectral,
  Microtonal,
  Quartertone,
  Just,
  Equal,
  Meantone,
  Pythagorean,
  Well,
  Temperament,
  Intonation,
  Tuning,
  Pitch,
  Frequency,
  Hertz,
  Decibel,
  Amplitude,
  Waveform,
  Sine,
  Cosine,
  Square,
  Sawtooth,
  Triangle2,
  Pulse,
  Noise,
  White,
  Pink,
  Brown,
  Blue,
  Violet,
  Gray,
  Digital,
  Analog,
  Mono,
  Stereo,
  Surround,
  Binaural,
  Spatial,
  Ambisonic,
  Holophonic,
  Psychoacoustic,
  Masking,
  Beating,
  Doppler,
  Resonance,
  Reverb,
  Echo,
  Delay,
  Chorus,
  Flanger,
  Phaser,
  Distortion,
  Overdrive,
  Fuzz,
  Compression,
  Limiter,
  Gate,
  Expander,
  Equalizer,
  Filter,
  Highpass,
  Lowpass,
  Bandpass,
  Bandstop,
  Allpass,
  Comb,
  Notch,
  Peak,
  Shelf,
  Parametric,
  Graphic,
  Dynamic,
  Multiband,
  Crossover,
  Phantom,
  Condenser,
  Dynamic2,
  Ribbon,
  Cardioid,
  Omnidirectional,
  Bidirectional,
  Shotgun,
  Lavalier,
  Handheld,
  Boom,
  Windscreen,
  Popfilter,
  Shockmount,
  Stand,
  Boom2,
  Arm,
  Clamp,
  Adapter,
  Cable,
  Xlr,
  Trs,
  Ts,
  Rca,
  Speakon,
  Banana,
  Binding,
  Alligator,
  Crocodile,
  Patch,
  Insert,
  Send,
  Return,
  Aux,
  Master,
  Monitor,
  Headphone,
  Line,
  Instrument,
  Microphone,
  Phantom2,
  Pad,
  Gain,
  Trim,
  Volume,
  Balance,
  Pan,
  Mute2,
  Solo,
  Pfl,
  Afl,
  Cue,
  Talkback,
  Slate,
  Oscillator,
  Generator,
  Noise2,
  Tone,
  Sweep,
  Burst,
  Impulse,
  Step,
  Ramp,
  Exponential,
  Logarithmic,
  Linear,
  Curve,
  Envelope,
  Attack,
  Decay,
  Sustain,
  Release,
  Adsr,
  Modulation,
  Lfo,
  Vibrato2,
  Tremolo2,
  Chorus2,
  Flanger2,
  Phaser2,
  Ringmod,
  Amplitude2,
  Frequency2,
  Phase,
  Sync,
  Free,
  Retrigger,
  Legato2,
  Unison2,
  Detune,
  Spread,
  Voices,
  Layers2,
  Split,
  Crossfade,
  Morph,
  Interpolate,
  Granular,
  Stretch,
  Pitch2,
  Timestretch,
  Formant,
  Vocoder,
  Talkbox,
  Autotune,
  Harmony,
  Doubling,
  Unison3,
  Octave2,
  Fifth2,
  Fourth2,
  Third2,
  Seventh2,
  Ninth2,
  Eleventh2,
  Thirteenth2,
  Add,
  Sus,
  Dim,
  Aug,
  Maj,
  Min,
  Dom,
  Half2,
  Whole,
  Quartal,
  Quintal,
  Cluster,
  Polychord,
  Polyrhythm,
  Polymeter,
  Hemiola,
  Syncopation,
  Offbeat,
  Backbeat,
  Downbeat,
  Upbeat,
  Anacrusis,
  Pickup,
  Tie2,
  Slur2,
  Phrase,
  Motif,
  Theme,
  Variation,
  Development,
  Recapitulation,
  Exposition,
  Coda2,
  Cadence,
  Authentic,
  Plagal,
  Deceptive,
  Half3,
  Phrygian2,
  Neapolitan2,
  Augmented2,
  Tritone,
  Diminished2,
  Resolution,
  Preparation,
  Suspension,
  Anticipation,
  Escape,
  Neighbor,
  Passing,
  Auxiliary,
  Cambiata,
  Echappee,
  Appoggiatura2,
  Acciaccatura2,
  Mordent2,
  Turn2,
  Trill2,
  Glissando2,
  Portamento2,
  Slide,
  Bend,
  Vibrato3,
  Tremolo3,
  Flutter,
  Growl,
  Subtone,
  Multiphonic,
  Circular,
  Breathing,
  Tonguing,
  Slap,
  Pop,
  Hammer,
  Pull,
  Tap,
  Sweep2,
  Alternate,
  Economy,
  Hybrid,
  Fingerpicking,
  Flatpicking,
  Strumming,
  Arpeggiation,
  Broken,
  Alberti,
  Waltz,
  Stride,
  Boogie,
  Ragtime2,
  Swing,
  Straight,
  Shuffle,
  Latin2,
  Afro,
  Polyrhythm2,
  Ostinato,
  Riff,
  Lick,
  Fill,
  Chops,
  Groove,
  Pocket,
  Feel,
  Swing2,
  Shuffle2,
  Latin3,
  Funk,
  Rock,
  Pop,
  Country,
  Blues2,
  Jazz2,
  Classical,
  Baroque,
  Romantic,
  Impressionist,
  Modernist,
  Contemporary2,
  Avant,
  Experimental,
  Electronic,
  Ambient,
  Drone,
  Noise3,
  Industrial,
  Techno,
  House,
  Trance,
  Dubstep,
  Drum2,
  Bass,
  Breakbeat,
  Jungle,
  Garage,
  Hardcore,
  Gabber,
  Speedcore,
  Terrorcore,
  Extratone,
  Breakcore,
  Idm,
  Glitch,
  Microsound,
  Lowercase,
  Onkyo,
  Eai,
  Musique,
  Concrete,
  Electroacoustic,
  Acousmatic,
  Soundscape,
  Soundart,
  Installation,
  Performance,
  Improvisation,
  Aleatoric,
  Indeterminate,
  Graphic,
  Proportional,
  Tablature,
  Chord,
  Lead,
  Rhythm,
  Melody,
  Harmony2,
  Counterpoint,
  Polyphony,
  Homophony,
  Monophony,
  Heterophony,
  Antiphony,
  Responsorial,
  Call,
  Response,
  Question,
  Answer,
  Statement,
  Counterstatement,
  Imitation,
  Canon,
  Fugue,
  Invention,
  Prelude,
  Toccata,
  Fantasia,
  Capriccio,
  Rhapsody,
  Ballade,
  Barcarolle,
  Berceuse,
  Etude,
  Nocturne,
  Intermezzo,
  Moment,
  Musical,
  Impromptu,
  Mazurka,
  Polonaise,
  Waltz2,
  Minuet,
  Gavotte,
  Bourree,
  Gigue,
  Sarabande,
  Allemande,
  Courante,
  Chaconne,
  Passacaglia,
  Ground,
  Variations,
  Rondo,
  Sonata,
  Sonatina,
  Concerto,
  Concertino,
  Symphony,
  Sinfonia,
  Overture,
  Prelude2,
  Postlude,
  Interlude,
  Entr,
  Acte,
  Incidental,
  Suite,
  Partita,
  Divertimento,
  Serenade,
  Cassation,
  Notturno,
  Aubade,
  Pastorale,
  Sicilienne,
  Tarantella,
  Bolero,
  Fandango,
  Malaguena,
  Seguidilla,
  Jota,
  Sardana,
  Muineira,
  Alalá,
  Copla,
  Fado,
  Flamenco2,
  Tango,
  Milonga,
  Chacarera,
  Zamba,
  Cueca,
  Marinera,
  Huayno,
  Yaraví,
  Festejo,
  Landó,
  Vals,
  Criollo,
  Joropo,
  Merengue,
  Bachata,
  Salsa,
  Mambo,
  Cha,
  Rumba,
  Conga,
  Samba,
  Bossa,
  Nova,
  Choro,
  Forró,
  Baião,
  Xote,
  Frevo,
  Maracatu,
  Axé,
  Pagode,
  Funk2,
  Rap,
  Hip,
  Hop,
  Trap,
  Drill,
  Grime,
  Uk,
  Garage2,
  Bassline,
  Speed,
  Hardcore2,
  Gabber2,
  Terror,
  Speedcore2,
  Breakcore2,
  Jungle2,
  Dnb,
  Dubstep2,
  Brostep,
  Riddim,
  Future,
  Trap2,
  Wave,
  Chill,
  Lo,
  Fi,
  Vaporwave,
  Synthwave,
  Retrowave,
  Darkwave,
  Coldwave,
  Minimal,
  Deep,
  Progressive,
  Psytrance,
  Goa,
  Uplifting,
  Vocal,
  Eurodance,
  Italo,
  Disco,
  Nu,
  French,
  Filter,
  Electro,
  Freestyle,
  Miami,
  Detroit,
  Chicago,
  Acid,
  Tribal,
  Afro2,
  Latin4,
  Disco2,
  Funk3,
  Soul,
  Rnb,
  Neo,
  Contemporary3,
  Smooth,
  Quiet,
  Storm,
  Fusion,
  Bebop2,
  Cool,
  Hard,
  Bop,
  Post,
  Free2,
  Avant2,
  Garde,
  Third,
  Stream,
  Ecm,
  Nordic,
  European2,
  British,
  Trad,
  Skiffle,
  Merseybeat,
  Invasion,
  Psychedelic,
  Garage3,
  Punk,
  New,
  Post2,
  Alternative,
  Indie,
  Shoegaze,
  Britpop,
  Madchester,
  Baggy,
  Emo,
  Screamo,
  Hardcore3,
  Metalcore,
  Deathcore,
  Mathcore,
  Grindcore,
  Powerviolence,
  Crust,
  Sludge,
  Doom,
  Stoner,
  Desert,
  Psych,
  Kraut,
  Motorik,
  Kosmische,
  Neue,
  Deutsche,
  Welle,
  Darkwave2,
  Coldwave2,
  Minimal2,
  Electro2,
  Body,
  Futurepop,
  Aggrotech,
  Harsh,
  Rhythmic,
  Martial,
  Neofolk,
  Apocalyptic,
  Ethereal,
  Neoclassical,
  Ambient2,
  Drone2,
  Dark3,
  Doom2,
  Black,
  Death,
  Thrash,
  Speed2,
  Power,
  Progressive2,
  Symphonic,
  Folk2,
  Viking,
  Pagan,
  Unblack,
  Depressive,
  Atmospheric,
  Post3,
  Shoegaze2,
  Blackgaze,
  Dsbm,
  Nsbm,
  Raw,
  Lo2,
  Trve,
  Cvlt,
  Br00tal,
  Djent,
  Thall,
  Meshuggah,
  Periphery,
  Animals,
  Leaders,
  Tesseract,
  Haken,
  Leprous,
  Plini,
  Intervals,
  Polyphia,
  Chon,
  Covet,
  Ttng,
  Elephant,
  Gym,
  Class,
  Mylets,
  Ichika,
  Nito,
  Manuel,
  Gardner,
  Fernandes,
  Owane,
  Jakub,
  Zytecki,
  David,
  Maxim,
  Aaron,
  Marshall,
  Tim,
  Henson,
  Scott,
  Lepage,
  Clay,
  Gober,
  Nick,
  Johnston,
  Erick,
  Hansel,
  Jason,
  Richardson,
  Mario,
  Camarena,
  Javier,
  Reyes,
  Brandon,
  Ewing,
  Donovan,
  Melero,
  Dug,
  Pinnick,
  Ty,
  Tabor,
  Jerry,
  Gaskill,
  Kings,
  Lenny,
  Kravitz,
  John,
  Mayer,
  Eric,
  Clapton,
  Jimi,
  Hendrix,
  Stevie,
  Ray,
  Vaughan,
  Joe,
  Satriani,
  Steve,
  Vai,
  Yngwie,
  Malmsteen,
  Paul,
  Gilbert,
  Marty,
  Friedman,
  Jason,
  Becker,
  Richie,
  Kotzen,
  Nuno,
  Bettencourt,
  George,
  Lynch,
  Warren,
  Dimartini,
  Jake,
  Lee,
  Mick,
  Mars,
  Ace,
  Frehley,
  Angus,
  Young,
  Malcolm,
  Brian,
  May,
  Jimmy,
  Page,
  Ritchie,
  Blackmore,
  Tony,
  Iommi,
  Randy,
  Rhoads,
  Zakk,
  Wylde,
  Dimebag,
  Darrell,
  Kirk,
  Hammett,
  James,
  Hetfield,
  Dave,
  Mustaine,
  Marty2,
  Friedman2,
  Jason2,
  Becker2,
  Paul2,
  Gilbert2,
  Richie2,
  Kotzen2,
  Nuno2,
  Bettencourt2,
  George2,
  Lynch2,
  Warren2,
  Dimartini2,
  Jake2,
  Lee2,
  Mick2,
  Mars2,
  Ace2,
  Frehley2,
  Angus2,
  Young2,
  Malcolm2,
  Brian2,
  May2,
  Jimmy2,
  Page2,
  Ritchie2,
  Blackmore2,
  Tony2,
  Iommi2,
  Randy2,
  Rhoads2,
  Zakk2,
  Wylde2,
  Dimebag2,
  Darrell2,
  Kirk2,
  Hammett2,
  James2,
  Hetfield2,
  Dave2,
  Mustaine2
} from 'lucide-react';
import './App.css';

// Import components
import HeroSection from './components/HeroSection';

// Import page components
import SolutionsPage from './pages/SolutionsPage';
import IndustriesPage from './pages/IndustriesPage';
import TechnologyPage from './pages/TechnologyPage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ResourcesPage from './pages/ResourcesPage';
import ContactPage from './pages/ContactPage';

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const AnimatedSection = ({ children, className = "" }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: true });
  
  return (
    <motion.div
      ref={ref}
      initial="initial"
      animate={inView ? "animate" : "initial"}
      variants={fadeInUp}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const NavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Solutions', path: '/solutions', icon: Settings },
    { name: 'Industries', path: '/industries', icon: Building },
    { name: 'Technology', path: '/technology', icon: Cpu },
    { name: 'About', path: '/about', icon: Info },
    { name: 'Products', path: '/products', icon: Briefcase },
    { name: 'Resources', path: '/resources', icon: BookOpen },
    { name: 'Contact', path: '/contact', icon: MessageCircle }
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <motion.a 
              href="/"
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Bhrigu.tech
              </span>
            </motion.a>
          </div>
          
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.path}
                  whileHover={{ scale: 1.05 }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-blue-600' 
                      : 'text-white hover:text-cyan-400'
                  }`}
                >
                  <item.icon size={16} />
                  {item.name}
                </motion.a>
              ))}
            </div>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`transition-colors ${
                isScrolled 
                  ? 'text-gray-700 hover:text-blue-600' 
                  : 'text-white hover:text-cyan-400'
              }`}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-white/95 backdrop-blur-md shadow-lg"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.path}
                className="text-gray-700 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <item.icon size={16} />
                {item.name}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-slate-900 to-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Bhrigu.tech
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Engineering Intelligence. Empowering Compliance.
            </p>
            <p className="text-gray-400">
              Redefining regulated manufacturing through Industry 4.0/5.0 innovation.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/solutions" className="hover:text-white transition-colors">BhriguOne Platform</a></li>
              <li><a href="/solutions" className="hover:text-white transition-colors">AI Analytics</a></li>
              <li><a href="/solutions" className="hover:text-white transition-colors">IoT Integration</a></li>
              <li><a href="/solutions" className="hover:text-white transition-colors">Compliance Automation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Industries</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/industries" className="hover:text-white transition-colors">Pharmaceuticals</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Medical Devices</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Food & Beverage</a></li>
              <li><a href="/industries" className="hover:text-white transition-colors">Biotech</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="/resources" className="hover:text-white transition-colors">Resources</a></li>
              <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="/products" className="hover:text-white transition-colors">Products</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Bhrigu.tech. All rights reserved. | Privacy Policy | Terms of Service</p>
        </div>
      </div>
    </footer>
  );
};

// NEW SECTION 1: Technology Stack
const TechnologyStack = () => {
  const technologies = [
    { name: 'React.js', icon: Code, color: 'from-blue-500 to-cyan-500', category: 'Frontend' },
    { name: 'Node.js', icon: Server, color: 'from-green-500 to-emerald-500', category: 'Backend' },
    { name: 'Python', icon: Brain, color: 'from-yellow-500 to-orange-500', category: 'AI/ML' },
    { name: 'MongoDB', icon: Database, color: 'from-green-600 to-green-700', category: 'Database' },
    { name: 'Docker', icon: Cloud, color: 'from-blue-600 to-blue-700', category: 'DevOps' },
    { name: 'TensorFlow', icon: Brain, color: 'from-orange-500 to-red-500', category: 'AI/ML' },
    { name: 'AWS', icon: Cloud, color: 'from-yellow-400 to-orange-400', category: 'Cloud' },
    { name: 'FastAPI', icon: Zap, color: 'from-teal-500 to-cyan-500', category: 'Backend' }
  ];

  const categories = ['Frontend', 'Backend', 'AI/ML', 'Database', 'DevOps', 'Cloud'];

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"
          >
            Cutting-Edge Technologies Powering Next-Gen Solutions
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Our technology stack combines the latest innovations in AI, cloud computing, and software development to deliver robust, scalable solutions.
          </motion.p>
        </div>
        
        {/* Technology Categories */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <motion.div
                key={category}
                whileHover={{ scale: 1.05 }}
                className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-200 shadow-lg"
              >
                <span className="text-blue-700 font-medium">{category}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Technology Grid */}
        <motion.div 
          variants={staggerChildren}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${tech.color} flex items-center justify-center`}>
                <tech.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-600">{tech.category}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

// NEW SECTION 2: Industry Focus
const IndustryFocus = () => {
  const industries = [
    {
      name: 'Pharmaceuticals',
      icon: Pill,
      color: 'from-blue-500 to-indigo-500',
      description: 'GMP-compliant manufacturing solutions with real-time monitoring and automated documentation.',
      features: ['FDA 21 CFR Part 11 Compliance', 'Batch Record Management', 'Quality Control Integration', 'Regulatory Reporting']
    },
    {
      name: 'Medical Devices',
      icon: Activity,
      color: 'from-red-500 to-pink-500',
      description: 'ISO 13485 certified solutions for medical device manufacturing with traceability.',
      features: ['ISO 13485 Compliance', 'Device History Records', 'Risk Management', 'Post-Market Surveillance']
    },
    {
      name: 'Food & Beverage',
      icon: Utensils,
      color: 'from-green-500 to-emerald-500',
      description: 'HACCP-compliant food safety management with supply chain transparency.',
      features: ['HACCP Implementation', 'Supply Chain Tracking', 'Allergen Management', 'Nutritional Analysis']
    },
    {
      name: 'Biotechnology',
      icon: Dna,
      color: 'from-purple-500 to-violet-500',
      description: 'Advanced bioprocessing solutions with real-time analytics and process optimization.',
      features: ['Bioprocess Monitoring', 'Cell Culture Analytics', 'Downstream Processing', 'Regulatory Compliance']
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Tailored for Every Regulated Industry
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Specialized solutions designed to meet the unique compliance requirements and operational challenges of regulated industries.
          </motion.p>
        </div>
        
        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-2 gap-8"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
            >
              <div className="flex items-center mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${industry.color} flex items-center justify-center mr-4`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold">{industry.name}</h3>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">{industry.description}</p>
              
              <div className="space-y-2">
                {industry.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

// NEW SECTION 3: Development Process
const DevelopmentProcess = () => {
  const steps = [
    {
      step: '01',
      title: 'Analysis & Research',
      description: 'We start by analyzing your business requirements, regulatory landscape, and operational challenges to create a comprehensive project roadmap.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      step: '02',
      title: 'Architecture & Planning',
      description: 'Our experts design a robust, scalable architecture that ensures compliance while maximizing operational efficiency.',
      icon: Layers,
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '03',
      title: 'Development & Testing',
      description: 'Agile development methodology with continuous testing, validation, and quality assurance throughout the process.',
      icon: Code,
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '04',
      title: 'Compliance Validation',
      description: 'Rigorous validation processes ensuring all regulatory requirements are met before deployment.',
      icon: Shield,
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '05',
      title: 'Deployment & Training',
      description: 'Seamless deployment with comprehensive training programs for your team to ensure smooth adoption.',
      icon: Rocket,
      color: 'from-teal-500 to-blue-500'
    },
    {
      step: '06',
      title: 'Support & Maintenance',
      description: '24/7 support and continuous monitoring to ensure optimal performance and regulatory compliance.',
      icon: Headphones,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-slate-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
          >
            Our Proven Development Process
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 max-w-3xl mx-auto"
          >
            A streamlined, compliance-focused approach that transforms your vision into a fully functional, regulatory-approved solution.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${step.color}`}></div>
              
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${step.color} flex items-center justify-center mr-4`}>
                  <step.icon className="w-6 h-6 text-white" />
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>
                  {step.step}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          variants={fadeInUp}
          className="text-center mt-16"
        >
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-2"
          >
            Start Your Project Today
            <ArrowRight size={20} />
          </motion.a>
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

// NEW SECTION 4: Success Metrics & ROI
const SuccessMetrics = () => {
  const metrics = [
    {
      icon: TrendingUp,
      value: '40%',
      label: 'Operational Efficiency Increase',
      color: 'from-blue-500 to-cyan-500',
      description: 'Average improvement in manufacturing efficiency'
    },
    {
      icon: Shield,
      value: '99.9%',
      label: 'Compliance Success Rate',
      color: 'from-green-500 to-emerald-500',
      description: 'Regulatory audit pass rate across all implementations'
    },
    {
      icon: Clock,
      value: '60%',
      label: 'Time-to-Market Reduction',
      color: 'from-purple-500 to-pink-500',
      description: 'Faster product development and approval cycles'
    },
    {
      icon: BarChart3,
      value: '3x',
      label: 'ROI Within 18 Months',
      color: 'from-orange-500 to-red-500',
      description: 'Return on investment through cost savings and efficiency'
    }
  ];

  const testimonials = [
    {
      quote: "BhriguOne transformed our manufacturing processes. We achieved FDA compliance while reducing operational costs by 35%.",
      author: "Dr. Sarah Chen",
      role: "VP of Manufacturing, PharmaCorp",
      company: "Fortune 500 Pharmaceutical Company"
    },
    {
      quote: "The AI-powered analytics gave us unprecedented visibility into our production line. Quality issues are now detected in real-time.",
      author: "Michael Rodriguez",
      role: "Quality Director, MedDevice Solutions",
      company: "Leading Medical Device Manufacturer"
    }
  ];

  return (
    <AnimatedSection className="py-24 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent"
          >
            Measurable Results That Matter
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Our clients consistently achieve significant improvements in efficiency, compliance, and ROI through our innovative solutions.
          </motion.p>
        </div>
        
        {/* Metrics Grid */}
        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl text-center"
            >
              <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${metric.color} flex items-center justify-center`}>
                <metric.icon className="w-8 h-8 text-white" />
              </div>
              <div className={`text-4xl font-bold mb-2 bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}>
                {metric.value}
              </div>
              <h3 className="text-lg font-semibold mb-2">{metric.label}</h3>
              <p className="text-sm text-gray-400">{metric.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div 
          variants={staggerChildren}
          className="grid md:grid-cols-2 gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={scaleIn}
              whileHover={{ scale: 1.02 }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 shadow-2xl"
            >
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
              <div className="border-t border-white/20 pt-4">
                <p className="font-semibold text-white">{testimonial.author}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
                <p className="text-sm text-gray-500">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSection>
  );
};

// Homepage Component with 4 new sections
const HomePage = () => {
  return (
    <div>
      {/* Enhanced Hero Section */}
      <HeroSection />

      {/* NEW SECTION 1: Technology Stack */}
      <TechnologyStack />

      {/* NEW SECTION 2: Industry Focus */}
      <IndustryFocus />

      {/* NEW SECTION 3: Development Process */}
      <DevelopmentProcess />

      {/* NEW SECTION 4: Success Metrics & ROI */}
      <SuccessMetrics />

      {/* Enhanced Quick Overview */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
          >
            Transforming Regulated Industries
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-700 mb-12 max-w-3xl mx-auto"
          >
            Building smart, future-ready platforms that enable safe, efficient, and 
            fully compliant operations across regulated industries.
          </motion.p>
          
          <motion.div 
            variants={staggerChildren}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: "AI-Driven Analytics",
                desc: "Predictive maintenance and quality control through machine learning",
                icon: "🧠",
                color: "from-blue-500 to-cyan-500",
                link: "/technology"
              },
              {
                title: "Industry 4.0/5.0 Ready",
                desc: "Complete digital transformation for regulated manufacturing",
                icon: "🏭",
                color: "from-green-500 to-emerald-500",
                link: "/industries"
              },
              {
                title: "Compliance Automation",
                desc: "Automated regulatory reporting and audit trail management",
                icon: "⚖️",
                color: "from-purple-500 to-pink-500",
                link: "/solutions"
              }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.link}
                variants={scaleIn}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 block"
              >
                <div className={`w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-2xl`}>
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Enhanced Call to Action */}
      <AnimatedSection className="py-24 bg-gradient-to-br from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-400 bg-clip-text text-transparent"
          >
            Ready to Transform Your Operations?
          </motion.h2>
          <motion.p 
            variants={fadeInUp}
            className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            Discover how BhriguOne can revolutionize your regulated manufacturing processes.
          </motion.p>
          
          <motion.div 
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05, boxShadow: "0 10px 30px rgba(0, 255, 127, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              Schedule Demo
              <ArrowRight size={20} />
            </motion.a>
            
            <motion.a
              href="/products"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-300"
            >
              Explore Products
            </motion.a>
          </motion.div>
        </div>
      </AnimatedSection>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          <Route path="/technology" element={<TechnologyPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;