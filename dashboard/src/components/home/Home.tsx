import "./Home.css";
import {
  FaceSmileIcon,
  ChevronUpIcon,
  ChevronDownIcon,
  CheckCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/solid";
import { CssVarsProvider } from "@mui/joy/styles";
import { CircularProgress } from "@mui/joy";

function Home() {
  return (
    <section className="container">
      <div className="box box-info">
        <div id="nps-geral">
          <h1>NPS geral</h1>
          <div id="icon-nps">
            <FaceSmileIcon className="icon-smile" />
            <h3 id="status-nps">Excelente !</h3>
          </div>
          <span>NPS score 75</span>
        </div>
        <div id="vendas-fechadas">
          <h1>Vendas fechadas</h1>
          <div id="grafico-vendas">
            <CssVarsProvider>
              <CircularProgress
                variant="soft"
                sx={{
                  "--CircularProgress-size": "150px",
                  "--CircularProgress-track-thickness": "25px",
                  "--CircularProgress-progress-thickness": "27px",
                }}
                determinate
                value={70}
              >
                70%
              </CircularProgress>
            </CssVarsProvider>
          </div>
          <div className="icon-text">
            <CheckCircleIcon className="icon-20 icon-white" />
            <span>Esperado 100</span>
            <InformationCircleIcon className="icon-20 icon-blue" />
            <span>Alcançado 70</span>
          </div>
        </div>
        <div id="meta-mensal">
          <h1>Meta mensal</h1>
          <div id="grafico-meta">
            <CssVarsProvider>
              <CircularProgress
                variant="soft"
                sx={{
                  "--CircularProgress-size": "150px",
                  "--CircularProgress-track-thickness": "25px",
                  "--CircularProgress-progress-thickness": "27px",
                }}
                determinate
                value={90}
                color="info"
              >
                90%
              </CircularProgress>
            </CssVarsProvider>
          </div>
          <div className="icon-text">
            <CheckCircleIcon className="icon-20 icon-white" />
            <span>Esperado R$ 70K</span>
            <InformationCircleIcon className="icon-20 icon-purple" />
            <span>Alcançado R$ 63K</span>
          </div>
        </div>
      </div>
      <div className="box box-vendas">
        <div id="title-vendas">
          <h1>Vendas por dia da semana</h1>
        </div>
        <div id="vendas-content">
          <div className="vendas-semana">
            <div id="mais-vendido">
              <div className="icon-text">
                <ChevronUpIcon className="icon-20 icon-up" />
                <span>dia com mais vendas</span>
              </div>
              <h3>quarta-feira</h3>
            </div>
            <div id="menos-vendido">
              <div className="icon-text">
                <ChevronDownIcon className="icon-20 icon-down" />
                <span>dia com menos vendas</span>
              </div>
              <h3>segunda-feira</h3>
            </div>
          </div>
          <div className="vendas-semana box-semana">
            <div className="box-vendas-semana">
              <div id="divider"></div>
              <div id="grafico-vendas-semana">
                <div className="dia-semana">
                  <div id="segunda-feira"></div>
                  <span>seg</span>
                </div>
                <div className="dia-semana">
                  <div id="terca-feira"></div>
                  <span>ter</span>
                </div>
                <div className="dia-semana">
                  <div id="quarta-feira"></div>
                  <span>qua</span>
                </div>
                <div className="dia-semana">
                  <div id="quinta-feira"></div>
                  <span>qui</span>
                </div>
                <div className="dia-semana">
                  <div id="sexta-feira"></div>
                  <span>sex</span>
                </div>
                <div className="dia-semana">
                  <div id="sabado"></div>
                  <span>sab</span>
                </div>
                <div className="dia-semana">
                  <div id="domingo"></div>
                  <span>dom</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Home;
