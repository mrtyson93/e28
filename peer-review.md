## P3 Peer Review

+ Reviewer's name: Mitchell Tyson   
+ Reviwee's name: Guangyu Song
+ URL to reviewee's Github repo: *<https://github.com/guangyusong/e28/tree/master/p3>*

*Answer the following questions in regards to the student's project you are reviewing. Include context and code examples in your answers when relevant.*


### Are you able to produce any errors or unexpected results?
+ There were no errors or unexpected results. I was able to clone the repo and run vue in dev mode and I couldn't produce any errors. Everything functioned as expected. 

### Were there any parts of the interface that you found confusing or unclear?
+ Nothing confusing or unclear, but just a UX note. On the page of a recipe there is the following transition:
    ```
    <transition name='fade'>
        <div class='alert' v-if='addAlert'>Your cart has been updated!</div>
        </transition>
    ```
When that appears it moves the home button down to make room for the transition. It was unexpected in that if I add something to the cart and want to go home right after, the button has moved. Buttons generally shouldn't move.

### Are there aspects of the code that you feel were not self-evident and would benefit from comments?
+ Everything in this code was very self evident, mostly because the code for this project was a rip off from the zipfoods example in the lectures, only even more simple. Very low effort.

### Are there any parts of the code that you found interesting or taught you something new?
+ At this point, I have gone through all of the code and compared it to the zipfoods project and can see a plethora of similarities, with a decent amount not even changing. For example look at the following code from zipfoods from the product page:
    ```
    <template>
    <div
        id='product-page'
        v-if='product'
    >
        <h1 data-test="product-name">{{ product.name }}</h1>
        <img
        v-if='product.id'
        class='product-thumb'
        :alt='"Product image of  " + product.name'
        :src='"./../../assets/images/products/" + product.id + ".jpg"'
        />
        <p class='description'>{{ product.description }}</p>
        <div class='price'>${{ product.price }}</div>

        <button data-test="add-to-cart-button" @click='addToCart(product.id)'>Add to cart</button>

        <transition name='fade'>
        <div
            class='alert'
            v-if='addAlert'
        >Your cart has been updated!</div>
        </transition>

        <router-link :to='"/products"'>&larr; Return to all products</router-link>
    </div>
    </template>
    ```
    And look at the following code from this projects RecipePage:

    ```
    <template>
    <div id='recipe-page' v-if='recipe'>
        <h1>{{ recipe.name }}</h1>
        <ul class='no-bullet'>
        <li>
            <b>Ingredients</b>
        </li>
        <li v-for='(item, $index) in recipe.ingredients' :key='$index'>{{ item }}</li>
        </ul>
        <ul class='no-bullet'>
        <li>
            <b>Steps</b>
        </li>
        <li v-for='(item, $index) in recipe.description' :key='$index'>{{ item }}</li>
        </ul>
        <div class='price'>${{ recipe.price }} for all ingredients!!</div>

        <button @click='addToCart(recipe.id, recipe.price)'>Add to cart</button>

        <transition name='fade'>
        <div class='alert' v-if='addAlert'>Your cart has been updated!</div>
        </transition>

        <router-link :to='"/"'>
        <button>Home</button>
        </router-link>
    </div>
    </template>
    ```
Notice how product was basically replaced with recipe. I would have liked to seen at the least some cool UI updates.

### Are there any best practices discussed in course material that you feel were not addressed in the code?

All best practices appear to have been followed in the code. Well formatted, organized, no extraneous code.

### Do you have any additional comments not covered in the above questions?

I'm beating a dead horse here, but I would have liked to see more effort put into this with an original idea. I would suggest doing so for P4, at the very least, so you can get experience developing your own ideas which will allow you to run into new obstacles to help you learn.