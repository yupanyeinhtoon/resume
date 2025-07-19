const sideContent = document.getElementById('sideContent');

document.getElementById('aboutBtn').addEventListener('click', () => {
    sideContent.innerHTML = `
    <div>
      <h2 class="text-2xl font-bold mb-2">My Story</h2>
      <p class="text-gray-700 mb-2">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
      <h3 class="text-xl font-semibold mb-4">I Do Web Design & Development since I was 18 Years Old</h3>
      <p class="text-gray-700 mb-2">
        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      </p>
      <p class="text-gray-700">
        Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
      </p>
    </div>
  `;
});

document.getElementById('skillsBtn').addEventListener('click', () => {
    sideContent.innerHTML = `
    <h3 class="text-xl font-semibold mb-4">Skills</h3>
     <p class="text-gray-700 leading-relaxed">
      Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
      Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
    </p>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4 mt-4">
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">JavaScript</span>
          <span class="text-gray-700 font-medium">80%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 80%;"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">CSS</span>
          <span class="text-gray-700 font-medium">70%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 70%;"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">Python</span>
          <span class="text-gray-700 font-medium">75%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 75%;"></div>
        </div>
      </div>
      <div>
        <div class="flex justify-between mb-1">
          <span class="text-gray-700 font-medium">AWS</span>
          <span class="text-gray-700 font-medium">60%</span>
        </div>
        <div class="w-full bg-gray-300 rounded h-4">
          <div class="bg-[#0779E4] h-4 rounded" style="width: 60%;"></div>
        </div>
      </div>
    </div>

   
  `;
});

document.getElementById('experienceBtn').addEventListener('click', () => {
    sideContent.innerHTML = `
    <h3 class="text-xl font-semibold mb-4">Experience</h3>

    <div class="mb-4">
      <h4 class="font-semibold text-gray-800">Art & Creative Director</h4>
      <span class="text-sm text-gray-600">2014-2015 Google Inc.</span>
      <p class="text-gray-700">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>

    <div class="mb-4">
      <h4 class="font-semibold text-gray-800">Wordpress Developer</h4>
      <span class="text-sm text-gray-600">2015-2017 Google Inc.</span>
      <p class="text-gray-700">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>

    <div>
      <h4 class="font-semibold text-gray-800">UI/UX Designer</h4>
      <span class="text-sm text-gray-600">2018-2020 Google Inc.</span>
      <p class="text-gray-700">A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
    </div>
  `;
});