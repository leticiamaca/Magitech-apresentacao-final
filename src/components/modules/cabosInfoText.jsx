import react from 'react';


export default function CabosText(){
    return (
    <>
    <section className="w-full bg-gradient-to-b from-[#4DE0C615] via-[#000] to-[#29141F] text-gray-100 py-10 px-6 lg:px-24 leading-relaxed">
      <div className="max-w-4xl mx-auto">
        {/* Título principal */}
        <h1 className="text-3xl md:text-4xl font-bold text-teal-400 mb-6">
          Cabos Cat 5e e suas características
        </h1>

        {/* Texto introdutório */}
        <p className="text-lg text-gray-300 mb-6">
          O cabo <span className="text-teal-400 font-semibold">Cat 5e (Categoria 5 Enhanced)</span> é uma evolução do antigo Cat 5, sendo amplamente utilizado em redes Ethernet domésticas e corporativas. 
          Ele é composto por quatro pares trançados de fios de cobre, o que ajuda a reduzir interferências eletromagnéticas e garantir uma transmissão de dados mais estável. 
          O Cat 5e é capaz de alcançar velocidades de até <span className="text-teal-400 font-semibold">1 Gbps</span> e frequências de até <span className="text-teal-400 font-semibold">100 MHz</span>, o que o torna adequado para a maioria das aplicações de rede locais (LAN).
        </p>

        {/* Seção de diferenças */}
        <h2 className="text-2xl font-semibold text-teal-300 mt-8 mb-4">
          Diferenças entre categorias de cabos
        </h2>

        <p className="text-gray-300 mb-3">
          As categorias de cabos de rede (Cat 5, 5e, 6, 6a, 7, 8 etc.) se diferenciam principalmente pela capacidade de transmissão, frequência máxima suportada e nível de blindagem contra interferências.
        </p>

        <ul className="space-y-2 mb-6">
          <li><span className="text-teal-400 font-semibold">Cat 5:</span> Velocidade até 100 Mbps, frequência de 100 MHz — praticamente obsoleto.</li>
          <li><span className="text-teal-400 font-semibold">Cat 5e:</span> Suporte até 1 Gbps, 100 MHz — ainda muito usado em instalações domésticas e comerciais simples.</li>
          <li><span className="text-teal-400 font-semibold">Cat 6:</span> Suporte até 10 Gbps em curtas distâncias (até 55 m), frequência de 250 MHz.</li>
          <li><span className="text-teal-400 font-semibold">Cat 6a:</span> Frequência de 500 MHz, ideal para redes 10 Gigabit mais extensas.</li>
          <li><span className="text-teal-400 font-semibold">Cat 7 e 8:</span> Usados em data centers e aplicações de alta performance, com blindagens e frequências superiores.</li>
        </ul>

        <p className="text-gray-300 mb-8 italic">
          Quanto maior a categoria, melhor a qualidade do sinal e maior a velocidade suportada — mas também aumenta o custo e a rigidez do cabo.
        </p>

        {/* Seção de crimpagem */}
        <h2 className="text-2xl font-semibold text-teal-300 mb-4">
          Tipos de crimpagem
        </h2>

        <p className="text-gray-300 mb-3">
          A crimpagem é o processo de fixar o conector RJ-45 nas extremidades do cabo, garantindo o contato correto entre os fios e os pinos. Existem dois padrões principais:
        </p>

        <ul className="space-y-2 mb-6">
          <li><span className="text-teal-400 font-semibold">T568A:</span> Usado em instalações mais antigas ou com exigências normativas específicas.</li>
          <li><span className="text-teal-400 font-semibold">T568B:</span> O mais utilizado atualmente em redes domésticas e comerciais.</li>
        </ul>

        <p className="text-gray-300 mb-3">
          A ordem dos fios nos conectores é o que diferencia esses dois padrões. O objetivo é manter os pares trançados alinhados para evitar interferências.
        </p>

        <p className="text-gray-300 mb-2">Além disso, existem dois tipos de cabos crimpados:</p>

        <ul className="space-y-2">
          <li><span className="text-teal-400 font-semibold">Cabo direto (straight-through):</span> usado para conectar dispositivos diferentes (computador → switch/roteador). Ambos os lados seguem o mesmo padrão, geralmente T568B.</li>
          <li><span className="text-teal-400 font-semibold">Cabo crossover:</span> conecta dispositivos iguais (computador → computador), com padrões diferentes em cada ponta (T568A e T568B).</li>
        </ul>
      </div>
    </section>
    </>
    )
}