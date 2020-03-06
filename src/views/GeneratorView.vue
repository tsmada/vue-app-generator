<template>
  <div class="max-w-md mx-auto flex p-6 bg-gray rounded-lg shadow-xl">
    <div class="m-1 pt-1">
      <h4 class="text-xl text-black-900 leading-tight text-center text-bold">Generate App Idea</h4>
      <p class="p-4"/>
      <span class="w-auto">
        <input
          class="text-gray-600 rounded leading-normal p-4 placeholder-gray-500 border outline-none m-1" autofocus placeholder="Related to"
          v-model="searchText"
          />
        <button
          type="button"
          class="border rounded outline-none p-4 hover:cursor-pointer m-1 hover:bg-gray-200 focus:outline-none">Submit <img class="inline-block" src="https://icon.now.sh/done" /></button>
      </span>
      <div id="results" class="w-auto p-5 transition-transform duration-900 max-h-full ease-in" v-if="searchText">
        <div id="content" class="m-1 p-1" v-for="(appidea, index) in industries" :key="index">
          <p class="text-base">{{appidea}}</p>
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import industrydata from '@/assets/naics2017.json'


export default {
  name: 'GeneratorPage',
  components: {
  },
  props: {
    loading: Boolean,
    buttontext: String,
  },
  data() {
    return {
      results: [
      ],
      searchText: '',
    }
  },
  computed: {
    industries() {
      var results = industrydata.reduce((result, item) => {
        if (item["INDEX ITEM DESCRIPTION"].indexOf(this.searchText) != -1) {
          result.push(item["INDEX ITEM DESCRIPTION"])
        }
        return result;
      }, []);
      return results;
    },
  }
}
</script>