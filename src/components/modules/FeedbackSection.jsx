import React, { useEffect, useMemo, useState } from 'react';

export default function FeedbackSection({ data = {}, courseId = 'default' }) {
  const { title, description, questions: incomingQuestions } = data || {};
  
  const defaultQuestions = useMemo(() => ([
    { id: 'q1', type: 'radio', title: 'Satisfação geral', subtitle: 'Como você avalia sua experiência geral com o sistema?', options: ['Excelente', 'Boa', 'Regular', 'Ruim', 'Péssima'] },
    { id: 'q2', type: 'radio', title: 'Facilidade de uso', subtitle: 'O sistema é fácil de usar?', options: ['Sim, totalmente', 'Mais ou menos', 'Não muito', 'Nada fácil'] },
    { id: 'q3', type: 'radio', title: 'Velocidade e desempenho', subtitle: 'Como você avalia o tempo de resposta do sistema?', options: ['Muito rápido', 'Razoável', 'Um pouco lento', 'Muito lento'] },
    { id: 'q4', type: 'radio', title: 'Design e aparência', subtitle: 'O design do sistema é agradável?', options: ['Sim, gostei bastante', 'É bom, mas pode melhorar', 'Indiferente', 'Não gostei'] },
    { id: 'q5', type: 'radio', title: 'Funcionalidades', subtitle: 'O sistema possui todas as funcionalidades que você precisa?', options: ['Sim', 'Quase todas', 'Faltam algumas importantes', 'Não, faltam várias'] },
    { id: 'q6', type: 'radio', title: 'Suporte e comunicação', subtitle: 'Como você avalia o suporte ou atendimento relacionado ao sistema?', options: ['Excelente', 'Bom', 'Regular', 'Ruim'] },
    { id: 'q7', type: 'radio', title: 'Recomendação', subtitle: 'Você recomendaria o sistema para outras pessoas?', options: ['Com certeza', 'Talvez', 'Não sei', 'Provavelmente não'] },
    { id: 't1', type: 'text', title: 'Sugestões de melhoria', subtitle: 'O que você acha que poderia ser melhorado no sistema?' },
    { id: 't2', type: 'text', title: 'Pontos positivos', subtitle: 'O que você mais gostou no sistema?' },
    { id: 't3', type: 'text', title: 'Dificuldades encontradas', subtitle: 'Você encontrou alguma dificuldade ou erro ao usar o sistema? Se sim, descreva.' },
    { id: 't4', type: 'text', title: 'Experiência geral', subtitle: 'Descreva sua experiência usando o sistema em poucas palavras.' },
    { id: 't5', type: 'text', title: 'Novas ideias', subtitle: 'Que novas funcionalidades você gostaria de ver no sistema?' },
    { id: 't6', type: 'text', title: 'Comentários adicionais', subtitle: 'Há algo mais que gostaria de comentar sobre o sistema?' }
  ]), []);

  const storageKey = `magitech.feedback.config.${courseId}`;

  const [editMode, setEditMode] = useState(false);
  const [questions, setQuestions] = useState(() => incomingQuestions || defaultQuestions);
  const [responses, setResponses] = useState({});
  const [newType, setNewType] = useState('radio');
  const [submitted, setSubmitted] = useState(false);
  const [recipientEmail, setRecipientEmail] = useState('suportemagitech@gmail.com');
  const [sending, setSending] = useState(false);
  const [backendUrl, setBackendUrl] = useState('http://localhost:3001/api/send-feedback');

  useEffect(() => {
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.questions && Array.isArray(parsed.questions) && parsed.questions.length > 0) {
          setQuestions(parsed.questions);
        }
        if (parsed.recipientEmail) {
          setRecipientEmail(parsed.recipientEmail);
        }
        if (parsed.backendUrl) {
          setBackendUrl(parsed.backendUrl);
        }
      }
    } catch {}
  }, [storageKey]);

  useEffect(() => {
    if (incomingQuestions && Array.isArray(incomingQuestions) && incomingQuestions.length > 0) {
      setQuestions(incomingQuestions);
    }
  }, [incomingQuestions]);

  const persist = (q, email, url) => {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ 
        questions: q, 
        recipientEmail: email || recipientEmail,
        backendUrl: url || backendUrl
      }));
    } catch {}
  };

  const handleRadioChange = (qid, value) => {
    setResponses((r) => ({ ...r, [qid]: value }));
  };

  const handleTextChange = (qid, value) => {
    setResponses((r) => ({ ...r, [qid]: value }));
  };

  const addQuestion = () => {
    const idBase = newType === 'radio' ? 'q' : 't';
    const newQ = newType === 'radio'
      ? { id: `${idBase}${Date.now()}`, type: 'radio', title: 'Nova pergunta', subtitle: '', options: ['Opção 1', 'Opção 2'] }
      : { id: `${idBase}${Date.now()}`, type: 'text', title: 'Nova pergunta aberta', subtitle: '' };
    const q = [...questions, newQ];
    setQuestions(q);
    persist(q, recipientEmail, backendUrl);
  };

  const updateQuestionField = (qid, field, value) => {
    const q = questions.map((item) => (item.id === qid ? { ...item, [field]: value } : item));
    setQuestions(q);
  };

  const addOption = (qid) => {
    const q = questions.map((item) => {
      if (item.id === qid && item.type === 'radio') {
        return { ...item, options: [...item.options, `Opção ${item.options.length + 1}`] };
      }
      return item;
    });
    setQuestions(q);
  };

  const updateOption = (qid, index, value) => {
    const q = questions.map((item) => {
      if (item.id === qid && item.type === 'radio') {
        const opts = [...item.options];
        opts[index] = value;
        return { ...item, options: opts };
      }
      return item;
    });
    setQuestions(q);
  };

  const removeOption = (qid, index) => {
    const q = questions.map((item) => {
      if (item.id === qid && item.type === 'radio') {
        const opts = item.options.filter((_, i) => i !== index);
        return { ...item, options: opts.length ? opts : ['Opção 1'] };
      }
      return item;
    });
    setQuestions(q);
  };

  const removeQuestion = (qid) => {
    const q = questions.filter((item) => item.id !== qid);
    setQuestions(q);
    persist(q, recipientEmail, backendUrl);
    setResponses((r) => {
      const { [qid]: _, ...rest } = r;
      return rest;
    });
  };

  const saveConfig = () => {
    persist(questions, recipientEmail, backendUrl);
    setEditMode(false);
  };

  const submitFeedback = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      const formattedResponses = questions.map((q, index) => ({
        question: q.title,
        subtitle: q.subtitle || '',
        answer: responses[q.id] || '(não respondido)'
      }));

      const response = await fetch(backendUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          courseId: courseId,
          recipientEmail: recipientEmail,
          responses: formattedResponses,
          timestamp: new Date().toLocaleString('pt-BR')
        })
      });

      if (!response.ok) {
        throw new Error(`Erro HTTP: ${response.status}`);
      }

      const result = await response.json();
      setSubmitted(true);
      setSending(false);
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
      setSending(false);
      alert(`Erro ao enviar feedback: ${error.message}\n\nVerifique se o backend está rodando em: ${backendUrl}`);
    }
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-white text-2xl font-bold">{title || 'Feedback, sua avaliação é importante para nós!'}</h1>
        <p className="text-white/80 leading-relaxed max-w-prose">{description || 'Queremos ouvir sua opinião para que possamos melhorar e proporcionar uma experiência ainda mais imersiva e envolvente para você.'}</p>
      </div>

      <form onSubmit={submitFeedback} className="space-y-6">
        {questions.map((q) => (
          <div key={q.id} className="w-full border border-white/10 rounded-lg p-4 bg-white/5">
            <div className="mb-3">
              <h3 className="text-white font-semibold">{q.title}</h3>
              {q.subtitle ? <p className="text-white/70 text-sm">{q.subtitle}</p> : null}
            </div>

            {q.type === 'radio' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {q.options.map((opt, idx) => (
                  <label key={idx} className="flex items-center gap-2 text-white/90 cursor-pointer hover:text-white">
                    <input type="radio" name={q.id} className="accent-white" checked={responses[q.id] === opt} onChange={() => handleRadioChange(q.id, opt)} />
                    <span>{opt}</span>
                  </label>
                ))}
              </div>
            )}

            {q.type === 'text' && (
              <textarea value={responses[q.id] || ''} onChange={(e) => handleTextChange(q.id, e.target.value)} className="w-full min-h-28 bg-transparent border border-white/20 rounded-md p-3 text-white resize-y" placeholder="Digite aqui sua resposta..." />
            )}
          </div>
        ))}

        <button 
          type="submit" 
          disabled={sending}
          className="px-6 py-3 rounded-md bg-white text-black font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-200 transition-colors shadow-lg"
        >
          {sending ? 'Enviando...' : 'Enviar Feedback'}
        </button>

        {submitted && (
          <div className="p-4 bg-green-500/20 border border-green-400/40 rounded-lg">
            <p className="text-green-400 font-semibold flex items-center gap-2">
              <span>✅</span>
              <span>Email enviado com sucesso!</span>
            </p>
          </div>
        )}

        <div className="mt-4 p-3 bg-white/5 border border-white/10 rounded-md">
          <p className="text-white/60 text-xs flex items-start gap-2">
            <span>
              Email será <strong className="text-green-400">enviado automaticamente via Gmail</strong>
            </span>
          </p>
        </div>
      </form>
    </div>
  );
}