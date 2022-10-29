<template>
  <button type="button" class="emoji" ref="emojiBtn">
    {{ modelValue ? modelValue.emoji : "Select" }}
  </button>
  <VeeField
    as="textarea"
    name="comment"
    class="block w-full py-1.5 px-3 text-gray-800 border border-gray-300 transition duration-500 focus:outline-none focus:border-black rounded mb-4"
    placeholder="Your comment here..."
    :value="modelValue.emoji"
  >
    {{ modelValue.emoji }}
  </VeeField>
</template>

<script>
import { EmojiButton } from "@joeattardi/emoji-button";

export default {
  name: "EmojiInput",
  props: {
    modelValue: {
      required: true,
    },
    options: {
      default() {
        return {};
      },
    },
  },
  mounted() {
    const picker = new EmojiButton(this.options);
    const btn = this.$refs.emojiBtn;

    picker.on("emoji", (emoji) => {
      this.$emit("update:modelValue", emoji);
    });

    btn.addEventListener("click", () => {
      picker.togglePicker(btn);
    });
  },
};
</script>
