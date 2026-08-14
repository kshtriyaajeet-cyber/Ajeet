// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
function openModal(imageSrc, title, description) {
    document.getElementById('modalImg').src = imageSrc;
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDesc').textContent = description;

    document.getElementById('imageModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('imageModal').style.display = 'none';
}

// Close when clicking outside the modal
window.onclick = function(event) {
    const modal = document.getElementById('imageModal');

    if (event.target === modal) {
        closeModal();
    }
};

// ================= ACCORDION =================
document.addEventListener('DOMContentLoaded', function () {

    const buttons = document.querySelectorAll('.accordion-btn');

    buttons.forEach(button => {
        button.addEventListener('click', function () {

            const content = this.nextElementSibling;
            const icon = this.querySelector('span');

            // Close other sections
            document.querySelectorAll('.accordion-content').forEach(item => {
                if (item !== content) {
                    item.style.maxHeight = null;
                    item.previousElementSibling.querySelector('span').textContent = '+';
                }
            });

            // Toggle current section
            if (content.style.maxHeight && content.style.maxHeight !== '0px') {
                content.style.maxHeight = null;
                icon.textContent = '+';
            } else {
                content.style.maxHeight = content.scrollHeight + 'px';
                icon.textContent = '−';
            }
        });
    });
});

// ================= GALLERY DATA =================
const galleries = {
    publication: [
    {
        img: 'images/book1.jpg',
        title: 'Agriculture Entrance Guide',
        desc: 'Book written for agriculture entrance examination preparation.'
    },
    {
        img: 'images/book2.jpg',
        title: '99 Reasons Why You Read Books',
        desc: 'Inspirational educational publication focused on reading and learning.'
    },
    {
        img: 'images/book3.jpg',
        title: 'Ramayan Bal Katha',
        desc: 'Children’s book presenting stories from the Ramayan in a simple format.'
    }
],

    bio: [
        { img: 'images/bio1.jpg', title: 'Inoculation', desc: 'Inoculating the active mother culture for the further multiplication under the laminar air flow.' },
        { img: 'images/bio2.jpg', title: 'Microbial Culture Handling', desc: 'Handling and preparation of microbial cultures in laboratory conditions.' },
        { img: 'images/bio3.jpg', title: 'Precision in every parameter 🌱', desc: 'Configuring the key parameters of the fermenter for efficient microbial growth and biofertilizer production.' },
        { img: 'images/bio4.jpg', title: 'Harvesting the Biofertilizer', desc: 'After complete growth, harvesting the final product.' },
        { img: 'images/bio5.jpg', title: 'Packaging and Storage', desc: 'Quality maintenance, packaging, and storage practices of biofertilizers.' },
        { img: 'images/bio6.jpg', title: 'Field Application', desc: 'Field application methods for sustainable nutrient management practices.' }
    ],

mushroom: [
    { 
        img: 'images/mushroom1.jpg', 
        title: 'Isolating the Pure strain', 
        desc: 'Preparing the seeds of the Oyster Mushroom for the cultivation' 
    },

    { 
        img: 'images/mushroom2.jpg', 
        title: 'Aseptic Inoculation', 
        desc: 'Performing sterile inoculation under controlled laboratory conditions.' 
    },

    { 
        img: 'images/mushroom3.jpg', 
        title: 'Value Added Products of the Mushroom', 
        desc: 'Mushroom-based value-added products prepared during practical training.' 
    },

    { 
        img: 'images/mushroom4.jpg', 
        title: 'Spawn Management and Drying', 
        desc: 'Preparing the substrate for mushroom cultivation and drying the final products.' 
    },

    { 
        img: 'images/mushroom5.jpg', 
        title: 'Mushroom Fortified Biscuits', 
        desc: 'Preparation of the mushroom fortified biscuits during the practical training and entrepreneurship exposure activities.' 
    }
],

    speak: [
    {
        img: 'images/speak1.jpeg',
        title: 'Delivering the Vote of Thanks',
        desc: 'Delivering vote of thanks to the distinguished guests during farewell party.'
    },
    {
        img: 'images/speak2.jpg',
        title: 'Anchoring Activity',
        desc: 'Anchoring and stage management during Soil Day cum RAWE Kisan Goshthi.'
    },
    {
        img: 'images/speak3.jpg',
        title: 'Speech during the Kisan Goshthi',
        desc: 'Delivered a speech on the benefits of microbial biofertilizers on Soil Day.'
    },
    {
        img: 'images/speak4.jpg',
        title: 'Kisan Goshthi Anchoring',
        desc: 'Anchoring and stage management during the Kisan Goshthi programme.'
    },
    {
        img: 'images/speak5.jpeg',
        title: 'Academic Presentation',
        desc: 'Presentation on the topic "Successful Cultivation of Mushroom".'
    },
    {
        img: 'images/speak6.jpg',
        title: 'Reciting Poem',
        desc: 'Participated in the university-level poetry competition.'
    },
    {
        img: 'images/speak7.jpg',
        title: 'Academic Presentation',
        desc: 'Presented a PPT on cost reduction mechanisms in agriculture.'
    },
    {
        img: 'images/speak8.jpg',
        title: 'Seminar Participation',
        desc: 'Participated in the placement drive conducted by Indorama.'
    }
],

award: [
    {
        img: 'images/aw1.jpg',
        title: 'Academic Achievement',
        desc: 'Received the B.Sc. (Hons.) Agriculture degree during the 28th Convocation of Acharya Narendra Deva University of Agriculture and Technology, Kumarganj, Ayodhya.'
    },

    {
        img: 'images/aw2.jpg',
        title: 'University Award',
        desc: 'Awarded first position in the Poetry Competition by the Hon’ble Vice Chancellor of ANDUAT and the Chairman of ASRB.'
    },

    {
        img: 'images/aw3.jpg',
        title: 'Certificate of RAWE & AIA',
        desc: 'Certificate awarded for active participation and contribution during the Rural Agricultural Work Experience and Agro-Industrial Attachment programme.'
    },

    {
        img: 'images/aw4.jpg',
        title: 'B.Sc. (Hons.) Agriculture Degree',
        desc: 'Received the degree from Academic Advisor Dr. R.K. Yadav during the 28th Convocation ceremony.'
    }
],
}

// ================= LIGHTBOX =================
let currentGallery = '';
let currentIndex = 0;

function openLightbox(gallery, index) {
    currentGallery = gallery;
    currentIndex = index;
    updateLightbox();
    document.getElementById('lightbox').style.display = 'flex';
}

function updateLightbox() {
    const item = galleries[currentGallery][currentIndex];

    document.getElementById('lightbox-img').src = item.img;
    document.getElementById('lightbox-title').textContent = item.title;
    document.getElementById('lightbox-desc').textContent = item.desc;
}

function changeSlide(direction) {
    const items = galleries[currentGallery];
    currentIndex = (currentIndex + direction + items.length) % items.length;
    updateLightbox();
}

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
}

