import type { ReactNode } from 'react';
import { useMemo, useState } from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import {
  CheckCircle,
  X,
  Users,
  ReceiptText,
  DollarSign,
  Clock,
  ShieldCheck,
  TrendingUp,
  Store,
  Smartphone,
  Bell,
  Search,
} from 'lucide-react';

import styles from './index.module.css';

const features = [
  {
    icon: Users,
    title: 'Controle de fiados e clientes',
    description: 'Gerencie todos os seus clientes e seus débitos em um só lugar.',
  },
  {
    icon: ReceiptText,
    title: 'Registro de vendas e pagamentos',
    description: 'Registre vendas e acompanhe todos os pagamentos recebidos.',
  },
  {
    icon: DollarSign,
    title: 'Pagamentos parciais',
    description: 'Controle pagamentos parcelados e parciais com facilidade.',
  },
  {
    icon: Clock,
    title: 'Histórico completo',
    description: 'Acesse todo o histórico de transações de cada cliente.',
  },
  {
    icon: CheckCircle,
    title: 'Organização simples e rápida',
    description: 'Interface intuitiva, feita para economizar seu tempo.',
  },
  {
    icon: Smartphone,
    title: 'Tudo no celular',
    description: 'Acesse de qualquer lugar, a qualquer momento.',
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: 'Menos prejuízo',
    description: 'Evite perdas por esquecimento ou cobranças mal organizadas.',
  },
  {
    icon: CheckCircle,
    title: 'Mais organização',
    description: 'Mantenha tudo registrado e organizado.',
  },
  {
    icon: TrendingUp,
    title: 'Mais controle financeiro',
    description: 'Saiba exatamente quanto tem para receber.',
  },
  {
    icon: Store,
    title: 'Mais profissionalismo',
    description: 'Passe mais confiança para seus clientes.',
  },
  {
    icon: Clock,
    title: 'Mais tempo para vender',
    description: 'Menos tempo perdido com anotações e bagunça.',
  },
  {
    icon: DollarSign,
    title: 'Melhore seu fluxo de caixa',
    description: 'Receba em dia e planeje melhor seu negócio.',
  },
];

const audiences = [
  {
    icon: Store,
    label: 'Lojas',
  },
  {
    icon: ReceiptText,
    label: 'Mercados',
  },
  {
    icon: Bell,
    label: 'Bares',
  },
  {
    icon: Search,
    label: 'Salões',
  },
];

const searchSuggestions = [
  {
    title: 'Como cadastrar um cliente',
    description: 'Aprenda a salvar um novo cliente no Fiado Zap.',
    href: '/docs/clientes/cadastrar-cliente',
    keywords: ['cliente', 'cadastrar cliente', 'novo cliente', 'cadastro'],
  },
  {
    title: 'Como anotar uma venda fiada',
    description: 'Veja como registrar uma venda para receber depois.',
    href: '/docs/vendas/anotar-venda-fiada',
    keywords: ['venda', 'fiado', 'venda fiada', 'registrar venda'],
  },
  {
    title: 'Como marcar uma venda como paga',
    description: 'Aprenda a dar baixa quando o cliente pagar.',
    href: '/docs/vendas/marcar-como-paga',
    keywords: ['pago', 'pagamento', 'marcar como pago', 'dar baixa'],
  },
  {
    title: 'Como parcelar uma venda',
    description: 'Entenda como registrar vendas parceladas.',
    href: '/docs/vendas/parcelar-venda',
    keywords: ['parcelar', 'parcela', 'parcelamento', 'venda parcelada'],
  },
  {
    title: 'Como recuperar minha senha',
    description: 'Veja como recuperar o acesso à sua conta.',
    href: '/docs/conta-e-senha/recuperar-senha',
    keywords: ['senha', 'recuperar senha', 'esqueci minha senha', 'login'],
  },
  {
    title: 'Não recebi o e-mail de recuperação',
    description: 'Saiba o que fazer quando o e-mail não chegar.',
    href: '/docs/conta-e-senha/nao-recebi-email',
    keywords: ['email', 'e-mail', 'recuperação', 'não recebi'],
  },
  {
    title: 'Como funciona o plano grátis',
    description: 'Entenda os limites e recursos do plano gratuito.',
    href: '/docs/planos/plano-gratis',
    keywords: ['plano grátis', 'gratis', 'free', 'limite'],
  },
  {
    title: 'Como remover anúncios',
    description: 'Veja como assinar um plano pago e remover os anúncios.',
    href: '/docs/planos/remover-anuncios',
    keywords: ['anúncio', 'anuncios', 'remover anúncios', 'premium', 'plano pago'],
  },
];

