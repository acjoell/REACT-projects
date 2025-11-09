export const MyAccount = () => {
  return (
  <div class="bg-gray-100 flex items-center justify-center p-2 py-10">
    <div class="bg-white p-8 rounded-lg shadow-md max-w-md w-full">
      <div class="relative">
        <img src="https://media.licdn.com/dms/image/v2/D4E16AQFv_2aKdf15cQ/profile-displaybackgroundimage-shrink_350_1400/profile-displaybackgroundimage-shrink_350_1400/0/1674484559944?e=1764201600&v=beta&t=z77dAr9S7xOKOz30Vd9heUO5S6IzSDPFjum0uTGMo_o" alt="Banner Profile" class="w-full rounded-t-lg" />
        <img src="https://media.licdn.com/dms/image/v2/D4E03AQE0Fv__cm3QxA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1706747767017?e=1764201600&v=beta&t=--IckGgiMWNaGFQ_Lfw9gfkCCzxgNsmrdRBNzExxA9k" alt="Profile Picture" class="absolute bottom-0 left-2/4 transform -translate-x-1/2 translate-y-1/2 w-24 h-24 rounded-full border-4 border-white" />
      </div>
      <div class="flex items-center mt-14 justify-center">
        <h2 class="text-xl font-bold text-gray-800">Joel Acosta</h2>
      </div>
      <p class="text-gray-700"> Software Engineer </p>
      <div class="flex items-center mt-4 space-x-4">
        <a href="https://github.com/acjoell" class="text-blue-500 hover:underline"> GitHub </a>
        <a href="https://www.linkedin.com/in/acjoell/" class="text-blue-500 hover:underline"> LinkedIn </a>
        <a href="https://acjoell.hashnode.dev/" class="text-blue-500 hover:underline"> Blog </a>
      </div>
      <hr class="my-4 border-t border-gray-300" />
      <div class="flex justify-between text-gray-600 mx-2">
        <div class="text-center">
          <span class="block font-bold text-lg">+3</span>
          <span class="text-xs">Experience</span>
        </div>
        <div class="text-center">
          <span class="block font-bold text-lg">+2</span>
          <span class="text-xs">Big projects</span>
        </div>
        <div class="text-center">
          <span class="block font-bold text-lg">1</span>
          <span class="text-xs">Blog Posts</span>
        </div>
      </div>
    </div>
  </div>
  );
};