// Close when clicking outside
document.getElementById('lightbox').addEventListener('click', function (e) {
    if (e.target === this) {
        closeLightbox();
    }
});

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    const lightbox = document.getElementById('lightbox');

    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') changeSlide(1);
        if (e.key === 'ArrowLeft') changeSlide(-1);
        if (e.key === 'Escape') closeLightbox();
    }
});

/* ==================================================
   EDUCATION MODAL
================================================== */

function openEduModal(img, title, institution, year, status, result, specialization) {
    document.getElementById('eduModalImg').src = img;
    document.getElementById('eduModalTitle').textContent = title;
    document.getElementById('eduModalInstitution').textContent = institution;
    document.getElementById('eduModalYear').textContent = year;
    document.getElementById('eduModalStatus').textContent = status;
    document.getElementById('eduModalResult').textContent = result;
    document.getElementById('eduModalSpecialization').textContent = specialization;

    document.getElementById('eduModal').style.display = 'flex';
}

function closeEduModal() {
    document.getElementById('eduModal').style.display = 'none';
}

/* Outside click */
document.getElementById('eduModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeEduModal();
    }
});

/* ESC key close */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeEduModal();
    }
});

/* ==================================================
   CERTIFICATE WALL MODAL
================================================== */

function openCertificate(img, title, date, desc) {
    document.getElementById('certificateModalImg').src = img;
    document.getElementById('certificateModalTitle').textContent = title;
    document.getElementById('certificateModalDate').textContent = date;
    document.getElementById('certificateModalDesc').textContent = desc;

    document.getElementById('certificateModal').style.display = 'flex';
}

