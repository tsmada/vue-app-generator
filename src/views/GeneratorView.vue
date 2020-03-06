<template>
  <div class="max-w-md mx-auto flex p-6 bg-gray rounded-lg shadow-xl">
    <div class="m-1 pt-1">
      <h4 class="text-xl text-black-900 leading-tight text-center text-bold">Generate App Idea</h4>
      <p class="p-4"/>
      <span class="w-auto">
        <input
          class="text-gray-600 rounded leading-normal p-4 placeholder-gray-500 border outline-none m-1" autofocus placeholder="Related to"
          v-model="searchText"
          v-on:input="search"
          />
        <button
          v-show="searchText"
          type="button"
          v-on:click="resetQuery"
          class="border rounded outline-none p-4 hover:cursor-pointer m-1 hover:bg-gray-200 focus:outline-none">Reset <img class="inline-block" src="https://icon.now.sh/done" /></button>
        <button
          v-show="!searchText"
          type="button"
          v-on:click="search"
          class="border rounded outline-none p-4 hover:cursor-pointer m-1 hover:bg-gray-200 focus:outline-none">Submit <img class="inline-block" src="https://icon.now.sh/done" /></button>
      </span>
      <div id="results" class="w-auto p-5" v-if="searchText">
        <div id="content" class="m-2 p-2 border rounded gray-100 text-center shadow-md" v-for="(appidea, index) in results" :key="index">
          <p class="text-base hover:cursor-pointer">{{appidea}}</p>
        </div>
        <p v-if="loading" class="text-base">Loading...</p>
        <p v-show="!results || !results.length" class="text-base">No ideas could be generated. Why don't you use that big brain?</p>
      </div>
    </div>
  </div>
</template>

<script>
import industrydata from '@/assets/naics2017.json'
import _ from 'lodash'


export default {
  name: 'GeneratorPage',
  components: {
  },
  data() {
    return {
      searchText: '',
      results: [],
      loading: false,
    }
  },
  watch: {
    searchText: function () {
      this._search()
    }},
  methods: {
    resetQuery() {
      this.searchText = ''
      return this.searchText
    },
    search() {
      this.loading = true
      _.debounce(function(e) {
        this.filterKey = e.target.value
      }, 250)
    },
    _search() {
      var results = industrydata.reduce((result, item) => {
        if (item["INDEX ITEM DESCRIPTION"].indexOf(this.searchText) != -1) {
          result.push(item["INDEX ITEM DESCRIPTION"])
        }
        return result;
      }, []);
      this.results = results
      this.loading = false
      return results;
    }
  },
}
</script>