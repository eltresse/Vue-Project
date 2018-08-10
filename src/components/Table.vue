<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    hide-actions
    class="elevation-1"
  >
    <template slot="items" slot-scope="props">
      <td>{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.name }}</td>
      <td class="text-xs-right">{{ props.item.email }}</td>
      <td class="text-xs-right">{{ props.item.company.name }}</td>
      <td class="text-xs-right">{{ props.item.address.city }}</td>
      <td class="text-xs-right">{{ props.item.phone }}</td>
    </template>
  </v-data-table>
</template>

<script>
  export default {
    name: 'Table',
    data () {
      return {
    
        headers: [
          {
            text: 'ID',
            align: 'left',
            sortable: false,
            value: 'name'
          },
          { text: 'Name', value: 'name' },
          { text: 'Email (g)', value: 'email' },
          { text: 'Company (g)', value: 'company' },
          { text: 'Address (g)', value: 'address' },
          { text: 'Phone (%)', value: 'phone' }
        ],
        desserts: [
          
        ]
      }
    },
     created: function(){
    this.$http.get('https://jsonplaceholder.typicode.com/users')
    .then(function(res){
      this.desserts = res.data;
      console.log(this.desserts);
    });
  } 

  }
</script>