function closeCertificate() {
    document.getElementById('certificateModal').style.display = 'none';
}

/* Close on outside click */
document.getElementById('certificateModal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeCertificate();
    }
});

/* ESC key support */
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeCertificate();
    }
});

/* ==================================================
   POETRY DATA
================================================== */

const poems = [

    {
        title: "अमवक डाली",
        tag: "Farmer & Rural Life",

        text: `काली रात का काला काल, ऐसा खेल- खेल गया,
की एक किसान फिर से आज 
     अमवक डालिस झूल गया।
बीज बोने के पश्चात,फसल में पानी बाकी था।
सरकार के कर्जे के खातिर,द्वार पे खड़ा खाकी था।
सावन के मौसम में, कीचड़ की गालियां सुखी गई,
पनघट वाली रस्सी भी, चरखी से आज टूट गई,
किरण की शादी बाकी थी,सूरज का सपना टूट गया।
एक किसान फिर से आज,
      अमवक डालिस झूल गया।
घुंघरू बैलो के गर्दन के, फीका गीत सुनाते थे।
कोयल कूं कूं कर करके मातम का शोक मनाती थी।
रहट की आवाज़ों से, अब उसका नाता टूट गया।
एक किसान फिर से आज,
      अमवक डालिस झूल गया।
किरणों की आहट पाकर कलियों ने आंखें खोली थी।
      मंद पवन की आहट से,जायद की फासले बोली थी।
रवि, अनिल, पावन, भूतल, जल, धरा पर ही सब छूट गया।
     एक किसान फिर से आज,
                 अमवक डालिस झूल गया।
गगन गर्जना कर करके, मेघ का दूत बरसता था।
शशि सूर्य का वह काला पल, वज्र वर्जन करता था।
धरा पे स्थित समस्त जानो से, उसका साथ छूट गया।
एक किसान फिर से आज,
                 अमवक डालिस झूल गया।
सिर पे पगड़ी बांध के वो दिन भर हाल को चलता था,
फटा कुर्ता पहन के वो वर्षों काल बिताता था 
गरीबी रूपी गोली को वह निरंतर सीने पर झेल गया।
एक किसान फिर से आज 
            अमवक डालिस झूल गया।
सावन का मौसम हरियाली से ये कहता था।
कहा गया वो किसान जो हमेशा सीनताने रहता था।
घनघोर वर्षा के होते भी, खेत उसकी व्यथा में सूख गया।
एक किसान फिर से आज 
            अमवक डालिस झूल गया।
कृषक के जीवन की हर हरियाली,क्यों पतझड़ ही बन जाता है।
वो जग का अन्नदाता है फिर भी वही क्यों मारा जाता है
कृषक का जीवन क्यों,प्रश्न चिन्ह बनके रह गया।
एक किसान फिर से आज 
            अमवक डालिस झूल गया।

            - अजीत कु० सिंह
`
    },


    {
        title: "गाँव",
        tag: "Village & Culture",

        text: `पवन का प्राण जहां से उड़ान भरते है,
जहां पगडंडियों पर लोग सुबह शाम चलते हैं,
सुगंधित पुष्प जहां से सुगंध की सौगात लेते हैं,
संगीत जहां से सुर और ताल लेते हैं,
शहरों में कहां सुबह और शाम होता है,
यहां चंदा के चकोर में सारा जहान होता है,
वहां एक कमरे में जवानी रेल की तरह निकल जाती है,
यहां ताल से बगिया तक की घुमाई मन बहलाती है,
नही होती है मुलाकात वहां रिश्ते सारे टूट जाते है,
सन्डे न पड़े तो बाप बेटे का मुंह नही देख पाते है,
इज्जत के लिए जरूरी कमीज नही होती है,
वहां के लोगो में इतनी तमीज नही होती है,।
चंद पैसे से खरीदे हुए कुत्तों को अपने साथ बैठाते है,
उनके खून से पैदा हुए मां बाप को वृद्धाश्रम दिखाते है,
जो आदर्शों को भी आदर्श सिखलता है, 
वही तो लोगो के लिए गांव कहलाता हैं। 2

वहां लोग तो बहुत है लेकिन अपनापन नही होता है,
गांव के बचपन जैसा वहा का बचपन नही होता है,
यहां दिन में तीन चार गुल्लियां गुम हो जाती है,
वहां मोबाइल स्क्रीन पर उंगलियां घिस जाती है,
गांव में दुश्मन से बड़ा कोई हित नही होता है,
शहरों मे हित से बड़ा कोई दुश्मन होता है,
संस्कारों को अहंकार में तब्दील कर दिया जाता है,
कमजोर को उसकी कमजोरी से जलील कर दिया जाता है,
सब कुछ होते हुए भी वहां आदमी को कभी सुख नही होता है,
यहां झोपड़ी में रहने वाले को भी कभी कोई दुख नही होता है,
वहां कभी मोर नांचने, कोयल गीत सुनने नही आती है,
गांवों में गाय को चराए बिना रात को नींद नही आती है,
गांवों में छप्पर उठाते समय मेला लग जाता है,
वहां मौत के समय कोई मातम में नही जाता है,
गांवों में सड़के कच्ची ही पर मजबूत होती है,
शहरों में साफ पानी और ताजा हवाएं नही होती है,
बात अगर प्रतिष्ठा की हो तो लोग एक हो जाते है,
वहां काम लगने पर लोग एक से अनेक हो जाते है,
यूं ही शहरी प्रचलन बढ़ जायेगा,
ये हैवान एक दिन गांव को निगल जायेगा,
गांव के पीपल के छाव में बैठने को,
किसान के हल की फार बनने को,
बाप की पगड़ी सर रखने को,
मां की रोटी से पेट भरने को,
शहरी प्रदूषण से जान बचाने को,
गांव के नीम में सांस लेने को,
खेतो में फिर से जान भरने को,
अन्न से डेहरी और दलान भरने को,
कुदाल फावड़ा का बेट बनने को,
बैल के हल का जोठ बनने को,
कोल्हू से गन्ने का रस पीने को,
खेत की मेढ़ो पर नंगे पांव चलने को,
धरती मां को फिर से नमन करने को,

खेतो में फिर से जान आ जायेंगे, 
जब उसके लाल फिर गांव आ जाएंगे।
कोयल सुबह शाम गायेगी,
फिर वो दिवाली वाली रात आयेगी,
होली के दिन रंगो से भीग जायेंगे,
हम फिर लौट के अपने गांव जायेंगे।2

- अजीत कु० सिंह
`
    },


    {
        title: "दो शब्द",
        tag: "Life & Motivation",

        text: `उजाला अंधेरे में,दिन रात में बदल जाता है,
तारीख बदल जाती है, मौसम बदल जाता है।
आती है रात तो सूरज भी बदल जाता है,
परिवर्तन जीवन का मर्म है, मौका देख इंसा बदल जाता है।

रंगो में डूबा भेड़िया, शेर नही होता,
ठहरे पानी में, कोई गोताखोर नही होता,
वास्तविकता धाराओं के विपरीत होती है,
दुख के काल में कोई सच्चा यार नही होता।

पुष्प तो होंगे पर सुगंध चली जायेगी,
ज्येठ की बयार रिश्ते बहा ले जायेगी,
आएगा भूचाल तो, वफा,उम्मीदें, कसमें सारी टूट जाएंगी,
फिर भी तू न संभला तो जिंदिगी तुझसे रूठ जायेगी,
हवा तो होगी पर पत्ता नही हिलेगा,
छत के नीचे भी छाव नही मिलेगा,
मन व्याकुल हो पीछे हट जायेगा,
उस समय तेरा हृदय तुझे समझाएगा, 
की काले काल की काली रात्रि बाद, 
सुनहरा सूरज सुंदर सुमन खिलाएगा।
जमाने को छोड़ आगे बढ़ता जा,
दृढ़ता ही तुझे तेरे उदिष्ठ से मिलवाएगा।

- अजीत कु० सिंह
`
    },


    {
        title: "अभिनंदन राम का",
        tag: "Devotion & Culture",

        text: `कहता ये जग सारा है, 
अवध राम तुम्हारा है
आओ प्रिय आसन पर, 
अभिनंदन राम तुम्हारा है।2

हुई प्रतीक्षा पूर्ण अब, 
सूरज नया प्रभात लाया है,
मंदिर भी हो गया है पूर्ण,
पथ पर पुष्प बिछाया है,
धरा है पावन नरा है पावन,
पावन सरयू की हर एक धारा है,
आओ प्रिय आसन पर, 
अभिनंदन राम तुम्हारा है।2

उतर गया अधर्म का झंडा,
हुए सब पापी चार खंडा,
हिंदू हुआ अखंड अखंडा,
हाथो में है कानून का डंडा,
हर गली में राम राम लिखवाया है,
अब आओ प्रिय आसन पर, 
अभिनंदन राम तुम्हारा है।2
 
तुम सबसे उत्तम हो,
श्याम बदन और अनुपम हो,
तुम्ही संगीत के सरगम हो,
तुम्ही काशी तुम्ही अयोध्या,
तुम्ही गंगा के संगम हो,
पांव बढ़ाओ आगे आओ,
तुम मर्यादा में पुरुषोत्तम हो,
माताओं का सम्मान नही है,
बहनों का स्वाभिमान नही है,
पापियों से जग हारा है,
आओ प्रिय आसन पर, 
अभिनंदन राम तुम्हारा है।2

तुम रूठे हो इस नगरी से,
इसमें दोष हमारा है,
तुम्हे काल्पनिक कहते है,
सांस चैन की लेते है,
ये भी दोष हमारा है,
किंतु समय राम अब बदल गया,
यूपी के शासन में दास तुम्हारा पहुंच गया,
सजवाया है हनुमान गढ़ी,
दसरथ महल और सीता रसोई,
राम दरबार लगवाया है,
आओ प्रिय आसन पर, 
अभिनंदन राम तुम्हारा है।2

मान मिला है,
सम्मान मिला है,
राम को राम का,
स्वाभिमान मिला है,
गूंजा अब यह शंखनाद,
जगत को राम का राज्य मिला है।
 - अजीत कु० सिंह
`
    },


    {
        title: "हम हिन्दुस्तानी",
        tag: "Patriotism & Unity",

        text: `गौमुख गंगा से जो निकले,हम उस गंगा के पानी है।
सबके मन को मुग्ध करें जो, हम वो उज्ज्वल सी बानी है।
हिंदी भी हम है उर्दू भी हम है, हम आदि संस्कृत के ज्ञानी है,
कश्मीरी है कन्नड़ भी हम है, हम तमिल तेलगु बंगाली है।
ये है हमारा सांस्कृतिक भारत,यहां सीता हर एक नारी है,
राम अभी तक है नर में,हम जग में धर्मध्वज के धारी है।
मुस्लिम का कुरान है,हम ही गीता के ज्ञानी है,
हम ईशाइयों का बाइबिल, गुरु ग्रंथ के अभिमानी है।
वशुधायेव कुटुंबकम कहने वाले, हम सच्चे हिंदुस्तानी है-2

हम उत्तर का हिमालय तो, दक्षिण के समंदर का पानी है,
पश्चिम में एकता की मूरत, पूरवी अरुणाचल के वासी है।
हम सुंदा की गहरी गर्त तो, कंचनजंगा की ऊंची चोटी है,
हम बहना की राखी तो, ईद की सेवई और रोटी है।  
हम सुभाषचन्द्र की सेना है, गांधी अहिंसा की लाठी है,
सरदार पटेल की एकता तो, भगत के बलिदान निशानी है।
हम यमुना है हम सरस्वती, नर्मदा का निर्मल पानी है,
हम कलाम के अग्नि है, हम अटल की अमर जुबानी है।
वशुधायेव कुटुंबकम कहने वाले, हम सब सच्चे हिंदुस्तानी है।

हम अर्जुन का गांडीव, माधव चक्र सुदरसंधारी है,
हम मांसाहार त्याग कर, शुद्ध शाकाहारी है।
हम गेहूं का गेहुआं रंग तो, धान की हरी हरियाली है,
हम मंत्रमुग्ध करने वाली, फगुआ बयार निराली है।
सागर का नीला रंग तो, भू-गोल है बताने वाले है,
हम अब से आदि तक का, इतिहास बनाने वाले है।
इंसान की क्या हस्ती है, पत्थर भी पूजे जाते है,
हम कालो के काल महाकाल, मृत्युंजय को शीश नवाते है।
जो आदि काल से चली आ रही, हम वो नई कहानी है,
भारत भूमि पर रहने वाले, हम सब सच्चे हिंदुस्तानी है।

हम उन्तिस राज्य मिलाकरके एक राष्ट्र को बनाते है,
डेढ़अरब एक सुर में, राष्ट्रगान को गाते हैं।
हम आयरन लेडी इंद्रागांधी, लक्ष्मी बाई की शक्ति है,
हम श्रीदेवी का आकर्षण है, तो मीराबाई की भक्ति है।
हम केरल का काजू है, तो कश्मीर का केसर है,
हम शांति सौंदर्य का प्रतीक, प्यारा सा गुलमोहर है।
हम जन्मभूमि भारत को, माता का दर्जा देते है,
हिमराज मां की रक्षा करता,सागर चरणों को धोते है।
हम रामानुज हम आर्यभट्ट, शून्य बताने वाले है,
हम त्याग तपस्या से धरा को, स्वर्ग बनाने वाले है।
जिसमे श्रीराम नहाते थे हम उस सरयू के पानी है,
वशुधायेव कुटुंबकम कहने वाले, हम सब सच्चे हिंदुस्तानी है।

- अजीत कु० सिंह
`
    },


    {
        title: "युवा नेता – अवधी",
        tag: "Satire • Awadhi",

        text: `कलजुगी जमाना मइहन, अइसन चाल ढाल भवा,
बाप गोड़ रहा है गन्ना, बेटवा भारत सरकार भवा,
सात सौ के कुर्ता आवा चार सौ कय जूता,
दस रुपया कय पान दबाइन और बन गए युवा नेता।

चर्चा भवा खलिहाने मा,
कूदब अबकी अखाड़े मा,
लड़ब परधानी फिर देखा जाई,
ज्यादा स ज्यादा खेत बिकाई,
काका कहिन रुक जा बेटवा,
फाटी छाती जब बिकाई खेतवा,
खेत से बढ़के नाही परधनी,
राजनीत मा जाई जवानी।


‌अरे चाचा यार, आप समझते नही रहें है!

नरेगा वाले धान कटाइहें,
सचिव सदस्य सब पानी भरीहें,
ताल गड़ाइया आपन होई,
ग्रामसमाज पर कब्जा होई,
पंचायत घर में ऑफिस होगा,
बुलट फरचुनर गेट पर होगा,
केहू तोहसे ना हुमसेक पाई,
चाहे जतना जोर लगाई।

सोचो चाचा वो मंजर होगा, चर अचर सब अपना होगा,
यहिस कहित है अब लड़जाने दो, कल ही पर्चा दाखिला होगा।

‌पर्चा दाखिला के बाद

मंगल भवन अमंगल हारी, यक्को तीर जाए ना खाली,
वोट मांगने निकल लिहिन है, चुनाव चिन्ह चांदी की थाली।

भाइयों और उनकी बहनों,
देवियों और उनके सज्जनों,
हम है परधानी कय प्रत्याशी,
नाम है हमार जियो सन्यासी,
विकास कय पानी बरसेगा,
भाग्य अपना मुंह खोलेगा,
एयरोप्लेन से जायेंगे,
बुलट ट्रेन दौड़ाएंगे,
जो काम पीएम कर न पाए,
वो करके दिखलाएंगे,
मिली कालोनी एक तरफ से,
सरकारी नौकरी हर यक घर से,
शाम को जम के पार्टी होगी,
देसी दारू बिरयानी होगी,
सबको जरूरी आना है,
अव मोहर थाली पर लगाना है।

‌तब तक 

जैसे पार्टी कय नाम लिहिन,
दरोगा साहब एक हानिन,

सोटा क बल पर थाना लाए, सन्यासी क ऊपर FIR लिखाए,
आचार संहिता के उलंघन मा, सन्यासी कइ हन जेल पठवाए,

नेता जी कय अइसा कारनामा भवा,
बैनामा क पैसा से जुर्माना भवा,
बेल भावा ओ बाहर आए,
खेत गवाएं व सोटा पाए,
लौट के बुद्धू घर को आए,
यही तो युवा नेता कहलाए।

- अजीत कु० सिंह
`
    },


    {
        title: "भय करो!",
        tag: "Social Awareness",

        text: `हे सत्ताधारी, हे सत्तालोभी
सत्ताप्रेमी, मादक धारी
भय करो, तुम भय करो!

ये गांधी का वो देश अमर,
मिला सत्य का जिसे डगर,
ये धरती बुद्ध का देश है,
सत्य समता सदगुण उपदेश है,
यही महान अशोक की नीति,
राम श्याम की भी स्वीकृति,
लोभ को तुम खत्म करो,
भय करो, तुम भय करो!

भय करो तुम ऐसे, 
कांटो से करते पांव जैसे,
भुजंग नेवले से करता, 
पावक डरता है जल से,
डरे शेर से सुरभी जैसे, 
धरा डरे जब अंबर गरजे,
भ्रष्टाचार से डरो तुम ऐसे, 
डरते हो जोरू से वैसे।

सोचो सोचो सोचो! 
इस धरती पर थी काली छाया,
गोरों की वो काली काया,
कितनो ने बलिदान दिया,
कतरा कतरा और प्राण दिया,
तुम भी जालिम जैसे लगते हो,
जुल्म जघन्नता ही करते हो,
मिट जाता ये अभिमान तुम्हारा,
इच्छा वांछा अरमान तुम्हारा,
ज्यों बलदानी गर करलेते सौदा,
चुप हो जाते न करते दंगा,
कैसे मिलती ये आजादी, 
हा बोलो कैसे मिलती ये आजादी?
तुमको तुम्हारी कुर्सी प्यारी।

विश्वास दिया, अभिमान दिया,
जनता ने तुम्हे सम्मान दिया,
तुम फिर भी कुछ न दे पाए,
उसकी रोटी छीन के खाए,
बतलाओ, तुम बतलाओ!
आखिर कैसे जी लेते हो,
सांस चैन की ले लेते हो,
विष को अमृत कहते हो,
जो तुमको सबसे प्यारा है,
वो अमृत काल तुम्हारा है,
सौदा तुमको भारी होगा,
फतवा तुम पर जारी होगा,
इसी लिए मैं कहता हूं,
ईमान लिखो फरमान लिखो, 
रग रग पर हिंदुस्तान लिखों,
ईमान का गुणगान लिखो,
जनता का सम्मान लिखो।
आगे से न दोहराव, ऐसा कोई उपचार करो,
भय करो तुम भय करो।

- अजीत कु० सिंह
`
    },


    {
        title: "हिन्दी प्रेम",
        tag: "Hindi & Literature",

        text: `हिंद मेरा देश है,हिंदी मेरी भाषा है।
हिंद हिंदी का उत्थान,ये मेरी जिज्ञासा है।

सूरज चंदा हो चाहे एक,
हिंदी में है इनके विलोम अनेक,
हिंदी को सम्मान मिले यही मेरी अभिलाषा है,
हिंद मेरा देश है,हिंदी मेरी भाषा है।

हिंदी की है बात निराली,
हिंदी से ही फैलेगी,तीनों लोक में खुशहाली,
और भाषाओं के शब्दो में कहा आभा है,
हिंद मेरा देश है,हिंदी मेरी भाषा है।

हिंदी संगीत के है सात सुर,
सज जाए पंक्ति में तो हो जाए गीत मधुर,
कवियों को हिंदी से मिलता पेड़ सी सुंदर छाया है।
हिंद मेरा देश है,हिंदी मेरी भाषा है।

- अजीत कु० सिंह
`
    }

];