export default function Home(): ReactNode {

  const [searchText, setSearchText] = useState('');

  const filteredSuggestions = useMemo(() => {
    const query = searchText.trim().toLowerCase();

    if (!query) {
      return searchSuggestions.slice(0, 4);
    }

    return searchSuggestions
      .filter((item) => {
        const searchableText = [
          item.title,
          item.description,
          ...item.keywords,
        ]
          .join(' ')
          .toLowerCase();

        return searchableText.includes(query);
      })
      .slice(0, 5);
  }, [searchText]);

  return (
    <Layout
      title="Ajuda Fiado Zap"
      description="Central de ajuda do Fiado Zap. Aprenda a controlar clientes, vendas fiadas, pagamentos e cobranças pelo celular."
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.heroContent}>
              <div className={styles.badge}>
                <span />
                Central de ajuda simplificada
              </div>

              <h1>Aprenda a usar o Fiado Zap de forma simples</h1>

              <p>
                Veja tutoriais rápidos para cadastrar clientes, registrar vendas,
                controlar pagamentos e organizar seus fiados pelo celular.
              </p>

              <div className={styles.searchBox}>
                <div className={styles.searchInputWrapper}>
                  <Search size={22} />
                  <input
                    type="search"
                    value={searchText}
                    onChange={(event) => setSearchText(event.target.value)}
                    placeholder="Busque por cliente, venda, senha, pagamento..."
                    aria-label="Buscar ajuda"
                  />
                </div>

                <div className={styles.searchSuggestions}>
                  {filteredSuggestions.length > 0 ? (
                    filteredSuggestions.map((item) => (
                      <Link
                        key={item.href}
                        to={item.href}
                        className={styles.searchSuggestionItem}
                      >
                        <strong>{item.title}</strong>
                        <span>{item.description}</span>
                      </Link>
                    ))
                  ) : (
                    <div className={styles.emptySearch}>
                      Nenhuma sugestão encontrada. Tente buscar por cliente, venda, senha ou plano.
                    </div>
                  )}
                </div>
              </div>

              <div className={styles.quickSearches}>
                <span>Mais buscados:</span>
                <Link to="/docs/clientes/cadastrar-cliente">Cadastrar cliente</Link>
                <Link to="/docs/vendas/anotar-venda-fiada">Anotar venda</Link>
                <Link to="/docs/conta-e-senha/recuperar-senha">Recuperar senha</Link>
              </div>

              <div className={styles.heroActions}>
                <Link className={styles.primaryButton} to="/docs/intro">
                  Começar agora
                </Link>

                <Link className={styles.secondaryButton} to="/docs/comece-aqui/o-que-e-o-fiado-zap">
                  O que é o Fiado Zap?
                </Link>
              </div>
            </div>

            <div className={styles.heroImageWrapper}>
              <div className={styles.phoneGlow} />

              <img
                className={styles.heroImage}
                src="/img/app-preview.png"
                alt="Aplicativo Fiado Zap no celular"
              />
            </div>
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Chega de caderno, bagunça e esquecimento</h2>
            <p>
              Com o Fiado Zap, você controla quem está devendo, quanto já foi pago,
              datas e histórico completo de vendas.
            </p>
          </div>

          <div className={styles.compareGrid}>
            <div className={styles.badCard}>
              <X size={36} />
              <h3>Sem controle</h3>
              <ul>
                <li>Cadernos perdidos ou bagunçados</li>
                <li>Esquecimento de quem deve</li>
                <li>Prejuízos por falta de cobrança</li>
                <li>Desorganização financeira</li>
              </ul>
            </div>

            <div className={styles.goodCard}>
              <CheckCircle size={36} />
              <h3>Com Fiado Zap</h3>
              <ul>
                <li>Tudo registrado no celular</li>
                <li>Histórico completo sempre à mão</li>
                <li>Controle total de pagamentos</li>
                <li>Organização profissional</li>
              </ul>
            </div>
          </div>
        </section>

        <section className={styles.graySection}>
          <div className={styles.sectionHeader}>
            <h2>Funcionalidades que facilitam seu dia a dia</h2>
            <p>Tudo que você precisa para gerenciar seu negócio.</p>
          </div>

          <div className={styles.cardGrid}>
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <article className={styles.featureCard} key={feature.title}>
                  <div className={styles.iconBox}>
                    <Icon size={22} />
                  </div>

                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Como funciona</h2>
            <p>Simples, rápido e eficiente.</p>
          </div>

          <div className={styles.steps}>
            <div className={styles.step}>
              <span>1</span>
              <h3>Cadastre seus clientes</h3>
              <p>Adicione os clientes que compram fiado no seu negócio.</p>
            </div>

            <div className={styles.stepDivider}>›</div>

            <div className={styles.step}>
              <span>2</span>
              <h3>Registre vendas e pagamentos</h3>
              <p>Anote cada venda e pagamento recebido de forma rápida.</p>
            </div>

            <div className={styles.stepDivider}>›</div>

            <div className={styles.step}>
              <span>3</span>
              <h3>Acompanhe quem está devendo</h3>
              <p>Veja instantaneamente quem deve, quanto e quando vence.</p>
            </div>
          </div>
        </section>

        <section className={styles.greenLightSection}>
          <div className={styles.sectionHeader}>
            <h2>Benefícios para o seu negócio</h2>
            <p>Mais controle, mais lucro, menos preocupação.</p>
          </div>

          <div className={styles.cardGrid}>
            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <article className={styles.featureCard} key={benefit.title}>
                  <div className={styles.iconBox}>
                    <Icon size={22} />
                  </div>

                  <h3>{benefit.title}</h3>
                  <p>{benefit.description}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className={styles.section}>
          <div className={styles.sectionHeader}>
            <h2>Feito para quem vende todos os dias</h2>
            <p>O Fiado Zap foi criado para facilitar a vida de pequenos negócios.</p>
          </div>

          <div className={styles.audienceGrid}>
            {audiences.map((audience) => {
              const Icon = audience.icon;

              return (
                <div className={styles.audienceItem} key={audience.label}>
                  <div>
                    <Icon size={28} />
                  </div>
                  <strong>{audience.label}</strong>
                </div>
              );
            })}
          </div>

          <div className={styles.testimonials}>
            <article>
              <div>★★★★★</div>
              <p>
                “Antes eu perdia muito dinheiro porque esquecia de cobrar.
                Agora com o Fiado Zap está tudo controlado!”
              </p>
              <strong>Maria Silva</strong>
              <span>Dona de mercadinho</span>
            </article>

            <article>
              <div>★★★★★</div>
              <p>
                “Simples de usar e resolveu meu problema. Não uso mais caderno,
                tudo no celular agora.”
              </p>
              <strong>João Santos</strong>
              <span>Dono de bar</span>
            </article>
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.containerSmall}>
            <h2>Comece agora a organizar suas vendas</h2>
            <p>
              Baixe o Fiado Zap gratuitamente e tenha controle total do seu fiado.
            </p>

            <div className={styles.storeButtons}>
              <a href="#" aria-label="Baixar na App Store">
                <img src="/img/app-store.png" alt="Disponível na App Store" />
              </a>

              <a href="#" aria-label="Baixar no Google Play">
                <img src="/img/google-play.png" alt="Disponível no Google Play" />
              </a>
            </div>

            <span>Disponível para iOS e Android</span>
          </div>
        </section>
      </main>
    </Layout>
  );
}