export default function Contact() {
  return (
    
    <section id="contacto" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Encuéntranos</h2>
        <div className="aspect-w-16 aspect-h-9">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.3121309185453!2d-65.2435641869517!3d-26.79818830979648!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d0687d1051f%3A0x35e9cbcde6a0bbfd!2sCerrajeria%20GUILLERMO!5e0!3m2!1ses-419!2sar!4v1733162009926!5m2!1ses-419!2sar" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen 
            loading="lazy"
          ></iframe>
        </div>
        
        <div className="flex justify-center mt-6">

        
          <svg
            width="28px" height="28px" stroke-width="1.7" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"
            style={{
              animation: 'slide-2 1s infinite alternate both cubic-bezier(1,-.01,0,.98)',
            }}
          >
            <style>
              {`
                @keyframes slide-2 {
                  to {
                    transform: translateY(2px);
                  }
                }
              `}
            </style>
            <path d="M20 10C20 14.4183 12 22 12 22C12 22 4 14.4183 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10Z" stroke="#000000" stroke-width="1.7"></path><path d="M12 11C12.5523 11 13 10.5523 13 10C13 9.44772 12.5523 9 12 9C11.4477 9 11 9.44772 11 10C11 10.5523 11.4477 11 12 11Z" fill="#000000" stroke="#000000" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"></path>
          </svg>
          <p className="font-semibold leading-[30px] ">Colombia 3397 San miguel de Tucumán</p>

        </div>
      </div>
    </section>
  )
}