/* ==================================================
   CURRENT POEM
================================================== */

let currentPoem = 0;


/* ==================================================
   OPEN POEM
================================================== */

function openPoem(index) {

    if (!poems[index]) return;

    currentPoem = index;

    const modal = document.getElementById("poemModal");

    if (!modal) return;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

    showPoem();

}


/* ==================================================
   SHOW POEM
================================================== */

function showPoem() {

    if (!poems[currentPoem]) return;

    const poem = poems[currentPoem];

    document.getElementById("poemNumber").textContent =
        String(currentPoem + 1).padStart(2, "0");

    document.getElementById("poemTitle").textContent =
        poem.title;

    document.getElementById("poemTag").textContent =
        poem.tag;

    document.getElementById("poemContent").textContent =
        poem.text;

    document.getElementById("poemCounter").textContent =
        `${currentPoem + 1} / ${poems.length}`;

}


/* ==================================================
   CLOSE POEM
================================================== */

function closePoem() {

    const modal = document.getElementById("poemModal");

    if (!modal) return;

    modal.classList.remove("active");

    document.body.style.overflow = "auto";

}


/* ==================================================
   NEXT POEM
================================================== */

function nextPoem() {

    currentPoem++;

    if (currentPoem >= poems.length) {
        currentPoem = 0;
    }

    showPoem();

}


