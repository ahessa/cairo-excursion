export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201093302055"
      target="_blank"
      rel="noopener noreferrer"
      className="
      fixed
      bottom-6
      right-6
      z-[9999]
      w-16
      h-16
      rounded-full
      bg-[#25D366]
      flex
      items-center
      justify-center
      shadow-2xl
      hover:scale-110
      duration-300
      "
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
        className="w-9 h-9"
      />
    </a>
  );
}
