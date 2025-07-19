const sideContent = document.getElementById('sideContent');
const buttons = document.querySelectorAll('#aboutBtn, #skillsBtn, #experienceBtn');

const aboutContent = `
  <div>
      <h2 class="text-2xl font-bold mb-2">My Story</h2>
      <p class="text-gray-700 mb-2 indent-8">
         I graduated from Singapore Management University with a Bachelor of Science in Information Systems Management. Over the past 11 years, I’ve worked in tech sectors across Myanmar, Singapore, and Australia, building strong technical and soft skills. I’ve developed and maintained numerous projects that added real value to businesses. My strengths lie in improving system performance, designing scalable solutions, and collaborating with cross-functional teams to meet business needs through seamless system integration.
      </p>
      <p class="text-gray-700 mb-2 indent-8">
       I have deep domain knowledge in the Singapore telecommunications sector from nearly six years of experience with working in local telcos, and I’ve also gained valuable insights into the Australian disability services sector through my recent work.
      </p>
      <p class="text-gray-700 mb-2 indent-8">
      With years of hands-on experience and deep domain knowledge in multiple sectors, I’m passionate about using technology to solve real-world problems—bringing value to both users and businesses through thoughtful, scalable solutions.
      </p>
    </div>
`;

const skillsContent = `
    <h3 class="text-xl font-semibold mb-4">Skills</h3>
     <p class="text-gray-700 leading-relaxed">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4 mt-4">
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">JavaScript (VueJS, AngularJS)</span>
          <span class="text-gray-700 font-medium">75%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 75%;"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">CSS (Tailwind)</span>
          <span class="text-gray-700 font-medium">85%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 85%;"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">Java</span>
          <span class="text-gray-700 font-medium">80%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 80%;"></div>
        </div>
      </div>

      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">PHP (Laravel)</span>
          <span class="text-gray-700 font-medium">70%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 70%;"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">Cloud (AWS, Azure)</span>
          <span class="text-gray-700 font-medium">80%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 80%;"></div>
        </div>
      </div>

      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">Sys Administration (Windows,Linux)</span>
          <span class="text-gray-700 font-medium">75%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 75%;"></div>
        </div>
      </div>

      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">IT Support (Exchange, Intune, Office365)</span>
          <span class="text-gray-700 font-medium">70%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 70%;"></div>
        </div>
      </div>

      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">Mobile App Development (IOS/Android)</span>
          <span class="text-gray-700 font-medium">75%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 75%;"></div>
        </div>
      </div>

      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">Product Catalogue System (MEC)</span>
          <span class="text-gray-700 font-medium">90%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 90%;"></div>
        </div>
      </div>

      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">CMS (Idempiere)</span>
          <span class="text-gray-700 font-medium">80%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 80%;"></div>
        </div>
      </div>
    </div>
  `;

const experienceContent = `
    <h3 class="text-xl font-semibold mb-3">Experience</h3>

    <div class="mb-2">
      <h4 class="font-semibold text-gray-800">Systems Adminitrator / Developer (DevOps Engineer)</h4>
      <span class="text-sm text-gray-600">2024-Present Community Accommodation and Respite Agency Inc (Australia)</span>
      <p class="text-gray-700">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>

    <div class="mb-2">
      <h4 class="font-semibold text-gray-800">Senior Solutions Designer</h4>
      <span class="text-sm text-gray-600">2021-2024 Singapore Telecommunications Limited (Singapore)</span>
      <p class="text-gray-700">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>

    <div class="mb-2">
      <h4 class="font-semibold text-gray-800">Senior Software Engineer</h4>
      <span class="text-sm text-gray-600">2020-2021 Infinit Pte Ltd (Singapore)</span>
      <p class="text-gray-700">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>

    <div class="mb-2">
      <h4 class="font-semibold text-gray-800">Senior Systems Analyst</h4>
      <span class="text-sm text-gray-600">2018-2020 M1 Limited (Singapore)</span>
      <p class="text-gray-700">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>

    <div class="mb-2">
      <h4 class="font-semibold text-gray-800">Senior Software Engineer</h4>
      <span class="text-sm text-gray-600">2016-2018 Raptech Pte Ltd (Singapore)</span>
      <p class="text-gray-700">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>

    <div class="mb-2">
      <h4 class="font-semibold text-gray-800">Senior Software Engineer</h4>
      <span class="text-sm text-gray-600">2015-2016 Application Auth Pte Ltd (Myanmar)</span>
      <p class="text-gray-700">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>
  `;


function setActiveButton(selectedBtn) {
    buttons.forEach(btn => {
        // Remove selected styles
        btn.classList.remove('bg-yellow-700', 'text-gray-900');
        // Add default styles back
        btn.classList.add('bg-[#16507a]', 'text-white');
    });

    // Remove default styles from selected button
    selectedBtn.classList.remove('bg-[#16507a]', 'text-white');
    // Add selected styles
    selectedBtn.classList.add('bg-yellow-700', 'text-white');
}
function setActiveButton(selectedBtn) {
  buttons.forEach(btn => {
    // Remove selected styles
    btn.classList.remove('bg-yellow-700', 'text-gray-900');
    // Add default styles back
    btn.classList.add('bg-[#16507a]', 'text-white');
  });

  // Remove default styles from selected button
  selectedBtn.classList.remove('bg-[#16507a]', 'text-white');
  // Add selected styles
  selectedBtn.classList.add('bg-yellow-700', 'text-white');
}

document.getElementById('aboutBtn').addEventListener('click', (e) => {
  sideContent.innerHTML = aboutContent;
  setActiveButton(e.target);
});

document.getElementById('skillsBtn').addEventListener('click', (e) => {
  sideContent.innerHTML = skillsContent;
  setActiveButton(e.target);
});

document.getElementById('experienceBtn').addEventListener('click', (e) => {
  sideContent.innerHTML = experienceContent;
  setActiveButton(e.target);
});

// Default load
window.addEventListener('DOMContentLoaded', () => {
  sideContent.innerHTML = aboutContent;
  setActiveButton(document.getElementById('aboutBtn'));
});