/* ==================================================
   PREVIOUS POEM
================================================== */

function previousPoem() {

    currentPoem--;

    if (currentPoem < 0) {
        currentPoem = poems.length - 1;
    }

    showPoem();

}


/* ==================================================
   CLOSE WITH ESC
================================================== */

document.addEventListener("keydown", function(event) {

    if (event.key === "Escape") {
        closePoem();
    }

});


/* ==================================================
   CLICK OUTSIDE READER TO CLOSE
================================================== */

document.addEventListener("DOMContentLoaded", function () {
    const poemModal = document.getElementById("poemModal");

    if (!poemModal) return;

    poemModal.addEventListener("click", function(event) {
        if (event.target === this) {
            closePoem();
        }
    });
});
/* ==================================================
   WEBSITE SERVICE POPUP
================================================== */

document.addEventListener("DOMContentLoaded", function () {

    const popup =
        document.getElementById("websitePopup");

    if (!popup) return;


    /* Check whether visitor has already seen popup */

    const popupSeen =
        localStorage.getItem("websitePopupSeen");


    if (!popupSeen) {

        /* Small delay so website loads first */

        setTimeout(function () {

            popup.classList.add("show");

        }, 1800);

    }


    /* Close when clicking outside */

    popup.addEventListener("click", function (event) {

        if (event.target === popup) {

            closeWebsitePopup();

        }

    });

});


/* ---------- Close Popup ---------- */

function closeWebsitePopup() {

    const popup =
        document.getElementById("websitePopup");

    if (!popup) return;


    popup.classList.remove("show");


    /* Remember that visitor has seen it */

    localStorage.setItem(
        "websitePopupSeen",
        "true"
    );

}

/* ==================================================
   MOBILE NAVIGATION
================================================== */

function toggleMobileMenu() {

    const nav =
        document.querySelector(".navbar nav");

    if (!nav) return;

    nav.classList.toggle("mobile-open");
}


/* Close menu after clicking a link */

document.querySelectorAll(".nav-links a").forEach(function(link) {

    link.addEventListener("click", function() {

        const nav =
            document.querySelector(".navbar nav");

        if (nav) {
            nav.classList.remove("mobile-open");
        }

    });

});