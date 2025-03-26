
// Types for our product data
export interface Product {
  id: string;
  name: string;
  category: 'standardized' | 'organic' | 'signature' | 'probiotics';
  image: string;
  shortDescription: string;
  description: string;
  applications: string[];
  functionality: string[];
  industryUses: string[];
  certifications: string[];
  sku: string;
  origin: string;
  faqs: { question: string; answer: string }[];
}

// Sample product data
const products: Product[] = [
  {
    id: "amla-extract",
    name: "Amla Extract",
    category: "standardized",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=6052&q=80",
    shortDescription: "Standardized extract from Emblica officinalis, rich in vitamin C and antioxidants.",
    description: "Our Amla Extract is derived from the fruit of Emblica officinalis, also known as Indian Gooseberry. It is standardized to contain a high concentration of vitamin C and antioxidants. This extract is known for its immune-boosting properties and is widely used in health supplements and ayurvedic formulations.",
    applications: ["Dietary Supplements", "Functional Foods", "Ayurvedic Formulations", "Health Drinks"],
    functionality: ["Antioxidant", "Immune Support", "Vitamin C Source", "Anti-inflammatory"],
    industryUses: ["Pharmaceutical", "Nutraceutical", "Food & Beverage", "Cosmetic"],
    certifications: ["ISO 9001", "GMP", "HACCP", "Organic Certified"],
    sku: "SHH-SE-001",
    origin: "India",
    faqs: [
      {
        question: "What is the standardization percentage of your Amla Extract?",
        answer: "Our Amla Extract is standardized to contain 30% vitamin C and 40% polyphenols."
      },
      {
        question: "Is this extract water-soluble?",
        answer: "Yes, our Amla Extract is water-soluble, making it easy to incorporate into various formulations."
      }
    ]
  },
  {
    id: "ashwagandha-extract",
    name: "Ashwagandha Extract",
    category: "standardized",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=5760&q=80",
    shortDescription: "Premium extract from Withania somnifera root, standardized for withanolides.",
    description: "Our Ashwagandha Extract is derived from the root of Withania somnifera, carefully processed to preserve the active compounds. It is standardized to contain 5% withanolides, the key bioactive compounds. This extract is known for its adaptogenic properties and is widely used to support stress management and overall wellness.",
    applications: ["Adaptogenic Formulations", "Stress Management Products", "Sports Nutrition", "Sleep Support"],
    functionality: ["Adaptogen", "Stress Management", "Immune Support", "Energy & Vitality"],
    industryUses: ["Pharmaceutical", "Nutraceutical", "Sports Nutrition", "Cosmetic"],
    certifications: ["ISO 9001", "GMP", "HACCP", "Kosher"],
    sku: "SHH-SE-002",
    origin: "India",
    faqs: [
      {
        question: "What is the withanolide content in your Ashwagandha Extract?",
        answer: "Our Ashwagandha Extract is standardized to contain 5% withanolides."
      },
      {
        question: "Is your Ashwagandha Extract tested for heavy metals?",
        answer: "Yes, all our extracts undergo rigorous testing for heavy metals and meet or exceed industry standards for purity."
      }
    ]
  },
  {
    id: "organic-turmeric-extract",
    name: "Organic Turmeric Extract",
    category: "organic",
    image: "https://images.unsplash.com/photo-1615485500202-910cadefa0f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    shortDescription: "Certified organic extract from Curcuma longa, rich in curcuminoids.",
    description: "Our Organic Turmeric Extract is derived from organically grown Curcuma longa rhizomes. This extract is certified organic and standardized to contain 95% curcuminoids, the key bioactive compounds in turmeric. It offers powerful antioxidant and anti-inflammatory properties and is suitable for various health applications.",
    applications: ["Joint Health Products", "Inflammatory Response Support", "Antioxidant Formulations", "Digestive Health Support"],
    functionality: ["Anti-inflammatory", "Antioxidant", "Digestive Support", "Joint Support"],
    industryUses: ["Pharmaceutical", "Nutraceutical", "Food & Beverage", "Cosmetic"],
    certifications: ["USDA Organic", "EU Organic", "ISO 9001", "GMP"],
    sku: "SHH-OE-001",
    origin: "India",
    faqs: [
      {
        question: "What is the curcuminoid content in your Organic Turmeric Extract?",
        answer: "Our Organic Turmeric Extract is standardized to contain 95% curcuminoids."
      },
      {
        question: "Is your Organic Turmeric Extract water-soluble?",
        answer: "Our standard Organic Turmeric Extract is not water-soluble as curcuminoids are naturally lipophilic. However, we also offer a water-dispersible version with enhanced bioavailability."
      }
    ]
  },
  {
    id: "bacillus-coagulans",
    name: "Bacillus Coagulans",
    category: "probiotics",
    image: "https://images.unsplash.com/photo-1580428180098-24b353d7e9d9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    shortDescription: "Spore-forming probiotic strain with high stability and viability.",
    description: "Our Bacillus Coagulans is a spore-forming probiotic that offers exceptional stability and viability even under harsh conditions. This strain is resistant to stomach acid and bile, ensuring effective delivery to the intestines. It supports digestive health, immune function, and can be incorporated into various formulations without refrigeration.",
    applications: ["Digestive Health Products", "Immune Support Formulations", "Shelf-Stable Probiotics", "Food & Beverage Applications"],
    functionality: ["Digestive Support", "Immune Modulation", "Microbiome Balance", "Nutrient Absorption"],
    industryUses: ["Pharmaceutical", "Nutraceutical", "Food & Beverage", "Animal Nutrition"],
    certifications: ["USP", "ISO 9001", "GMP", "Non-GMO Project Verified"],
    sku: "SHH-PRO-001",
    origin: "Laboratory Cultured",
    faqs: [
      {
        question: "What is the CFU count of your Bacillus Coagulans?",
        answer: "Our Bacillus Coagulans is available in concentrations from 15 billion CFU/g to 100 billion CFU/g."
      },
      {
        question: "Does this probiotic require refrigeration?",
        answer: "No, our Bacillus Coagulans is highly stable at room temperature due to its spore-forming nature, eliminating the need for refrigeration."
      }
    ]
  },
  {
    id: "turmimax",
    name: "Turmimax",
    category: "signature",
    image: "https://images.unsplash.com/photo-1607631568010-a87245c0dbd6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80",
    shortDescription: "Proprietary turmeric extract with enhanced bioavailability and potency.",
    description: "Turmimax is our signature turmeric-based formulation with enhanced bioavailability and potency. This proprietary extract combines curcuminoids with essential oils and phospholipids to significantly increase absorption and efficacy. Turmimax offers powerful anti-inflammatory and antioxidant benefits and is ideal for premium health supplements.",
    applications: ["Premium Joint Health Products", "Enhanced Bioavailability Formulations", "Sports Recovery", "Brain Health Support"],
    functionality: ["Enhanced Bioavailability", "Potent Anti-inflammatory", "Superior Antioxidant", "Improved Stability"],
    industryUses: ["Pharmaceutical", "Premium Nutraceuticals", "Sports Nutrition", "Medical Foods"],
    certifications: ["Proprietary Formula", "Clinically Studied", "Patent-Protected", "GMP"],
    sku: "SHH-SI-001",
    origin: "Proprietary Process",
    faqs: [
      {
        question: "How much more bioavailable is Turmimax compared to standard turmeric extracts?",
        answer: "Turmimax demonstrates up to 29 times higher bioavailability compared to standard turmeric extracts in pharmacokinetic studies."
      },
      {
        question: "Are there any clinical studies supporting Turmimax?",
        answer: "Yes, Turmimax has been studied in multiple clinical trials demonstrating superior efficacy for joint health and inflammatory response compared to standard curcumin extracts."
      }
    ]
  }
];

// Category filtering
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

// Get all products
export const getAllProducts = (): Product[] => {
  return products;
};

// Get product by ID
export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export default products;
